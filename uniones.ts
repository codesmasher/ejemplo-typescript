type A = {
    uno: string,
    dos: boolean
}

type B = {
    tres: boolean
}

let valor: A | B = {tres: false}

// Valor puede tener uno de dos valores
function convertir(valor: string | number) {
    if (typeof(valor) === "string") {
        valor.trim()
    } else {
        valor.toString()
    }
}

// Ejemplo de union discriminante
type objetoSuma = {
    operando1: number,
    operando2: number,
    tipo: "suma"
}

type objetoMultiplicacion = {
    operando1: number,
    operando2: number,
    tipo: "multiplicacion"
}

type operacion = objetoSuma | objetoMultiplicacion

function operar(o: operacion) {
    // En lugar de usar typeof se ocupa el campo discriminante
    if (o.tipo == "suma") {
        return o.operando1 + o.operando2
    } else {
        return o.operando1 * o.operando2
    }
}
