const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const { Circle, Triangle, Square } = require("./lib/shapes");
const SVG = require("./lib/svg");

//List of questions to ask the user
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to 3 characters.",
    validate: (text) =>
      text.length <= 3 ||
      "Please keep input to 3 characters or less, for a text value.",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a standard or hexidecimal color for your text.",
  },
  {
    type: "list",
    name: "shape",
    message: "Select the shape you would like to use:",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a standard or hexidecimal color for your shape.",
  },
];

const init = () => {
  inquirer.prompt(questions).then((data) => {
    let svgShape;
    let shapeWanted = data.shape;
    if (shapeWanted === "Circle") {
      svgShape = new Circle();
    } else if (shapeWanted === "Triangle") {
      svgShape = new Triangle();
    } else if (shapeWanted === "Square") {
      svgShape = new Square();
    }
    svgShape.setColor(data.shapeColor)

    const svgToCreate = new SVG()
    svgToCreate.setShape(svgShape)
    svgToCreate.setText(data.text, data.textColor)
    return writeFile(`./examples/${data.shape}.svg`, svgToCreate.render())
  }).then(() => {
    console.log("Your SVG has been created, it is in the examples folder.")
  }).catch((err) => {
    console.log("Something went wrong!")
    console.log(err)
  })
};

init();
