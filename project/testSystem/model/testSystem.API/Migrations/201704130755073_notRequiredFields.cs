namespace testSystem.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class notRequiredFields : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.TestParticipations", "Canceled", c => c.Boolean());
            AlterColumn("dbo.TestParticipations", "Passed", c => c.Boolean());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.TestParticipations", "Passed", c => c.Boolean(nullable: false));
            AlterColumn("dbo.TestParticipations", "Canceled", c => c.Boolean(nullable: false));
        }
    }
}
