type CityType = {
    title: string
}

type UserType = {
    name: string
    age: number
    city: CityType
}

function plusAge(u: UserType) {
    u.age++;
}

test("reference type test", () => {

    let user: UserType = {
        name: "Masha",
        age: 55,
        city: {
            title: "Minsk"
        }
    }

    plusAge(user);

    expect(user.age).toBe(56)


    const superman = user;

    superman.age = 1000;

    expect(user.age).toBe(1000)


})


test("array reference test", () => {

    let users: Array<UserType> = [
        {
            name: "Masha",
            age: 55,
            city: {
                title: "Minsk"
            }
        },
        {
            name: "Dasha",
            age: 77,
            city: {
                title: "Minsk"
            }
        }
    ]

    let admins = users;

    admins.push({
        name: "Bandit", age: 12, city: {
            title: "Minsk"
        }
    })

    expect(users[2]).toEqual({name: "Bandit", age: 12})

})


test("value type test", () => {

    let usersCount = 100;

    let adminsCount = usersCount;

    adminsCount = adminsCount + 1

    expect(usersCount).toBe(100)

})


test("reference test", () => {

    let user: UserType = {
        name: "Masha",
        age: 55,
        city: {
            title: "Minsk"
        }
    }


    let user2: UserType = {
        name: "Sasha",
        age: 42,
        city: user.city
    }

    user2.city.title = "Greece";

    expect(user.city).toBe(user2.city)
    expect(user.city.title).toBe("Greece")

})


test("reference array test", () => {

    const city = {
        title: "Minsk"
    }

    let user: UserType = {
        name: "Masha",
        age: 55,
        city: city
    }


    let user2: UserType = {
        name: "Sasha",
        age: 42,
        city: city
    }

    const users = [user, user2, {name: "George", age: 45, city: city}]

    const admins = [user, user2];

    admins[0].name = "Maria"

    expect(user.name).toBe("Maria")

})


test("sort array test", () => {

    const letters = ["c", "r", "a", "m", "o"];

    pasportist(letters)

    expect(letters).toEqual(["c", "r", "a", "m", "o"])

})

const pasportist = (array: any) => {
    array.sort();
    console.log(array)
}