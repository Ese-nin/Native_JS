import {manType} from "./07-destructuring";

let man: manType;
beforeEach(() => {
    man = {
        name: "Petr",
        age: 48,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Gagarina st."
            }
        }
    }
})

test("", () => {

    /*const age = man.age;
    const lessons = man.lessons;*/
    const {age, lessons} = man;
    const {title} = man.address.street

    const a = man.age;
    const l = man.lessons;

    expect(age).toBe(48);
    expect(lessons.length).toBe(2);

    expect(a).toBe(48);
    expect(l.length).toBe(2);
    expect(title).toBe("Gagarina st.");
})

test("", () => {})


test("", () => {
    const l1 = man.lessons[0]
    const l2 = man.lessons[1]

    const [ls1, ls2] = man.lessons

    expect(l1.title).toBe("1");
    expect(l2.title).toBe("2");

    expect(ls1.title).toBe("1");
    expect(ls2.title).toBe("2");
})

