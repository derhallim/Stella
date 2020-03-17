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
                        Description = "Welcome to this ad, this apartment is really big with fancy view on Montreal downtown, please call us at: 514-222-2222 to know more", 
                        FullAddress = "3455 durocher street, h2x 2c9", 
                        IsAvailable = true, 
                        NumOfBathrooms = 1, 
                        NumOfRooms = 2, 
                        OfferType = "Rent", 
                        Price  = 1000, 
                        Title = "Apartment 5 1/2 in Downtown Montreal", 
                        ImageUrl= "https://stellaprojectstorage.blob.core.windows.net/5a8840f0-5d53-4383-0953-08d7c7631642/img3.jpg"
                    }, 
                    new Apartment{
                        City = "Montreal", 
                        Description = "Cozy studio for rent, all included in a great spot in Montreal, call 514-222-2222 for more info.", 
                        FullAddress = "2050 de maisonneuve ouest, h3h 1k7", 
                        IsAvailable = true, 
                        NumOfBathrooms = 1, 
                        NumOfRooms = 1, 
                        OfferType = "Rent", 
                        Price  = 750, 
                        Title= "Small Studio for rent in Montreal.", 
                        ImageUrl= "https://stellaprojectstorage.blob.core.windows.net/4c18688b-a12e-4dee-0954-08d7c7631642/img1.jpg"

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

            if(!context.Agencies.Any()){
                var agencies = new List<Agency> {
                    new Agency{
                        Email = "Elevator@ev1.com", 
                        IsActive = true, 
                        Name = "Electricians Specialists Group", 
                        PricePerHour = 50, 
                        Telephone = "514-493-2321", 
                        AgencyType="Electricians"
                    }, 
                    new Agency{
                        Email = "Elevator@ev2.com", 
                        IsActive = false, 
                        Name = "Montreal Plbumbers Inc. ", 
                        PricePerHour = 70, 
                        Telephone = "514-343-3432", 
                        AgencyType = "Plumbing"
                    }, 
                       new Agency{
                        Email = "Elevator@ev2.com", 
                        IsActive = false, 
                        Name = "Montreal Elevators Inc. ", 
                        PricePerHour = 70, 
                        Telephone = "514-343-3432", 
                        AgencyType = "Elevators"
                    }, 
                       new Agency{
                        Email = "Elevator@ev2.com", 
                        IsActive = false, 
                        Name = "Montreal Cleaners Inc. ", 
                        PricePerHour = 70, 
                        Telephone = "514-343-3432", 
                        AgencyType = "Cleaning"
                    }, 
                       new Agency{
                        Email = "Elevator@ev2.com", 
                        IsActive = false, 
                        Name = "Plumbing LTD. ", 
                        PricePerHour = 70, 
                        Telephone = "514-343-3432", 
                        AgencyType = "Plumbing"
                    }, 
                       new Agency{
                        Email = "Elevator@ev2.com", 
                        IsActive = false, 
                        Name = "Montreal Renovation Inc. ", 
                        PricePerHour = 70, 
                        Telephone = "514-343-3432", 
                        AgencyType = "Renovation"
                    }, 
                       new Agency{
                        Email = "Elevator@ev2.com", 
                        IsActive = false, 
                        Name = "Renovators LTD. ", 
                        PricePerHour = 70, 
                        Telephone = "514-343-3432", 
                        AgencyType = "Renovation"
                    }, 
                       new Agency{
                        Email = "Elevator@ev2.com", 
                        IsActive = false, 
                        Name = "Super Clean Inc.", 
                        PricePerHour = 70, 
                        Telephone = "514-343-3432", 
                        AgencyType = "Cleaning"
                    }
                };
                context.Agencies.AddRange(agencies);
            }

                context.SaveChanges();

        }
    }
}