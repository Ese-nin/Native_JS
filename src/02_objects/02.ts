export type AddressType2 = {
    street: StreetType
}

export type GovernmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: AddressType2
}

export type StreetType = {
    title: string
}

export type AddressType = {
    number: number
    street: StreetType
}

export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}

type techType = {
    id: number
    title: string
}

type addressType = {
    streetTitle: string
    city: cityType
}

type cityType = {
    title: string
    country: string
}

export type studentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: addressType
    technologies: Array<techType>
}

export const student: studentType = {
    id: 1,
    name: 'Petr',
    age: 55,
    isActive: true,
    address: {
        streetTitle: "Lenina",
        city: {
            title: "Moscow",
            country: "Russia"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "JS"
        }
    ]
}

console.log(student.technologies[1].title)
