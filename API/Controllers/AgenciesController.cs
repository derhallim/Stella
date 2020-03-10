using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.IMS.Agencies;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgenciesController : ControllerBase
    {
        private readonly IMediator _mediator;
        public AgenciesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet()]
        public async Task<ActionResult<IEnumerable<Agency>>> List(string AgencyType)
        {
            return await _mediator.Send(new List.Query(AgencyType));
        }

        

        // [HttpGet("{id}")]
        // public async Task<ActionResult<Apartment>> Details(Guid id)
        // {
        //     return await _mediator.Send(new Details.Query { Id = id });
        // }

        // [HttpPut("{id}")]
        // public async Task<ActionResult<Unit>> Edit(Guid id, Edit.Command command)
        // {
        //     command.Id = id;
        //     return await _mediator.Send(command);
        // }

        // [HttpDelete("{id}")]
        // public async Task<ActionResult<Unit>> Delete(Guid id)
        // {
        //     return await _mediator.Send(new Delete.Command { id = id });
        // }
    }
}