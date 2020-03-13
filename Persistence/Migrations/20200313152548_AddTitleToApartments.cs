using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class AddTitleToApartments : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Apartments",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Agencies",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Telephone = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    PricePerHour = table.Column<decimal>(nullable: false),
                    AgencyType = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Agencies", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Agencies");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "Apartments");
        }
    }
}
