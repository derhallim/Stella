using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApartmentsController: ControllerBase
    {
        private readonly DataContext _context;
        public ApartmentsController(DataContext context)
        {
            _context = context;

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Apartment>>> Get()
        {
            var apartments = await _context.Apartments.ToListAsync();
            return Ok(apartments);
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