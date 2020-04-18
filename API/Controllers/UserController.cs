using System.Threading.Tasks;
using Application.User;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UserController : BaseController
    {
        
        [HttpPost("login")]
        public async Task<ActionResult<User>> Login(Login.Query query){
            return await Mediator.Send(query);
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<User>> CurrentUser(){
            return await Mediator.Send(new CurrentUser.Query());
        }
    }
}