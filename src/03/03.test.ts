import {CityType, studentType} from "../02_objects/02";
import {
    addMoneyToBudget,
    addSkill,
    doesStudentLiveIn,
    makeStudentPassive,
    repairHouse,
    toFireStaff,
    toHireStaff
} from "./03";

let student: studentType;
beforeEach(() => {
    student = {
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
})

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

test("new tech skill should be added", () => {
    addSkill(student, "React");

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("React")
    expect(student.technologies[3].id).toBeDefined()
})

test("student should be active", () => {
    expect(student.isActive).toBe(true);

    makeStudentPassive(student);

    expect(student.isActive).toBe(false);
})

test("does student live in city?", () => {

    let result1 = doesStudentLiveIn(student, "Minsk");
    let result2 = doesStudentLiveIn(student, "Moscow");

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})


// 01. Создайте в отдельном файле функцию, чтобы тесты прошли
test('Budget should be for changed fot HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000);
});
// 02. Тесты должны пройти
test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000);
});

// 03. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be repaired', () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
});


// 04. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be reduced', () => {
    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180);
});
// 05. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be increased', () => {
    toHireStaff(city.governmentBuildings[0], 20);
    toHireStaff(city.governmentBuildings[1], 220);

    expect(city.governmentBuildings[0].staffCount).toBe(220);
    expect(city.governmentBuildings[1].staffCount).toBe(1220);
});