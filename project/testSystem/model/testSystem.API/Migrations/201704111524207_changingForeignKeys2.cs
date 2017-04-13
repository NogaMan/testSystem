namespace testSystem.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changingForeignKeys2 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.ContactInfoes", "ContactInfoId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.ContactInfoes", "ContactInfoId", c => c.Int(nullable: false));
        }
    }
}
