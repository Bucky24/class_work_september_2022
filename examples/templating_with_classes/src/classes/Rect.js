const path = require("path");

const Shape = require("./Shape");

class Rectangle extends Shape {
    constructor(length, width) {
        super(
            path.resolve(__dirname, "..", "templates", "rectangle.html"),
            {
                length,
                width,
            }
        );

        this.length = length;
        this.width = width;
    }
}

module.exports = Rectangle;