abstract class Vehiculo {
    protected nombre: string

    constructor(nombre: string) {
        this.nombre = nombre
    }

    moverse() {
        console.log(`El vehiculo ${this.nombre} se ha movido magicamente`);
    }

    protected llevarAlTaller() {
        console.log("Llevar al taller.")
    }
}

class VehiculoTerrestre extends Vehiculo {
    // propiedades de la clase
    private marca: string

    // sobre escrivir el constructor
    constructor(nombre: string, marca: string) {
        super(nombre)
        this.marca = marca
    }
    
    // sobre escribir metodo
    moverse() {
        console.log(`bruuum, bruuum hace mi ${this.marca}`);
        super.moverse()
    }

    reparar() {
        console.log(`Un momento que me leo el manual de ${this.nombre}.`)
    }
}

class VehiculoAereo extends Vehiculo {
    // sobre escribir metodo
    moverse() {
        console.log("ñiauuuuum");
    }

    reparar() {
        super.llevarAlTaller()
    }
}

class VehiculoMaritimo extends Vehiculo {
    // sobre escribir metodo
    moverse() {
        console.log("* el ruido del mar *")
    }
}

// let vehiculo = new Vehiculo("generico") al ser abstracto no es posible instanciar el objeto de forma directa
let vehiculo: Vehiculo = new VehiculoAereo("generico")
vehiculo.moverse()

let coche = new VehiculoTerrestre("automovil", "ford")
coche.moverse()
coche.reparar()

let avion = new VehiculoAereo("boeing")
avion.moverse()
avion.reparar()

let bote = new VehiculoMaritimo("transatlantico")
bote.moverse()
