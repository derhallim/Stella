using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class AddingCities : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsForSale",
                table: "Apartments");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Apartments",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FullAddress",
                table: "Apartments",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OfferType",
                table: "Apartments",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Cities",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cities", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cities");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Apartments");

            migrationBuilder.DropColumn(
                name: "FullAddress",
                table: "Apartments");

            migrationBuilder.DropColumn(
                name: "OfferType",
                table: "Apartments");

            migrationBuilder.AddColumn<bool>(
                name: "IsForSale",
                table: "Apartments",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
