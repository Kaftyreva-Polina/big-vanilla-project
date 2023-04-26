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

export type CompanyPropsType = {
    [key: string]: Array<{ id: number, title: string }>
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

export const addNewCompany = (u: WithCompaniesType, title: string) => {
    return {
        ...u,
        companies: [...u.companies, {id: u.companies.length + 1, title: title}]
    }
}

export const updateCompanyTitle = (u: WithCompaniesType, companyId: number, title: string) => {
    return {
        ...u,
        companies: u.companies.map(c => c.id === companyId ? {...c, title: title} : c)
    }
}

export const updateCompanyTitle2 = (companies: CompanyPropsType,
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) => {

    return {
        ...companies,
        [userName]: companies[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)
    }

    // let companyCopy = {...companies}
    // companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)
    // return companyCopy;

}