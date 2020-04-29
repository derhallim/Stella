using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.CMS.Apartments;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApartmentsController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMediator _mediator;
        public ApartmentsController(IMediator mediator, DataContext context)
        {
            _mediator = mediator;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Apartment>>> List()
        {
            return await _mediator.Send(new List.Query());
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
        public async Task<ActionResult<Apartment>> Create([FromBody] Apartment apartment)
        {
            apartment.Id = System.Guid.NewGuid();
            var aprtment = await _context.Apartments.AddAsync(apartment);
            await _context.SaveChangesAsync();
            return Ok(aprtment);
        }

    }
}