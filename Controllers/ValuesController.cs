using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySqlConnector;
using ProjectDSK;
using System;
using System.Collections.Generic;

namespace ProjectDSK.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DSKController : ControllerBase
    {
        [HttpGet(Name = "GetUserDetails")]
        public IEnumerable<UserDetails> Get()
        {
            string connectionString = "Server=localhost;User=root;Password=Aanshu30;Database=sample";

            List<UserDetails> userDetailsList = new List<UserDetails>();

            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                try
                {
                    connection.Open();
                    Console.WriteLine("Connected to the MySQL database.");
                    string sqlQuery = "SELECT Name, Email, Number FROM UserData";
                    using (MySqlCommand cmd = new MySqlCommand(sqlQuery, connection))
                    {
                        using (MySqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                UserDetails userDetails = new UserDetails
                                {
                                    Name = reader["Name"].ToString(),
                                    Number = reader["Number"].ToString(),
                                    Email = reader["Email"].ToString()
                                };
                                userDetailsList.Add(userDetails);
                            }
                        }
                    }
                }
                catch (MySqlException ex)
                {
                    Console.WriteLine("Error: " + ex.Message);
                }
            }
            return userDetailsList;
        }

        [HttpPost(Name = "User")]
        public IActionResult POST([FromBody] UserDetails ud)
        {
            if (ud == null)
            {
                return BadRequest("Invalid Data Received.");
            }
            string connectionString = "Server=localhost;User=root;Password=Aanshu30;Database=sample";

            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                try
                {
                    connection.Open();
                    string query = "INSERT INTO UserData (Name, Email, Number) VALUES (@Name, @Email, @Number)";

                    using (MySqlCommand cmd = new MySqlCommand(query, connection))
                    {
                        cmd.Parameters.AddWithValue("@Name", ud.Name);
                        cmd.Parameters.AddWithValue("@Email", ud.Email);
                        cmd.Parameters.AddWithValue("@Number", ud.Number);

                        int affectedRows = cmd.ExecuteNonQuery();

                        if (affectedRows > 0)
                        {
                            return Ok("User information added successfully.");
                        }
                        else
                        {
                            return StatusCode(500, "Failed to insert user.");
                        }
                    }
                }
                catch (MySqlException ex)
                {
                    Console.WriteLine("Error: " + ex.Message);
                    return StatusCode(500, "Failed to insert user.");
                }
            }
        }
    }
}
