namespace testSystem.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Accounts",
                c => new
                    {
                        AccountId = c.Int(nullable: false, identity: true),
                        Login = c.String(nullable: false),
                        HashedPassword = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.AccountId);
            
            CreateTable(
                "dbo.Audiences",
                c => new
                    {
                        AudienceId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        CreatedAccountId = c.Int(nullable: false),
                        CreatedAccount_AccountId = c.Int(),
                    })
                .PrimaryKey(t => t.AudienceId)
                .ForeignKey("dbo.Accounts", t => t.CreatedAccount_AccountId)
                .Index(t => t.CreatedAccount_AccountId);
            
            CreateTable(
                "dbo.TestTakers",
                c => new
                    {
                        TestTakerId = c.Int(nullable: false, identity: true),
                        CreatedAccountId = c.Int(nullable: false),
                        AudienceId = c.Int(),
                        ContactInfoId = c.Int(nullable: false),
                        CreatedDate = c.DateTime(nullable: false),
                        UpdatedDate = c.DateTime(nullable: false),
                        CreatedAccount_AccountId = c.Int(),
                    })
                .PrimaryKey(t => t.TestTakerId)
                .ForeignKey("dbo.Audiences", t => t.AudienceId)
                .ForeignKey("dbo.Accounts", t => t.CreatedAccount_AccountId)
                .Index(t => t.AudienceId)
                .Index(t => t.CreatedAccount_AccountId);
            
            CreateTable(
                "dbo.ContactInfoes",
                c => new
                    {
                        ContactInfoId = c.Int(nullable: false),
                        FirstName = c.String(nullable: false),
                        LastName = c.String(nullable: false),
                        Gender = c.String(),
                        DateOfBirth = c.DateTime(nullable: false),
                        CompanyName = c.String(nullable: false),
                        DepartmentName = c.String(),
                        PositionName = c.String(),
                        Location = c.String(),
                        CreatedDate = c.DateTime(nullable: false),
                        UpdatedDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.ContactInfoId)
                .ForeignKey("dbo.TestTakers", t => t.ContactInfoId)
                .Index(t => t.ContactInfoId);
            
            CreateTable(
                "dbo.Tests",
                c => new
                    {
                        TestId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        CreatedAccountId = c.Int(nullable: false),
                        MinPoints = c.Int(nullable: false),
                        CreatedDate = c.DateTime(nullable: false),
                        UpdatedDate = c.DateTime(nullable: false),
                        CreatedAccount_AccountId = c.Int(),
                    })
                .PrimaryKey(t => t.TestId)
                .ForeignKey("dbo.Accounts", t => t.CreatedAccount_AccountId)
                .Index(t => t.CreatedAccount_AccountId);
            
            CreateTable(
                "dbo.Sections",
                c => new
                    {
                        SectionId = c.Int(nullable: false, identity: true),
                        SectionTypeId = c.Int(nullable: false),
                        TestId = c.Int(nullable: false),
                        PreHTML = c.String(),
                        TextMask = c.String(),
                    })
                .PrimaryKey(t => t.SectionId)
                .ForeignKey("dbo.SectionTypes", t => t.SectionTypeId, cascadeDelete: true)
                .ForeignKey("dbo.Tests", t => t.TestId, cascadeDelete: true)
                .Index(t => t.SectionTypeId)
                .Index(t => t.TestId);
            
            CreateTable(
                "dbo.Questions",
                c => new
                    {
                        QuestionId = c.Int(nullable: false, identity: true),
                        QuestionTypeId = c.Int(nullable: false),
                        SectionId = c.Int(nullable: false),
                        PreHTML = c.String(nullable: false),
                        MultipleChoice = c.Boolean(nullable: false),
                        TextRightAnswer = c.String(),
                        Score = c.Int(nullable: false),
                        LoseScore = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.QuestionId)
                .ForeignKey("dbo.QuestionTypes", t => t.QuestionTypeId, cascadeDelete: true)
                .ForeignKey("dbo.Sections", t => t.SectionId, cascadeDelete: true)
                .Index(t => t.QuestionTypeId)
                .Index(t => t.SectionId);
            
            CreateTable(
                "dbo.QuestionTypes",
                c => new
                    {
                        QuestionTypeId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.QuestionTypeId);
            
            CreateTable(
                "dbo.TestParticipationAnswers",
                c => new
                    {
                        TestParticipationAnswerId = c.Int(nullable: false, identity: true),
                        TestParticipationId = c.Int(nullable: false),
                        OptionId = c.Int(nullable: false),
                        Question_QuestionId = c.Int(),
                    })
                .PrimaryKey(t => t.TestParticipationAnswerId)
                .ForeignKey("dbo.Options", t => t.OptionId, cascadeDelete: true)
                .ForeignKey("dbo.TestParticipations", t => t.TestParticipationId, cascadeDelete: true)
                .ForeignKey("dbo.Questions", t => t.Question_QuestionId)
                .Index(t => t.TestParticipationId)
                .Index(t => t.OptionId)
                .Index(t => t.Question_QuestionId);
            
            CreateTable(
                "dbo.Options",
                c => new
                    {
                        OptionId = c.Int(nullable: false, identity: true),
                        OptionTypeId = c.Int(nullable: false),
                        QuestionId = c.Int(nullable: false),
                        Text = c.String(nullable: false),
                        ImageUrl = c.String(),
                    })
                .PrimaryKey(t => t.OptionId)
                .ForeignKey("dbo.OptionTypes", t => t.OptionTypeId, cascadeDelete: true)
                .ForeignKey("dbo.Questions", t => t.QuestionId, cascadeDelete: true)
                .Index(t => t.OptionTypeId)
                .Index(t => t.QuestionId);
            
            CreateTable(
                "dbo.OptionTypes",
                c => new
                    {
                        OptionTypeId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.OptionTypeId);
            
            CreateTable(
                "dbo.TestParticipations",
                c => new
                    {
                        TestParticipationID = c.Int(nullable: false, identity: true),
                        TestId = c.Int(nullable: false),
                        TestTakerId = c.Int(nullable: false),
                        AuthToken = c.String(nullable: false),
                        DateInvited = c.DateTime(nullable: false),
                        Canceled = c.Boolean(nullable: false),
                        DateCanceled = c.DateTime(nullable: false),
                        Passed = c.Boolean(nullable: false),
                        DatePassed = c.DateTime(nullable: false),
                        Result = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.TestParticipationID)
                .ForeignKey("dbo.Tests", t => t.TestId, cascadeDelete: false)
                .ForeignKey("dbo.TestTakers", t => t.TestTakerId, cascadeDelete: true)
                .Index(t => t.TestId)
                .Index(t => t.TestTakerId);
            
            CreateTable(
                "dbo.SectionTypes",
                c => new
                    {
                        SectionTypeId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.SectionTypeId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Sections", "TestId", "dbo.Tests");
            DropForeignKey("dbo.Sections", "SectionTypeId", "dbo.SectionTypes");
            DropForeignKey("dbo.TestParticipationAnswers", "Question_QuestionId", "dbo.Questions");
            DropForeignKey("dbo.TestParticipations", "TestTakerId", "dbo.TestTakers");
            DropForeignKey("dbo.TestParticipationAnswers", "TestParticipationId", "dbo.TestParticipations");
            DropForeignKey("dbo.TestParticipations", "TestId", "dbo.Tests");
            DropForeignKey("dbo.TestParticipationAnswers", "OptionId", "dbo.Options");
            DropForeignKey("dbo.Options", "QuestionId", "dbo.Questions");
            DropForeignKey("dbo.Options", "OptionTypeId", "dbo.OptionTypes");
            DropForeignKey("dbo.Questions", "SectionId", "dbo.Sections");
            DropForeignKey("dbo.Questions", "QuestionTypeId", "dbo.QuestionTypes");
            DropForeignKey("dbo.Tests", "CreatedAccount_AccountId", "dbo.Accounts");
            DropForeignKey("dbo.TestTakers", "CreatedAccount_AccountId", "dbo.Accounts");
            DropForeignKey("dbo.ContactInfoes", "ContactInfoId", "dbo.TestTakers");
            DropForeignKey("dbo.TestTakers", "AudienceId", "dbo.Audiences");
            DropForeignKey("dbo.Audiences", "CreatedAccount_AccountId", "dbo.Accounts");
            DropIndex("dbo.TestParticipations", new[] { "TestTakerId" });
            DropIndex("dbo.TestParticipations", new[] { "TestId" });
            DropIndex("dbo.Options", new[] { "QuestionId" });
            DropIndex("dbo.Options", new[] { "OptionTypeId" });
            DropIndex("dbo.TestParticipationAnswers", new[] { "Question_QuestionId" });
            DropIndex("dbo.TestParticipationAnswers", new[] { "OptionId" });
            DropIndex("dbo.TestParticipationAnswers", new[] { "TestParticipationId" });
            DropIndex("dbo.Questions", new[] { "SectionId" });
            DropIndex("dbo.Questions", new[] { "QuestionTypeId" });
            DropIndex("dbo.Sections", new[] { "TestId" });
            DropIndex("dbo.Sections", new[] { "SectionTypeId" });
            DropIndex("dbo.Tests", new[] { "CreatedAccount_AccountId" });
            DropIndex("dbo.ContactInfoes", new[] { "ContactInfoId" });
            DropIndex("dbo.TestTakers", new[] { "CreatedAccount_AccountId" });
            DropIndex("dbo.TestTakers", new[] { "AudienceId" });
            DropIndex("dbo.Audiences", new[] { "CreatedAccount_AccountId" });
            DropTable("dbo.SectionTypes");
            DropTable("dbo.TestParticipations");
            DropTable("dbo.OptionTypes");
            DropTable("dbo.Options");
            DropTable("dbo.TestParticipationAnswers");
            DropTable("dbo.QuestionTypes");
            DropTable("dbo.Questions");
            DropTable("dbo.Sections");
            DropTable("dbo.Tests");
            DropTable("dbo.ContactInfoes");
            DropTable("dbo.TestTakers");
            DropTable("dbo.Audiences");
            DropTable("dbo.Accounts");
        }
    }
}
