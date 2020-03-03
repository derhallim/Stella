using System;

namespace Domain
{
    public class Apartment
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
}