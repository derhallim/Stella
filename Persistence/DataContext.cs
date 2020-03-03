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
            // builder.Entity<City>().HasData(
            //     new City{ Id = new Guid(), Name = "Montreal" }, 
            //     new City { Id = new Guid(), Name = "Vancouver"}, 
            //     new City { Id = new Guid(), Name = "Calgary"}
            // );

            // builder.Entity<OfferType>().HasData(
            //     new OfferType{ Id=new Guid(), OfferName="Rent"}, 
            //     new OfferType{ Id=new Guid(), OfferName="Sale"}
            // );
        }
      
    }
}
