const fs = require("fs");
const path = require("path");

const Rectangle = require("./classes/Rect");
const renderTemplate = require("./utils/renderTemplate");

// build the path to our already existing main template
const mainTemplateFile = path.join(__dirname, "templates", "main.html");
const distDir = path.resolve(__dirname, "..", "dist");

// create our sample objects
const rect = new Rectangle(10, 15);
const rect2 = new Rectangle(15, 10);

// fetch the main template string
const mainTemplateData = fs.readFileSync(mainTemplateFile, "utf8");

// render the main template
const renderedTemplateData = renderTemplate(mainTemplateData, {
    shapes: rect.generate() + "\n" + rect2.generate(),
});

// create the dist dir if it does't exist
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

const resultFile = path.join(distDir, "result.html");
fs.writeFileSync(resultFile, renderedTemplateData);