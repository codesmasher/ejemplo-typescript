interface Shape {
    readonly sides: number,

    area(): number,
    perimeter(): number,
}

function process(shape: Shape) {
    console.log({area: shape.area()})
}

class Rectangle implements Shape {
    sides: number = 4

    constructor(readonly width: number, readonly height: number) {

    }

    area(): number {
        return this.width * this.height
    }

    perimeter(): number {
        return (this.width + this.height) * 2
    }
}

let rectangulo = new Rectangle(5, 4)
process(rectangulo)
