namespace testSystem.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ParticipationAccountIdChange : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Audiences", "CreatedAccount_AccountId", "dbo.Accounts");
            DropIndex("dbo.Audiences", new[] { "CreatedAccount_AccountId" });
            RenameColumn(table: "dbo.Audiences", name: "CreatedAccount_AccountId", newName: "AccountId");
            AlterColumn("dbo.Audiences", "AccountId", c => c.Int(nullable: false));
            CreateIndex("dbo.Audiences", "AccountId");
            AddForeignKey("dbo.Audiences", "AccountId", "dbo.Accounts", "AccountId", cascadeDelete: true);
            DropColumn("dbo.Audiences", "CreatedAccountId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Audiences", "CreatedAccountId", c => c.Int(nullable: false));
            DropForeignKey("dbo.Audiences", "AccountId", "dbo.Accounts");
            DropIndex("dbo.Audiences", new[] { "AccountId" });
            AlterColumn("dbo.Audiences", "AccountId", c => c.Int());
            RenameColumn(table: "dbo.Audiences", name: "AccountId", newName: "CreatedAccount_AccountId");
            CreateIndex("dbo.Audiences", "CreatedAccount_AccountId");
            AddForeignKey("dbo.Audiences", "CreatedAccount_AccountId", "dbo.Accounts", "AccountId");
        }
    }
}
