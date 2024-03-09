var builder = WebApplication.CreateBuilder(args);

//*******************
//CORS
//*******************
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowMyOrigin",
        builder => builder.SetIsOriginAllowed(origin => new Uri(origin).Host == "localhost")
                          .AllowAnyHeader()
                          .AllowAnyMethod());
});


// Add services to the container.

builder.Services.AddControllers();

var app = builder.Build();

//Para forzar el uso del protocolo HTTPS 
app.UseHsts();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

//*******************
//CORS
app.UseCors("AllowMyOrigin");
//*******************

app.Run();
