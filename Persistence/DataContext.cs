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
        public DbSet<Agency> Agencies { get; set; }
    }
}
