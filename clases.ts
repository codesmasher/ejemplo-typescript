// Declaración de clase
// Agregar visibilidad a las propiedades de la clase
class Rectangulo {
    readonly alto: number
    readonly ancho: number
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
// iRectangulo.alto no esta permitido por ser una propiedad privada
// iRectangulo.alto = 12 no esta permitido por ser una propiedad solo lectura
