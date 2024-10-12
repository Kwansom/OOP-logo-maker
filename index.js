const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");

const shapeChoices = ["Circle", "Triangle", "Square"];

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

  // Switch statement for different shape instances based on userData
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
  // Sets color for created shape based off userData
  createShape.setColor(shapeColor);

  // Code block so text input is centered based on shape selection
  let textY;
  if (shape === "Circle") {
    textY = 111;
  } else if (shape === "Triangle") {
    textY = 130;
  } else if (shape === "Square") {
    textY = 110;
  }

  let textX;
  if (shape === "Circle") {
    textX = 150;
  } else if (shape === "Triangle") {
    textX = 150;
  } else if (shape === "Square") {
    textX = 150;
  }
  // Dynamically creates SVG
  const svgContent = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${createShape.render()}
      <text x="${textX}" y="${textY} " font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>
`;

  // Writes the svgContent to logo.svg files
  fs.writeFileSync("logo.svg", svgContent);
  // Logs message per acceptance criteria
  console.log("Generated logo.svg");
}

//Initializes the app
generateLogo();
