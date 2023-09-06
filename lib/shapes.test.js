const {Circle, Triangle, Square} = require("./shapes")

describe("Circle Class", () => {
    test("creates a circle object that is blue", () => {
        const expectedOutput = `<circle cx="150" cy="100" r="80" fill="blue" />`;
        const shape = new Circle()
        shape.setColor("blue")
        const objectToTest = shape.render()
        expect(objectToTest).toEqual(expectedOutput)
    }),
    test("creates a circle object that is red", () => {
        const expectedOutput = `<circle cx="150" cy="100" r="80" fill="red" />`;
        const shape = new Circle()
        shape.setColor("red")
        const objectToTest = shape.render()
        expect(objectToTest).toEqual(expectedOutput)
    })
})

describe("Triangle Class", () => {
    test("creates a triangle object that is green", () => {
        const expectedOutput = `<polygon points="150, 18 244, 182 56, 182" fill="green" />`;
        const shape = new Triangle()
        shape.setColor("green")
        const objectToTest = shape.render()
        expect(objectToTest).toEqual(expectedOutput)
    }),
    test("creates a triangle object that is orange", () => {
        const expectedOutput = `<polygon points="150, 18 244, 182 56, 182" fill="orange" />`;
        const shape = new Triangle()
        shape.setColor("orange")
        const objectToTest = shape.render()
        expect(objectToTest).toEqual(expectedOutput)
    })
})

describe("Square Class", () => {
    test("creates a square object that is brown", () => {
        const expectedOutput = `<rect x="90" y="40" width="120" height="120" fill="brown" />`;
        const shape = new Square()
        shape.setColor("brown")
        const objectToTest = shape.render()
        expect(objectToTest).toEqual(expectedOutput)
    }),
    test("creates a square object that is yellow", () => {
        const expectedOutput = `<rect x="90" y="40" width="120" height="120" fill="yellow" />`;
        const shape = new Square()
        shape.setColor("yellow")
        const objectToTest = shape.render()
        expect(objectToTest).toEqual(expectedOutput)
    })
})