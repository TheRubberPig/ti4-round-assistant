using Microsoft.Extensions.Caching.Distributed;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.Threading.Tasks;
using System.Text.Json;

public class RequestMiddleware
{
    private readonly IDistributedCache _cache;
    private readonly RequestDelegate _next;

    public RequestMiddleware(RequestDelegate next, IDistributedCache cache)
    {
        _cache = cache;
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        // 1. Check for header
        if (!context.Request.Headers.TryGetValue("X-Client-Key", out var clientKey))
        {
            await _next(context);
            return;
        }

        var cachedData = await _cache.GetAsync(clientKey);
        if (cachedData != null)
        {
            await ReplayResponse(context, cachedData);
            return;
        }

        var bodyStream = context.Response.Body;
        using (MemoryStream memoryStream = new MemoryStream())
        {
            context.Response.Body = memoryStream;

            await _next(context);
            if (context.Response.StatusCode >= 200 && context.Response.StatusCode < 300)
            {
                memoryStream.Seek(0, SeekOrigin.Begin);
                var responseBody = await new StreamReader(memoryStream).ReadToEndAsync();
            
                var resultToCache = new Response(
                    context.Response.StatusCode, 
                    responseBody, 
                    context.Response.ContentType);

                await _cache.SetStringAsync(clientKey, JsonSerializer.Serialize(resultToCache), new DistributedCacheEntryOptions { AbsoluteExpirationRelativeToNow = TimeSpan.FromHours(24) });
            }

            await memoryStream.CopyToAsync(bodyStream);
        }
    }

    private async Task ReplayResponse(HttpContext context, byte[] cachedData)
    {
        // 1. Deserialize the cached object
        var response = JsonSerializer.Deserialize<Response>(cachedData);

        if (response == null) 
        {
            return;
        }

        // 2. Set the status code and content type back to the original values
        context.Response.StatusCode = response.StatusCode;
        context.Response.ContentType = response.ContentType;

        // 3. Optional: Add a custom header to tell the client this was a replayed result
        context.Response.Headers.Append("X-Idempotency-Replayed", "true");

        // 3. Write the cached body back to the response stream
        await context.Response.WriteAsync(response.Body);
    }
}