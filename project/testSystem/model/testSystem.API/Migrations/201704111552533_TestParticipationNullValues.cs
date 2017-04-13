namespace testSystem.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TestParticipationNullValues : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.TestParticipations", "DateCanceled", c => c.DateTime());
            AlterColumn("dbo.TestParticipations", "DatePassed", c => c.DateTime());
            AlterColumn("dbo.TestParticipations", "Result", c => c.Int());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.TestParticipations", "Result", c => c.Int(nullable: false));
            AlterColumn("dbo.TestParticipations", "DatePassed", c => c.DateTime(nullable: false));
            AlterColumn("dbo.TestParticipations", "DateCanceled", c => c.DateTime(nullable: false));
        }
    }
}
