using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Apartments;
using Azure.Storage.Blobs;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Persistence;
using System.IO;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMediator _mediator;
        public ImagesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task List()
        {
            string connectionString = "DefaultEndpointsProtocol=https;AccountName=stellaprojectstorage;AccountKey=/19q4Pus/z1kq6jU4tgFKC0VM9yOZ9ZEY34sFZ9Zr/rLZ3eHFHYjj8YBnJr5YhP03sEzAdG53QoMvBG8/u+Qug==;EndpointSuffix=core.windows.net";
            BlobServiceClient blobServiceClient = new BlobServiceClient(connectionString);
            BlobContainerClient containerClient =  blobServiceClient.GetBlobContainerClient("stellacontainer");
            string localPath = "./data/";
            string fileName = "quickstart" + Guid.NewGuid().ToString() + ".txt";
            string localFilePath = Path.Combine(localPath, fileName);
            await System.IO.File.WriteAllTextAsync(localFilePath, "Hello, World!");
            BlobClient blobClient = containerClient.GetBlobClient(fileName);
            Console.WriteLine("Uploading to Blob storage as blob:\n\t {0}\n", blobClient.Uri);
            using FileStream uploadFileStream = System.IO.File.OpenRead(localFilePath);
            await blobClient.UploadAsync(uploadFileStream, true);
            uploadFileStream.Close();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Apartment>> Details(Guid id)
        {
            return await _mediator.Send(new Details.Query { Id = id });
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Edit.Command command)
        {
            command.Id = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await _mediator.Send(new Delete.Command { id = id });
        }

        [HttpPost]
        public async Task Add([FromBody] Image Image){
        
            // string localPath = "./data/";
            // string fileName = "quickstart" + Guid.NewGuid().ToString() + ".txt";
            // string localFilePath = Path.Combine(localPath, fileName);
            // await System.IO.File.WriteAllTextAsync(localFilePath, "Hello, World!");
            // Console.WriteLine("Uploading to Blob storage as blob:\n\t {0}\n", blobClient.Uri);
            // using FileStream uploadFileStream = System.IO.File.OpenRead(localFilePath);
            string connectionString = "DefaultEndpointsProtocol=https;AccountName=stellaprojectstorage;AccountKey=/19q4Pus/z1kq6jU4tgFKC0VM9yOZ9ZEY34sFZ9Zr/rLZ3eHFHYjj8YBnJr5YhP03sEzAdG53QoMvBG8/u+Qug==;EndpointSuffix=core.windows.net";
            BlobServiceClient blobServiceClient = new BlobServiceClient(connectionString);
            BlobContainerClient containerClient =  blobServiceClient.GetBlobContainerClient("stellacontainer");
            BlobClient blobClient = containerClient.GetBlobClient(Image.filename);
            
            //Convert Base64 Encoded string to Byte Array.
            byte[] imageBytes = Convert.FromBase64String(Image.base64string);
            System.IO.Stream stream = new System.IO.MemoryStream(imageBytes);

            await blobClient.UploadAsync(stream, true);
            // uploadFileStream.Close();
        }
    }

    public class Image{
         public string base64string { set; get;}
         public  string filename { set; get;}
    }
}