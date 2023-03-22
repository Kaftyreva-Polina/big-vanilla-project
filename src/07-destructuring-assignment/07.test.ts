import {ManType} from "./07destructuring";

let props: ManType;

beforeEach(() => {
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}, {title: "3", name: "React"}],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }
})


test("test1", () => {
    // const age = props.age;
    // const lessons = props.lessons;
    const {age, lessons} = props;
    const {title} = props.address.street;


    expect(age).toBe(32);
    expect(lessons.length).toBe(3);

    expect(title).toBe("Nezavisimosti street");
})

test("test2", () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    // const [,,ls3] = props.lessons;
    const [ls1, , ...restLessons] = props.lessons

    expect(ls1.title).toBe("1")
    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe("3")
    expect(restLessons[0].name).toBe("React")
    expect(restLessons[0]).toStrictEqual({title: "3", name: "React"})
    // expect(ls3.title).toBe("3")

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")
})