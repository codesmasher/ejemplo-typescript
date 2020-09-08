// Declaración de clase
// Agregar visibilidad a las propiedades de la clase
class Rectangulo {
    alto: number
    ancho: number
    private _nombre: string

    constructor(ancho: number, alto: number) {
        console.log("constructor()")
        this.ancho = ancho
        this.alto = alto
    }
    // Getters / Setters
    get nombre() {
        console.log("Obtengo el nombre")
        return this._nombre
    }

    set nombre(value: string) {
        console.log("Seteo el nombre")
        this._nombre = value
    }

    get area() {
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
console.log(`El área del rectangulo es: ${iRectangulo.area}`)
iRectangulo.nombre = "A"
console.log(`El rectángulo ${iRectangulo.nombre}`)