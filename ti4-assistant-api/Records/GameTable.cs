public record GameTable
{
    public required double Id { get; init; }
    public required string SessionCode { get; init; }
    public required DateTime CreatedAt { get; init; }
    public required State State { get; init; }
    public required int RoundNumber { get; init; }
    public int ActivePlayerId { get; set; }
    public Phase Phase { get; set; }
    public int VPLimit { get; set; }
    public int SpeakerPlayerId { get; set; }
}