
const ages = [22, 45, 13, 1, 100, 95, 36, 78];

const predicate = (age: number) => {
    return age > 90;
}

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: "CSS", price: 150},
    {title: "JS", price: 300},
    {title: "HTML", price: 100}
]

// < 160
export const cheapPredicate = (course: CourseType) => {
    return course.price < 160;
}
