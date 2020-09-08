// [datos] --> [sumar] --> [datos]

function sumar(m: number, n: number): number {
    let suma = m + n
    console.log(`${m} + ${n} = ${suma}`)
    return suma
}

let x: number = sumar(3, 4)