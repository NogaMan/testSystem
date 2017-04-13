namespace testSystem.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MSPleaseDie : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.TestParticipationAnswers", "Question_QuestionId", "dbo.Questions");
            DropIndex("dbo.TestParticipationAnswers", new[] { "Question_QuestionId" });
            RenameColumn(table: "dbo.TestParticipationAnswers", name: "Question_QuestionId", newName: "QuestionId");
            AlterColumn("dbo.TestParticipationAnswers", "QuestionId", c => c.Int(nullable: false));
            CreateIndex("dbo.TestParticipationAnswers", "QuestionId");
            AddForeignKey("dbo.TestParticipationAnswers", "QuestionId", "dbo.Questions", "QuestionId", cascadeDelete: false);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.TestParticipationAnswers", "QuestionId", "dbo.Questions");
            DropIndex("dbo.TestParticipationAnswers", new[] { "QuestionId" });
            AlterColumn("dbo.TestParticipationAnswers", "QuestionId", c => c.Int());
            RenameColumn(table: "dbo.TestParticipationAnswers", name: "QuestionId", newName: "Question_QuestionId");
            CreateIndex("dbo.TestParticipationAnswers", "Question_QuestionId");
            AddForeignKey("dbo.TestParticipationAnswers", "Question_QuestionId", "dbo.Questions", "QuestionId");
        }
    }
}
