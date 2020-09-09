// Declaración y usuo de una interface
interface UserData {
    readonly username: string,
    created_at?: Date,
    superuser: boolean,

    logout(): void,
    rename: (username: string) => void,
}

function login(): UserData {
    return {
        username: 'admin',
        created_at: new Date(),
        superuser: true,

        logout() {
            console.log('Adios')
        },
        rename(username) {
            console.log('TODO: Rename account')
        }
    }
}

let data = login()
// data.username = 'foo' no se puede utilizar debido a que la prodipedad es tipo readonly
data.rename('foo')
data.created_at?.toISOString() // Evalua si el metodo tiene valor undefined o Date
