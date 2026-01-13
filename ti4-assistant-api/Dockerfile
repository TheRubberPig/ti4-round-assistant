FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src
COPY ["ti4-assistant-api.csproj", "./"]
RUN dotnet restore "./ti4-assistant-api.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "ti4-assistant-api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ti4-assistant-api.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ti4-assistant-api.dll"]