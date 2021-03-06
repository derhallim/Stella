﻿using System;
using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext: IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options){

        }

        public DbSet<Apartment> Apartments { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<OfferType> OfferTypes { get; set; }
        public DbSet<Agency> Agencies { get; set; }


    protected override void OnModelCreating(ModelBuilder builder)   {
        base.OnModelCreating(builder);
    }

    }
}
