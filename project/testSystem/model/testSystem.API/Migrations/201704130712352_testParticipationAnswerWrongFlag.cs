namespace testSystem.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class testParticipationAnswerWrongFlag : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.TestParticipationAnswers", "IsWrongAnswer", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.TestParticipationAnswers", "IsWrongAnswer");
        }
    }
}
