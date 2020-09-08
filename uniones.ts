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

