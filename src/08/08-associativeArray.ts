type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '101': {id: 101, name: "Dimych"},
    '1325468': {id: 1325468, name: "Lena"},
    '121212': {id: 121212, name: "Katya"},
    '1': {id: 1, name: "Deniska"}
}

//users[1] => доставание элемента

let user = {id: 100500, name: "Igor"}

users[user.id]=user; // добавление элемента
delete users[100500]; // удаление элемента

export const usersArray = [
    {id: 101, name: "Dimych"},
    {id: 1325468, name: "Lena"},
    {id: 121212, name: "Katya"},
    {id: 1, name: "Deniska"}
]

