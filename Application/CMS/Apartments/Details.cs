using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.CMS.Apartments
{
    public class Details
    {
        public class Query : IRequest<Apartment>
        {
            public Guid Id { set; get; }
        }

        public class Handler : IRequestHandler<Query, Apartment>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Apartment> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Apartments.FindAsync(request.Id);
            }
        }
    }
}