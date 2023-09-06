// Class SVG that create an SVG tag, and sets the text as well, based on textValue/textColor, and shape/shapeColor
class SVG {
  constructor() {
    this.text = "";
    this.shape = "";
  }
// render() method will return svg string containing the text and shape values
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
  }
// setText() will create a text tag that pulls in the textValue and textColor
  setText(textValue, textColor) {
    if (textValue.length <= 3) {
      this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textValue}</text>`;
    } else {
      throw new Error("Text must not exceed 3 characters.");
    }
  }
// setShape() will render our shape tag for the svg tag, and it will also bring in our shape/shapeColor
  setShape(shapeValue) {
    this.shape = shapeValue.render();
  }
}
// exporting SVG class to use in other files
module.exports = SVG;
