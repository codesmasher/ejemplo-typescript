// Declaración de clase
// Agregar visibilidad a las propiedades de la clase
class Rectangulo {
    private alto: number
    private ancho: number
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
