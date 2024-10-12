const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");

const shapeChoices = ["Circle", "Triangle", "Square"];
// const questions = [
//   {
//     type: "input",
//     name: "text",
//     message: "Enter up to three characters for the logo text:",
//     validate: (input) =>
//       input.length <= 3 ? true : "Text must be 3 characters long.",
//   },
//   {
//     type: "input",
//     name: "textColor",
//     message: "Enter a text color:",
//   },
//   {
//     type: "list",
//     name: "shape",
//     message: "Choose a shape for the logo:",
//     choices: shapeChoices,
//   },
//   {
//     type: "input",
//     name: "shapeColor",
//     message: "Enter a shape color:",
//   },
// ];

async function userData() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the logo text:",
      validate: (input) =>
        input.length <= 3 ? true : "Text must be 3 characters long.",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a text color:",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape for the logo:",
      choices: shapeChoices,
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a shape color:",
    },
  ]);
  return answers;
}

async function generateLogo() {
  const { text, textColor, shape, shapeColor } = await userData();
  let createShape;

  switch (shape) {
    case "Circle":
      createShape = new Circle();
      break;
    case "Triangle":
      createShape = new Triangle();
      break;
    case "Square":
      createShape = new Square();
      break;
  }

  createShape.setColor(shapeColor);

  const svgContent = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${createShape.render()}
      <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>
`;

  fs.writeFileSync("logo.svg", svgContent);
  console.log("Generated logo.svg");
}

// function init() {
//   inquirer.prompt(questions).then(function (answers) {
//     const logo = generateLogo(answers);
//     writeToFile("logo.svg", svgContent);
//   });
// }

generateLogo();
