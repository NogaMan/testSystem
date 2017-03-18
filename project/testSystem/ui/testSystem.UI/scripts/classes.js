class Test {
    constructor(name, minPoints) {
        this.name = name;
        this.sections = [];
    }

    addSection(section) {
        if (section instanceof TestSection === false) {
            throw new Error("Section passed to addSection method is not an intance of TestSession class");
        }
        sections.push(section);
    }
}

class TestSection {
    constructor(name) {
        this.name = name;
        
    }
}

class OrdinaryTestSection extends TestSection {
    constructor(name, text) {
        super(name);
        this.PreHTML = text;
        this.Type = TestSectionTypes.ORDINARY;
    }
}

class TextTestSection extends TestSection {
    constructor(name, pattern) {
        super(name);
        this.TextMask = pattern;
        this.Type = TestSectionTypes.ORDINARY;
    }
}

class TestSectionTypes {
    const ORDINARY = "ordinary";
    const TEXT = "text";

}