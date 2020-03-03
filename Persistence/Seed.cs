using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context){
            if(!context.Apartments.Any()){
                var apartments = new List<Apartment>{
                    new Apartment{
                        City = "Montreal", 
                        Description = "Fancy 4 1/2 apartment in downtown!", 
                        FullAddress = "3455 durocher street, h2x 2c9", 
                        IsAvailable = true, 
                        NumOfBathrooms = 1, 
                        NumOfRooms = 2, 
                        OfferType = "Rent", 
                        Price  = 1000
                    }, 
                    new Apartment{
                        City = "Montreal", 
                        Description = "Studio for rent!", 
                        FullAddress = "2050 de maisonneuve ouest, h3h 1k7", 
                        IsAvailable = true, 
                        NumOfBathrooms = 1, 
                        NumOfRooms = 1, 
                        OfferType = "Rent", 
                        Price  = 750
                    }
                };
                context.Apartments.AddRange(apartments);
            }
        
            if(!context.Cities.Any()){
                var cities = new List<City>{
                    new City{
                        Name = "Montreal"
                    }, 
                    new City{
                        Name = "Calgary"
                    }, 
                    new City{
                        Name = "Vancouver"
                    }
                };
                context.Cities.AddRange(cities);

            }

                if(!context.OfferTypes.Any()){
                var offers = new List<OfferType>{
                    new OfferType{
                        OfferName= "Rent"
                    }, 
                    new OfferType{
                        OfferName = "Sale"
                    }
                };
                context.OfferTypes.AddRange(offers);

            }


                context.SaveChanges();

        }
    }
}