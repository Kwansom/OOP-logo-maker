// Importing shape.js for testing
const { Circle, Triangle, Square } = require("./shapes");

test("Circle render method", () => {
  //Arrange and Act
  const circle = new Circle();
  circle.setColor("green");
  // Assert
  expect(circle.render()).toEqual(
    '<circle cx="150" cy="100" r="80" fill="green" />'
  );
});

test("Triangle render method", () => {
  const triangle = new Triangle();
  triangle.setColor("blue");
  expect(triangle.render()).toEqual(
    '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
  );
});

test("Square render method", () => {
  const square = new Square();
  square.setColor("yellow");
  expect(square.render()).toEqual(
    '<rect x="75" y="25" width="150" height="150" fill="yellow" />'
  );
});
