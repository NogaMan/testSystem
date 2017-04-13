namespace testSystem.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class QuestionType : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Questions", "Type", c => c.String(nullable: false));
            DropColumn("dbo.Questions", "MultipleChoice");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Questions", "MultipleChoice", c => c.Boolean(nullable: false));
            DropColumn("dbo.Questions", "Type");
        }
    }
}
