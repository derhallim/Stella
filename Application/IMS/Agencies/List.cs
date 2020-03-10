using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.IMS.Agencies
{
    public class List
    {
         public class Query : IRequest<List<Agency>>
        { 
            public string _AgencyType { get; set; }

            public Query(string AgencyType)
            {
                _AgencyType = AgencyType;
            }
        }

        public class Handler : IRequestHandler<Query, List<Agency>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Agency>> Handle(Query request, CancellationToken cancellationToken)
            {
                var agencies = await _context.Agencies.Where(a => a.AgencyType == request._AgencyType).ToListAsync(); 
                return agencies;
            }
        }
    }
}