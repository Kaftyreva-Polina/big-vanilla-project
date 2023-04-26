import {
    addNewBooksToUser, addNewCompany, CompanyPropsType,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2, updateSkills,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptop, WithCompaniesType
} from "./10_01";



test("reference type test", () => {
    let user: UserType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)
})

test("change address", () => {
    let user: UserWithLaptop = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        }
    }

    const movedUser = moveUser(user, "Moscow")

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe("Moscow")
})

test("upgrade laptop to macbook", () => {
    let user: UserWithLaptop = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        }
    }

    const userCopy = upgradeUserLaptop(user, "Macbook")

    expect(user).not.toBe(userCopy)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.laptop.title).toBe("Macbook")
    expect(user.laptop.title).toBe("ZenBook")
})

test("change number of house", () => {
    let user: UserWithLaptop & UserWithBooksType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)
    expect(user.address.house).toBe(12)
})

test("add new books to user", () => {
    let user: UserWithLaptop & UserWithBooksType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = addNewBooksToUser(user, ["ts", "rest api"])

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe("ts")
    expect(userCopy.books[5]).toBe("rest api")
})

test("update js to ts", () => {
    let user: UserWithLaptop & UserWithBooksType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = updateBook(user, "js", "ts")

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("ts")
})

test("remove js book", () => {
    let user: UserWithLaptop & UserWithBooksType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = removeBook(user, "js")

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("react")
})

test("update skills", () => {
    let skills: Array<number> = [29, 17, 36, 98, 53]

    const newSkills = updateSkills(skills, 17, 99)

    expect(skills).not.toBe(newSkills)
    expect(skills[1]).toBe(17)
    expect(newSkills[1]).toBe(99)
})

test("add new company", () => {
    let user: UserWithLaptop & WithCompaniesType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        companies: [{id: 1, title: "Epam"}, {id: 1, title: "IT-Incubator"}]
    }

    const userCopy = addNewCompany(user, "Google") as UserWithLaptop & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[2]).toStrictEqual({id: 3, title: "Google"})
})

test("change company title", () => {
    let user: UserWithLaptop & WithCompaniesType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        companies: [{id: 1, title: "Epam"}, {id: 1, title: "IT-Incubator"}]
    }

    const userCopy = updateCompanyTitle(user, 1, "EPAM") as UserWithLaptop & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0]).toStrictEqual({id: 1, title: "EPAM"})
    expect(userCopy.companies[0].title).toBe("EPAM")
})

test("update company", () => {
    let companies: CompanyPropsType = {
        "Dima": [{id: 1, title: "Epam"}, {id: 2, title: "IT-Incubator"}],
        "Artem": [{id: 1, title: "IT-Incubator"}]
    }

    const updateCompany = updateCompanyTitle2(companies, "Dima", 1, "EPAM")

    expect(updateCompany["Dima"]).not.toBe(companies["Dima"])
    expect(updateCompany["Artem"]).toBe(companies["Artem"])
    expect(updateCompany["Dima"][0].title).toBe("EPAM")
    expect(updateCompany["Dima"][0]).toStrictEqual({id: 1, title: "EPAM"})
})


//Мапится масив, после копии компаний мы получили копию каждого ключа значения и массивы в которых лежат старые объекты