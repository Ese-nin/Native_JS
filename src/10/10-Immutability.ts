export type userType = {
    name: string
    hair: number
    address: { title: string }
}

type LaptopType = {
    brand: string
}

export type UserWithLaptopType = userType & {
    laptop: LaptopType
}
export type UserWithBooksType = userType & {
    books: Array<string>
}



export function makeHairstyle(u: userType, power: number) {
    return {...u, hair: u.hair / power};
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {...u, address: {...u.address, title: city}}
}

export function upgradeLaptop(u: UserWithLaptopType, notebook: string) {
return {...u, laptop: {...u.laptop, brand: notebook}}
}

export const addNewBooksToUser = (u: UserWithLaptopType & UserWithBooksType, books: Array<string>) => {
    return {...u, books: [...u.books, ...books]}
}