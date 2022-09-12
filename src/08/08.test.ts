type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType = {}

beforeEach(()=>{
    users = {
        '101': {id: 101, name: "Dimych"},
        '1325468': {id: 1325468, name: "Lena"},
        '121212': {id: 121212, name: "Katya"},
        '1': {id: 1, name: "Deniska"}
    }
})

test("should update user", () => {

    users['1'].name="Natasha"
    delete users['121212']

    expect(users['1'].name).toBe("Natasha")
    expect(users['121212']).toBeUndefined()
})