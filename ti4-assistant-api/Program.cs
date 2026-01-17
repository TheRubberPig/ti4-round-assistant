var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddOpenApi();
builder.Services.AddScoped<IGameService, GameService>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}
app.MapGet("/", () => "API is running");
app.MapPost("/game/create", (IGameService gameService) => {
    return gameService.CreateGame();
});

app.UseHttpsRedirection();
app.Run();