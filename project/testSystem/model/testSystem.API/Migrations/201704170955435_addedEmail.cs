namespace testSystem.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addedEmail : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.TestTakers", "EMail", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.TestTakers", "EMail");
        }
    }
}
