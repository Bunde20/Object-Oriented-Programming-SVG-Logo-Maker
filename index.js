const inquirer = require('inquirer');
const { writeFile } = require("fs/promises");
const {Circle, Triangle, Square} = require("./lib/shapes");
const SVG = require('./lib/svg');

//List of questions to ask the user
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters."
    },
    {
        type: "input",
        name: "text-color",
        message: "Enter a standard or hexidecimal color for your text."
    },
    {
        type: "list",
        name: "shape",
        message: "Select the shape you would like to use:",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shape-color",
        message: "Enter a standard or hexidecimal color for your shape."
    }
];

