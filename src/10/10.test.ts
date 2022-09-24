import {
    addNewBooksToUser,
    makeHairstyle,
    moveUser,
    upgradeLaptop,
    UserWithBooksType,
    UserWithLaptopType
} from "./10-Immutability";

test("hair should be lower", () => {
    let user = {
        name: "Peter",
        hair: 50,
        address: {
            title: "Minsk"
        },
    };

    const awesomeUser = makeHairstyle(user, 5);

    expect(user.hair).toBe(50)
    expect(awesomeUser.hair).toBe(10)
    expect(awesomeUser.address).toBe(user.address)
})


test("address has been changed", () => {
    let user: UserWithLaptopType = {
        name: "Peter",
        hair: 50,
        address: {
            title: "Minsk"
        },
        laptop: {
            brand: "book"
        }
    };

    const movedUser = moveUser(user, "Kiev")
    const movedUser2 = moveUser(user, "Astana")

    expect(movedUser).not.toBe(user)
    expect(movedUser.address).not.toBe(user.address)
    expect(movedUser.laptop).toBe(user.laptop)
    expect(movedUser.name).toBe(user.name)
    expect(movedUser.address.title).toBe("Kiev")

    expect(movedUser2.address.title).toBe("Astana")
})


test("laptop should be upgrade", () => {
    let user: UserWithLaptopType = {
        name: "Peter",
        hair: 50,
        address: {
            title: "Minsk"
        },
        laptop: {
            brand: "book"
        }
    };

    const upgradeUser = upgradeLaptop(user, "macbook")
    const downgradeUser = upgradeLaptop(user, "calculator")

    expect(user).not.toBe(upgradeUser)
    expect(user).not.toBe(downgradeUser)

    expect(upgradeUser.address).toBe(user.address)
    expect(downgradeUser.address).toBe(user.address)

    expect(upgradeUser.laptop).not.toBe(user.laptop)
    expect(downgradeUser.laptop).not.toBe(user.laptop)

    expect(upgradeUser.laptop.brand).toBe("macbook")
    expect(downgradeUser.laptop.brand).toBe("calculator")
    expect(user.laptop.brand).toBe("book")
})


test("add new books to user", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Peter",
        hair: 50,
        address: {
            title: "Minsk"
        },
        laptop: {
            brand: "book"
        },
        books: ["css", "html", "js", "react"]
    };

    const newUser = addNewBooksToUser(user, ["ts", "view", "redux"])

    expect(newUser).not.toBe(user)
    expect(newUser.address).toBe(user.address)
    expect(newUser.laptop).toBe(user.laptop)
    expect(newUser.books).not.toBe(user.books)
    expect(user.books.length).toBe(4)
    expect(newUser.books.length).toBe(7)
    expect(newUser.books[4]).toBe("ts")
    expect(newUser.books[5]).toBe("view")
    expect(newUser.books[6]).toBe("redux")

})