export type UserType = {
    name: string
    hair: number
    address: {
        city: string,
        house: number
    }
}

export type LaptopType = {
    title: string
}
export type UserWithLaptop = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompaniesType = {
    companies: Array<{ id: number, title: string }>
}

export function makeHairStyle(u: UserType, power: number) {
    return {...u, hair: u.hair / power}
    // copy.hair = u.hair / power
}

export function moveUser(u: UserWithLaptop, city: string) {
    return {...u, address: {...u.address, city: city}}
}

export function upgradeUserLaptop(u: UserWithLaptop, newLaptop: string) {
    return {...u, laptop: {...u.laptop, title: newLaptop}}
}

export function moveUserToOtherHouse(u: UserWithLaptop, newHouse: number) {
    return {...u, address: {...u.address, house: newHouse}}
}

export function addNewBooksToUser(u: UserWithLaptop & UserWithBooksType, newBooks: Array<string>) {
    return {...u, books: [...u.books.concat(newBooks)]}
}

export const updateBook = (u: UserWithLaptop & UserWithBooksType, oldBook: string, newBook: string) => ({
    ...u,
    books: u.books.map(t => t === oldBook ? newBook : t)
})

export const removeBook = (u: UserWithLaptop & UserWithBooksType, bookForDelete: string) => ({
    ...u, books: u.books.filter(b => b !== bookForDelete)
})

export const updateSkills = (skills: Array<number>, oldSkill: number, newSkill: number) => {
    return skills.map(s => s === oldSkill ? newSkill : s)
}