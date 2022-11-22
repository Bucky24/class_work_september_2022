const fs = require("fs");

const renderTemplate = require("../utils/renderTemplate");

class Shape {
    constructor(templateFile, prompts) {
        this.templateFile = templateFile;
        this.prompts = prompts;
    }

    generate() {
        let contents = fs.readFileSync(this.templateFile, "utf8");

        return renderTemplate(contents, this.prompts);
    }
}

module.exports = Shape;