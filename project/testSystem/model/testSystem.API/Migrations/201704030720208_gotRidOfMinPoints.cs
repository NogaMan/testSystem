namespace testSystem.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class gotRidOfMinPoints : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Tests", "MinPoints");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Tests", "MinPoints", c => c.Int(nullable: false));
        }
    }
}
