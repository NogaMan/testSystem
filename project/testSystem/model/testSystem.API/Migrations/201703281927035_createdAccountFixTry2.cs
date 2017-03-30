namespace testSystem.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class createdAccountFixTry2 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Tests", "CreatedAccount_AccountId", "dbo.Accounts");
            DropForeignKey("dbo.TestTakers", "CreatedAccount_AccountId", "dbo.Accounts");
            DropIndex("dbo.TestTakers", new[] { "CreatedAccount_AccountId" });
            DropIndex("dbo.Tests", new[] { "CreatedAccount_AccountId" });
            RenameColumn(table: "dbo.Tests", name: "CreatedAccount_AccountId", newName: "AccountId");
            RenameColumn(table: "dbo.TestTakers", name: "CreatedAccount_AccountId", newName: "AccountId");
            AlterColumn("dbo.TestTakers", "AccountId", c => c.Int(nullable: false));
            AlterColumn("dbo.Tests", "AccountId", c => c.Int(nullable: false));
            CreateIndex("dbo.TestTakers", "AccountId");
            CreateIndex("dbo.Tests", "AccountId");
            AddForeignKey("dbo.Tests", "AccountId", "dbo.Accounts", "AccountId", cascadeDelete: true);
            AddForeignKey("dbo.TestTakers", "AccountId", "dbo.Accounts", "AccountId", cascadeDelete: false);
            DropColumn("dbo.TestTakers", "CreatedAccountId");
            DropColumn("dbo.Tests", "CreatedAccountId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Tests", "CreatedAccountId", c => c.Int(nullable: false));
            AddColumn("dbo.TestTakers", "CreatedAccountId", c => c.Int(nullable: false));
            DropForeignKey("dbo.TestTakers", "AccountId", "dbo.Accounts");
            DropForeignKey("dbo.Tests", "AccountId", "dbo.Accounts");
            DropIndex("dbo.Tests", new[] { "AccountId" });
            DropIndex("dbo.TestTakers", new[] { "AccountId" });
            AlterColumn("dbo.Tests", "AccountId", c => c.Int());
            AlterColumn("dbo.TestTakers", "AccountId", c => c.Int());
            RenameColumn(table: "dbo.TestTakers", name: "AccountId", newName: "CreatedAccount_AccountId");
            RenameColumn(table: "dbo.Tests", name: "AccountId", newName: "CreatedAccount_AccountId");
            CreateIndex("dbo.Tests", "CreatedAccount_AccountId");
            CreateIndex("dbo.TestTakers", "CreatedAccount_AccountId");
            AddForeignKey("dbo.TestTakers", "CreatedAccount_AccountId", "dbo.Accounts", "AccountId");
            AddForeignKey("dbo.Tests", "CreatedAccount_AccountId", "dbo.Accounts", "AccountId");
        }
    }
}
