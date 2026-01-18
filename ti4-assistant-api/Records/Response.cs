public record Response
{
    public Response(int statusCode, string body, string contentType)
    {
        StatusCode = statusCode;
        Body = body;
        ContentType = contentType;
    }
    
    public int StatusCode { get; init; }
    public string Body { get; init; }
    public string ContentType { get; init; }
}