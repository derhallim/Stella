using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Apartments;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApartmentsController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMediator _mediator;
        public ApartmentsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Apartment>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Apartment>> Get(int id)
        {
            var apartment = await _context.Apartments.FindAsync(id);
            return Ok(apartment);
        }

        [HttpPost]
        public void Post([FromBody] string value)
        {

        }
    }
}