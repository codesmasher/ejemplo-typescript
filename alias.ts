type numero = number

let x: numero = 5

type loginCredential = {
    username: string,
    password: string,
    remember?: boolean, // valor opcional
}

function login(data: loginCredential) {

}

login({
    username: "admin",
    password: "12345"
})

