using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApartmentsController
    {
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get(){
            return new string[] { "value1", "value2"};
        }

        [HttpGet]
        public ActionResult<string> Get(int id){
            return "value";
        }

        [HttpPost]
        public void Post([FromBody] string value){
            
        }
    }
}