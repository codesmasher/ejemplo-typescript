// [datos] --> [sumar] --> [datos]

function sumar(m: number, n: number): number {
    let suma = m + n
    console.log(`${m} + ${n} = ${suma}`)
    return suma
}

// Declaración de tipos para los parámetros de una función, forma normal
let restar: (m: number, n: number) => number = function(m: number, n: number): number {
    let resta = m - n
    console.log(`${m} - ${n} = ${resta}`)
    return resta
}

// Declaración de tipos para los parámetros de una función
let dividir: (m: number, n: number) => number
dividir = (m, n) => m / n

// Declaración de tipos de una función y con una función de callback
let multiplicar: (a: number, b: number, callback: (r: number) => void) => void
multiplicar = (a, b, callback) => callback(a * b)

multiplicar(4, 5, function(result) {
    console.log(`Resultado: ${result}`)
})
