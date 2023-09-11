const SVG = require("./svg");
const {Circle, Triangle, Square} = require("./shapes");

// Test for SVG circle file
describe("Circle SVG", () => {
    test("should create a blue circle svg", () => {
        const expectedOutput =
          '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /></svg>';
        const svg = new SVG();
        const shape = new Circle();
        shape.setColor("blue");
        svg.setShape(shape);
        var objectToTest = svg.render()
        expect(objectToTest).toEqual(expectedOutput);
      });
})

// Test for SVG triangle file
describe("Triangle SVG", () => {
    test("should create a red triangle svg", () => {
        const expectedOutput =
          '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="red" /></svg>';
        const svg = new SVG();
        const shape = new Triangle();
        shape.setColor("red");
        svg.setShape(shape);
        var objectToTest = svg.render()
        expect(objectToTest).toEqual(expectedOutput);
      });
})

// Test for SVG square file
describe("Square SVG", () => {
    test("should create a green square svg", () => {
        const expectedOutput =
          '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="green" /></svg>';
        const svg = new SVG();
        const shape = new Square();
        shape.setColor("green");
        svg.setShape(shape);
        var objectToTest = svg.render()
        expect(objectToTest).toEqual(expectedOutput);
      });
})