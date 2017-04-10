namespace testSystem.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class simplifyAllThings : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Questions", "QuestionTypeId", "dbo.QuestionTypes");
            DropForeignKey("dbo.Options", "OptionTypeId", "dbo.OptionTypes");
            DropForeignKey("dbo.Sections", "SectionTypeId", "dbo.SectionTypes");
            DropIndex("dbo.Sections", new[] { "SectionTypeId" });
            DropIndex("dbo.Questions", new[] { "QuestionTypeId" });
            DropIndex("dbo.Options", new[] { "OptionTypeId" });
            AddColumn("dbo.Sections", "Name", c => c.String());
            AddColumn("dbo.Questions", "Text", c => c.String(nullable: false));
            AddColumn("dbo.Options", "IsRight", c => c.Boolean(nullable: false));
            DropColumn("dbo.Sections", "SectionTypeId");
            DropColumn("dbo.Sections", "PreHTML");
            DropColumn("dbo.Sections", "TextMask");
            DropColumn("dbo.Questions", "QuestionTypeId");
            DropColumn("dbo.Questions", "PreHTML");
            DropColumn("dbo.Questions", "TextRightAnswer");
            DropColumn("dbo.Options", "OptionTypeId");
            DropTable("dbo.QuestionTypes");
            DropTable("dbo.OptionTypes");
            DropTable("dbo.SectionTypes");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.SectionTypes",
                c => new
                    {
                        SectionTypeId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.SectionTypeId);
            
            CreateTable(
                "dbo.OptionTypes",
                c => new
                    {
                        OptionTypeId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.OptionTypeId);
            
            CreateTable(
                "dbo.QuestionTypes",
                c => new
                    {
                        QuestionTypeId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.QuestionTypeId);
            
            AddColumn("dbo.Options", "OptionTypeId", c => c.Int(nullable: false));
            AddColumn("dbo.Questions", "TextRightAnswer", c => c.String());
            AddColumn("dbo.Questions", "PreHTML", c => c.String(nullable: false));
            AddColumn("dbo.Questions", "QuestionTypeId", c => c.Int(nullable: false));
            AddColumn("dbo.Sections", "TextMask", c => c.String());
            AddColumn("dbo.Sections", "PreHTML", c => c.String());
            AddColumn("dbo.Sections", "SectionTypeId", c => c.Int(nullable: false));
            DropColumn("dbo.Options", "IsRight");
            DropColumn("dbo.Questions", "Text");
            DropColumn("dbo.Sections", "Name");
            CreateIndex("dbo.Options", "OptionTypeId");
            CreateIndex("dbo.Questions", "QuestionTypeId");
            CreateIndex("dbo.Sections", "SectionTypeId");
            AddForeignKey("dbo.Sections", "SectionTypeId", "dbo.SectionTypes", "SectionTypeId", cascadeDelete: true);
            AddForeignKey("dbo.Options", "OptionTypeId", "dbo.OptionTypes", "OptionTypeId", cascadeDelete: true);
            AddForeignKey("dbo.Questions", "QuestionTypeId", "dbo.QuestionTypes", "QuestionTypeId", cascadeDelete: true);
        }
    }
}
