namespace testSystem.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class removedTestTakerAccountLink : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.TestTakers", "AccountId", "dbo.Accounts");
            DropIndex("dbo.TestTakers", new[] { "AccountId" });
            DropColumn("dbo.TestTakers", "AccountId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.TestTakers", "AccountId", c => c.Int(nullable: false));
            CreateIndex("dbo.TestTakers", "AccountId");
            AddForeignKey("dbo.TestTakers", "AccountId", "dbo.Accounts", "AccountId", cascadeDelete: true);
        }
    }
}
