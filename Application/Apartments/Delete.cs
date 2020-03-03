using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Apartments
{
    public class Delete
    {
        public class Command: IRequest{
          public   Guid id {set; get;}
        }
        
        public class Handler: IRequestHandler<Command>{
          private readonly DataContext _context; 
          public Handler(DataContext context){
            _context = context; 
          }
        
        public async Task<Unit> Handle(Command request, CancellationToken cancellationToken){
         //handler logic here 

         var apartment = await _context.Apartments.FindAsync(request.id);

        if(apartment == null){
            throw new Exception("Apartment not found");
        }
             
        _context.Remove(apartment);
        
        var success = await _context.SaveChangesAsync() > 0;
        
        if(success) return Unit.Value; 
        
        throw new Exception("Problem saving changes"); 
        }
        }
    }
}