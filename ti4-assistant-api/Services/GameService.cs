using Microsoft.AspNetCore.Http;

public class GameService : IGameService
{
    public GameService()
    {
        
    }

    public IResult CreateGame()
    {
        return Results.Ok();
    }
}