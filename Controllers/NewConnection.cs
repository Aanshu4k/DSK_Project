using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySqlConnector;
using ProjectDSK;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
namespace ProjectDSK.Controllers;


[Route("api/[controller]")]
[ApiController]
public class NewConnection : ControllerBase
{
    [HttpGet(Name = "GetConsumerDetails")]
    public IEnumerable<ConsumerDetails> Get()
    {
        string connectionString = "Server=localhost;User=root;Password=Aanshu30;Database=dsk";

        List<ConsumerDetails> ConsumerDetailsList = new List<ConsumerDetails>();

        using (MySqlConnection connection = new MySqlConnection(connectionString))
        {
            try
            {
                connection.Open();
                Console.WriteLine("Connected to the MySQL database.");
                string sqlQuery = "SELECT RequestNo,ConsumerType,title,name,salutation,FHname,FirmName,Authorname,DesigOfSig,OrgType,IncorpDate,GSTNo,PANNo from Cinfo";
                using (MySqlCommand cmd = new MySqlCommand(sqlQuery, connection))
                {
                    using (MySqlDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            ConsumerDetails ConsumerDetails = new ConsumerDetails
                            {
                                RequestNo= reader["RequestNo"].ToString(),
                                ConsumerType = reader["ConsumerType"].ToString(),
                                Title = reader["title"].ToString(),
                                Name = reader["Name"].ToString(),
                                salutation = reader["salutation"].ToString(),
                                FHname = reader["FHname"].ToString(),
                                FirmName = reader["FirmName"].ToString(),
                                Authorname = reader["Authorname"].ToString(),
                                DesigOfSig = reader["DesigOfSig"].ToString(),
                                OrgType = reader["OrgType"].ToString(),
                                IncorpDate = reader["IncorpDate"].ToString(),
                                GSTNo = reader["GSTNo"].ToString(),
                                PANNo = reader["PANNo"].ToString(),
                            };
                            ConsumerDetailsList.Add(ConsumerDetails);
                        }
                    }
                }
            }
            catch (MySqlException ex)
            {
                Console.WriteLine("Error: " + ex.Message);
            }
        }
        return ConsumerDetailsList;
    }

    [HttpPost(Name = "PostConsumerDetails")]
    public IActionResult POST([FromBody] ConsumerDetails ud)
    {
        string timestamp = DateTime.Now.ToString("ddMMyyyy");
        string randomSuffix = new Random().Next(1000, 10000).ToString();
        string uniqueRequestNumber = $"R{timestamp}{randomSuffix}";
        ud.RequestNo = uniqueRequestNumber;
        if (ud == null)
        {
            return BadRequest("Invalid Data Received.");
        }
        string connectionString = "Server=localhost;User=root;Password=Aanshu30;Database=dsk";

        using (MySqlConnection connection = new MySqlConnection(connectionString))
        {
            try
            {
                connection.Open();
                string query1 = "INSERT INTO cinfo (RequestNo,ConsumerType,Title,name,salutation,fhname,FirmName,Authorname,DesigOfSig,OrgType,IncorpDate,GSTNo,PANNo) VALUES (@RequestNo,@ConsumerType,@Title,@name,@salutation,@fhname,@FirmName,@Authorname,@DesigOfSig,@OrgType,@IncorpDate,@GSTNo,@PANNo)";

                using (MySqlCommand cmd1 = new MySqlCommand(query1, connection)) // Individual component
                {
                    //cmd1.Parameters.AddWithValue("@Id", ud.Id);
                    cmd1.Parameters.AddWithValue("@RequestNo", uniqueRequestNumber);
                    cmd1.Parameters.AddWithValue("@ConsumerType", ud.ConsumerType);
                    cmd1.Parameters.AddWithValue("@title", ud.Title);
                    cmd1.Parameters.AddWithValue("@name", ud.Name);
                    cmd1.Parameters.AddWithValue("@salutation", ud.salutation);
                    cmd1.Parameters.AddWithValue("@fhname", ud.FHname);
                    cmd1.Parameters.AddWithValue("@FirmName", ud.FirmName);
                    cmd1.Parameters.AddWithValue("@Authorname", ud.Authorname);
                    cmd1.Parameters.AddWithValue("@DesigOfSig", ud.DesigOfSig);
                    cmd1.Parameters.AddWithValue("@OrgType", ud.OrgType);
                    cmd1.Parameters.AddWithValue("@IncorpDate", ud.IncorpDate);
                    cmd1.Parameters.AddWithValue("@GSTNo", ud.GSTNo);
                    cmd1.Parameters.AddWithValue("@PANNo", ud.PANNo);
                    int affectedRows1 = cmd1.ExecuteNonQuery();

                    if (affectedRows1 > 0)
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

    //[HttpPost("UploadImage")]
    //public async Task<IActionResult> UploadImage(IFormFile photo, IFormFile signature)
    //{
    //    if (photo == null || signature == null)
    //    {
    //        return BadRequest("Invalid Data Received.");
    //    }

    //    try
    //    {
    //        byte[] photoData;
    //        byte[] signatureData;

    //        using (MemoryStream photoStream = new MemoryStream())
    //        using (MemoryStream signatureStream = new MemoryStream())
    //        {
    //            await photo.CopyToAsync(photoStream);
    //            await signature.CopyToAsync(signatureStream);
    //            photoData = photoStream.ToArray();
    //            signatureData = signatureStream.ToArray();
    //        }

    //        string connectionString = "Server=localhost;User=root;Password=Aanshu30;Database=dsk";
    //        using (MySqlConnection connection = new MySqlConnection(connectionString))
    //        {
    //            connection.Open();

    //            string query = "INSERT INTO cinfo (PhotoData, SignatureData) VALUES (@photoData, @signatureData)";

    //            using (MySqlCommand cmd = new MySqlCommand(query, connection))
    //            {
    //                cmd.Parameters.Add("@photoData", MySqlDbType.Blob).Value = photoData;
    //                cmd.Parameters.Add("@signatureData", MySqlDbType.Blob).Value = signatureData;
    //                int affectedRows = cmd.ExecuteNonQuery();

    //                if (affectedRows > 0)
    //                {
    //                    return Ok("Images uploaded successfully.");
    //                }
    //                else
    //                {
    //                    return StatusCode(500, "Failed to upload images.");
    //                }
    //            }
    //        }
    //    }
    //    catch (Exception ex)
    //    {
    //        return StatusCode(500, "Failed to upload images.");
    //    }
    //}


}

