// Ejemplo de interseccion de tipos

type Coordenada = [number, number]
type Vector = [number, number]

type Posicionable = {
    posicion: Coordenada
}

type Movible = {
    velocididad: Vector,
    aceleracion: Vector
}

type MovibleYPosicionable = Posicionable & Movible

let obj: MovibleYPosicionable = {
    posicion: [5, 5],
    velocididad: [4, 4],
    aceleracion: [1, 1]
}
