using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Apartments
{
    public class List
    {
        public class Query : IRequest<List<Apartment>>
        {


        }

        public class Handler : IRequestHandler<Query, List<Apartment>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<List<Apartment>> Handle(Query request, CancellationToken cancellationToken)
            {
                var apartments = await _context.Apartments.ToListAsync(); 
                return apartments;
            }
        }
    }
}