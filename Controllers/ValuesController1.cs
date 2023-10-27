using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
namespace ProjectDSK.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController1 : ControllerBase
    {
        var configuration = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json")
    .Build();

        string connectionString = configuration.GetConnectionString("DefaultConnection");
using (MySqlConnection connection = new MySqlConnection(connectionString))
{
    connection.Open();
    // Use the connection to interact with the database
}
    }
}
