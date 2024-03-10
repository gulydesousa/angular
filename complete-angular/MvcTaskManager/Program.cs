using MvcTaskManager.Utils;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

//*******************
//CORS
//*******************
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp",
                        // Solo admitimos peticiones que vienen de localhost
        builder => builder.SetIsOriginAllowed(origin => new Uri(origin).Host == "localhost")
                            //Con puerto: Cambia a 4200 o al puerto donde se ejecuta tu app Angular
                            //builder.WithOrigins("http://localhost:4200")
                            .AllowAnyMethod()
                            .AllowAnyHeader());
});


// Add services to the container.
//Configuring the JSON serialization options for the controllers in an ASP.NET Core application.
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.Converters.Add(new DateOnlyJsonConverter());
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
        options.JsonSerializerOptions.PropertyNamingPolicy = null;
        // Configura el formato de fecha aquí
        options.JsonSerializerOptions.WriteIndented = true;
    });

var app = builder.Build();

//Para forzar el uso del protocolo HTTPS 
app.UseHsts();

app.UseHttpsRedirection();
//*******************
//CORS
app.UseCors("AllowAngularApp");
//*******************


app.UseAuthorization();

app.MapControllers();


app.Run();
