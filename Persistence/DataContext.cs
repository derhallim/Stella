using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions options) : base(options){

        }

        public DbSet<Apartment> Apartments { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<OfferType> OfferTypes { get; set; }



        protected override void OnModelCreating(ModelBuilder builder){
            builder.Entity<City>().HasData(
                new City{ Id =1, Name = "Montreal" }, 
                new City { Id = 2, Name = "Vancouver"}, 
                new City { Id = 3, Name = "Calgary"}
            );

            builder.Entity<OfferType>().HasData(
                new OfferType{ Id=1, OfferName="Rent"}, 
                new OfferType{ Id=2, OfferName="Sale"}
            );
        }
      
    }
}
