namespace testSystem.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changingForeignKeys : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.ContactInfoes", "ContactInfoId", "dbo.TestTakers");
            DropIndex("dbo.ContactInfoes", new[] { "ContactInfoId" });
            DropPrimaryKey("dbo.ContactInfoes");
            AddColumn("dbo.ContactInfoes", "TestTakerId", c => c.Int(nullable: false));
            AddPrimaryKey("dbo.ContactInfoes", "TestTakerId");
            CreateIndex("dbo.ContactInfoes", "TestTakerId");
            AddForeignKey("dbo.ContactInfoes", "TestTakerId", "dbo.TestTakers", "TestTakerId");
            DropColumn("dbo.TestTakers", "ContactInfoId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.TestTakers", "ContactInfoId", c => c.Int(nullable: false));
            DropForeignKey("dbo.ContactInfoes", "TestTakerId", "dbo.TestTakers");
            DropIndex("dbo.ContactInfoes", new[] { "TestTakerId" });
            DropPrimaryKey("dbo.ContactInfoes");
            DropColumn("dbo.ContactInfoes", "TestTakerId");
            AddPrimaryKey("dbo.ContactInfoes", "ContactInfoId");
            CreateIndex("dbo.ContactInfoes", "ContactInfoId");
            AddForeignKey("dbo.ContactInfoes", "ContactInfoId", "dbo.TestTakers", "TestTakerId");
        }
    }
}
