// Parent class named Shape that has setColor() method
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

// Child class to Shape, named Circle, that has a render() method
// BUT can use setColor because Circle EXTENDS Shape
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

// Child class to Shape, named Triangle, that has a render() method
// BUT can use setColor because Triangle EXTENDS Shape
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Child class to Shape, named Square, that has a render() method
// BUT can use setColor because Square EXTENDS Shape
class Square extends Shape {
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
  }
}

// Exports child classes, so that they can be used in other files
module.exports = { Circle, Triangle, Square };
