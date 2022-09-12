type ManType = {
    name: string
    age: number
}

let people: Array<ManType> = [];

beforeEach(() => {
    people = [
        {name: "Pavel Nerpos", age: 35},
        {name: "Timur Robot", age: 24},
        {name: "Oleg Yoyo", age: 18}
    ]
})

test("should get array of greeting messages", () => {

    const messages = people.map(p => `Hallo, ${p.name.split(" ")[0]}. Welcome to IT-Incubator!`);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hallo, Pavel. Welcome to IT-Incubator!")
    expect(messages[1]).toBe("Hallo, Timur. Welcome to IT-Incubator!")
    expect(messages[2]).toBe("Hallo, Oleg. Welcome to IT-Incubator!")
})