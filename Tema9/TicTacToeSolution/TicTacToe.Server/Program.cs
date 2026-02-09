using TicTacToe.Server.Hubs;

var builder = WebApplication.CreateBuilder(args);

// 1. Agregar servicios
builder.Services.AddRazorPages();
builder.Services.AddSignalR(); // Habilitar SignalR

// 2. Configurar CORS para pruebas locales (Móvil + PC)
builder.Services.AddCors(options =>
{
    options.AddPolicy("OpenCors", policy =>
    {
        policy.AllowAnyHeader()
              .AllowAnyMethod()
              .SetIsOriginAllowed((host) => true)
              .AllowCredentials();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
}
app.UseStaticFiles();
app.UseRouting();

// 3. Aplicar la política CORS
app.UseCors("OpenCors");
app.UseAuthorization();
app.MapRazorPages();

// 4. Mapear nuestro Hub
app.MapHub<GameHub>("/gameHub");

app.Run();
