namespace testSystem.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class accountFixes : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Accounts", "FullName", c => c.String());
            AddColumn("dbo.Accounts", "FieldOfUse", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Accounts", "FieldOfUse");
            DropColumn("dbo.Accounts", "FullName");
        }
    }
}
