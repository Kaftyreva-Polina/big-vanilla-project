const resolvedPromise = Promise.resolve([{}])
console.log(resolvedPromise)

const rejectedPromise = Promise.reject({message: "ERROR"})
console.log(rejectedPromise)

resolvedPromise
    .then((data) => console.log(data))
    .catch(error => console.log(error))
rejectedPromise
    .then((data) => console.log(data))
    .catch(error => console.log(error))

const userAPI = {
    getAllUsers() {
        return Promise.resolve([{name: "Name1"}, {name: "Name2"}])
    },
    login(login, password) {
        login !== "123" && password !== "123"
            ? Promise.reject({message: "Incorrect"})
            : Promise.resolve({name: "Name1", url: "fakeUrl"})
    }
}

userAPI.getAllUsers()
    .then(users => console.log(users))
    .catch(err => "It's impossible")

userAPI.login("123", "123e")
    .then(() => {
        //makeRedirect
    })
    .catch(() => {
        //showError
    })

