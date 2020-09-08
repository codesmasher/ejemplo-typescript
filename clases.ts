// Declaración de clase
class Rectangulo {
    alto: number
    ancho: number
    constructor(ancho: number, alto: number) {
        console.log("constructor()")
        this.ancho = ancho
        this.alto = alto
    }
    area() {
        return this.ancho * this.alto
    }
    perimetro() {
        return (this.ancho + this.alto) * 2
    }
}
// Instanciar un objeto de la clase Rectangulo
let iRectangulo = new Rectangulo(1, 2)
