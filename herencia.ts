class Vehiculo {
    nombre: string

    constructor(nombre: string) {
        this.nombre = nombre
    }

    moverse() {
        console.log(`El vehiculo ${this.nombre} se ha movido magicamente`);
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
}

class VehiculoAereo extends Vehiculo {
    // sobre escribir metodo
    moverse() {
        console.log("ñiauuuuum");
    }
}

class VehiculoMaritimo extends Vehiculo {
    // sobre escribir metodo
    moverse() {
        console.log("* el ruido del mar *")
    }
}

let vehiculo = new Vehiculo("generico")
vehiculo.moverse()

let coche = new VehiculoTerrestre("automovil", "ford")
coche.moverse()

let avion = new VehiculoAereo("boeing")
avion.moverse()

let bote = new VehiculoMaritimo("transatlantico")
bote.moverse()
