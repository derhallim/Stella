namespace Domain
{
    public class Apartment
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int NumOfRooms { get; set; }
        public int NumOfBathrooms { get; set; }
        public bool IsForSale { get; set; }
        public decimal Price { get; set; }
        public bool IsAvailable { get; set; }
    }
}