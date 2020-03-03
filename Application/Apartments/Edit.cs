using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Apartments
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Description { get; set; }
            public int NumOfRooms { get; set; }
            public int NumOfBathrooms { get; set; }
            public string OfferType { get; set; }
            public decimal Price { get; set; }
            public bool IsAvailable { get; set; }
            public string City { get; set; }
            public string FullAddress { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var apartment = await _context.Apartments.FindAsync(request.Id);

                if(apartment == null)
                    throw new Exception("Could not find the apartment");

                apartment.Description = request.Description ?? apartment.Description;
                apartment.FullAddress = request.FullAddress ?? apartment.FullAddress;
                apartment.IsAvailable = request.IsAvailable ;
                apartment.NumOfBathrooms = request.NumOfBathrooms; 
                apartment.NumOfRooms = request.NumOfRooms; 


                //handler logic here 
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}