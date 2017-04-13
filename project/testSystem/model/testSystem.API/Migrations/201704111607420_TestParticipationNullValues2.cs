namespace testSystem.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TestParticipationNullValues2 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.TestParticipations", "Passed", c => c.Boolean(nullable: true));
            AlterColumn("dbo.TestParticipations", "Canceled", c => c.Boolean(nullable: true));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.TestParticipations", "Passed", c => c.Boolean(nullable: false));
            AlterColumn("dbo.TestParticipations", "Canceled", c => c.Boolean(nullable: false));
        }
    }
}
