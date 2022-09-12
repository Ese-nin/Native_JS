test("should take older man > 90", () => {
    const ages = [22, 45, 13, 1, 100, 95, 36, 78];

    const predicate = (age: number) => {
        return age > 90;
    }

    const oldAges = ages.filter(predicate);

    expect(oldAges.length).toBe(2);
    expect(oldAges[0]).toBe(100);
    expect(oldAges[1]).toBe(95);

})

test("should take courses chipper 160", () => {
    const courses = [
        {title: "CSS", price: 150},
        {title: "JS", price: 300},
        {title: "HTML", price: 100}
    ]




    const chipCourses = courses.filter(course => course.price < 160);

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe("CSS");
    expect(chipCourses[0].price).toBe( 150);

    expect(chipCourses[1].title).toBe("HTML");
    expect(chipCourses[1].price).toBe( 100);

})

test("get only completed tasks", ()=>{
    const tasks = [
        {id: 1, title: "bread", isDone: false},
        {id: 2, title: "butter", isDone: true},
        {id: 3, title: "socks", isDone: false},
        {id: 4, title: "ball", isDone: true}
    ]

    const completedTasks = tasks.filter(t => t.isDone)
    const uncompletedTasks = tasks.filter(t => !t.isDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe("butter");
    expect(completedTasks[1].title).toBe("ball");
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].id).toBe(4);

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].title).toBe("bread");
    expect(uncompletedTasks[1].title).toBe("socks");
    expect(uncompletedTasks[0].id).toBe(1);
    expect(uncompletedTasks[1].id).toBe(3);
})

