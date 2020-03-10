using System;

namespace Domain
{
    public class Agency 
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Telephone { get; set; }
        public string Email { get; set; }
        public bool IsActive { get; set; }
        public decimal PricePerHour { get; set; }
        public string AgencyType { get; set;}
    }
}