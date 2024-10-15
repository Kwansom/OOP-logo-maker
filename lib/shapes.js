// Color property set to empty
class Shape {
  constructor() {
    this.color = "";
  }

  // Method to set the color of shape
  setColor(color) {
    this.color = color;
  }
}
// Circle class extending Shape
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}
// Triangle class extending Shape
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}
// Square class extending Shape
class Square extends Shape {
  render() {
    return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`;
  }
}

// Exporting classes
module.exports = { Circle, Triangle, Square };
