function increaseAge(u: UserType09) {
    u.age++;
}

type UserType09 = {
    name: string
    age: number
    address: { title: string }
}

test("big reference type test", () => {

    let user: UserType09 = {
        name: "Dima",
        age: 32,
        address: {
            title: "Minsk"
        }
    }
    increaseAge(user)

    expect(user.age).toBe(33)

    const superman = user
    superman.age = 1000

    expect(superman.age).toBe(1000)
})

test("array reference test", () => {

    let users = [
        {
            name: "Dima",
            age: 32
        },
        {
            name: "Dima",
            age: 32
        }
    ]
    let admins = users
    admins.push({name: "Nicola", age: 10})

    expect(users[2].age).toEqual(10)

})

test("value type test", () => {

    let usersCount = 100;
    let adminsCount = usersCount
    adminsCount++

    expect(adminsCount).toEqual(101)

})

test("reference type test", () => {
    const address = {
        title: "Moscow"
    }
    let user: UserType09 = {
        name: "Dima",
        age: 32,
        address: address
    }

    let addr = user.address

    let user2: UserType09 = {
        name: "Natali",
        age: 30,
        address: address
    }

    address.title = "Moscow City"

    expect(user.address.title).toBe("Moscow City")
    expect(user.address).toBe(user2.address)
})

test("reference type array test", () => {
    const address = {
        title: "Moscow"
    }
    let user: UserType09 = {
        name: "Dima",
        age: 32,
        address: address
    }
    let user2: UserType09 = {
        name: "Natali",
        age: 30,
        address: address
    }

    const users = [user, user2, {name: "Misha", age: 28, address: address}]

    address.title = "Moscow City"

    const admins = [user, user2]
    admins[0].name = "Dmitry"

    expect(users[0].name).toBe("Dmitry")
    expect(user.name).toBe("Dmitry")
})

test("sort array test", () => {

    const letters = ["c", "d", "a", "z", "e"]
    passportist(letters)

    expect(letters).toEqual(["c", "d", "a", "z", "e"])
})

function passportist(letters: any) {
    const copy = [...letters].sort();
    console.log(copy)
}