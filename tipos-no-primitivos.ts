// arrays
let dias: string[] = ["lunes", "martes", "miercoles", "jueves", "viernes"]

// tuplas
let db: [string, number, string, boolean] = ["Enrique", 40, "México", true]

// objetos
let persona: {
    nombre: string,
    edad: number,
    pais: string,
    fecha_nac: Date,
    mascota: boolean,
    laboral: {
        empresa: string,
        sector: string
    }
} = {
    nombre: "Pedro Perez",
    edad: 30,
    pais: "Colombia",
    fecha_nac: new Date(1990, 5, 14),
    mascota: true,
    laboral: {
        empresa: "Empresita",
        sector: "Informática"
    }
}
// declaración poco conveniente y es preferible no usuar
let objeto: object = {}
