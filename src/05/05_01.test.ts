import {createGreetingMessage, ManType} from "./05_01";


let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Aleksander Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18}
    ]
})

test("should get array of greeting messages", () => {

    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Andrew. Welcome to IT-incubator ")
    expect(messages[1]).toBe("Hello Aleksander. Welcome to IT-incubator ")
    expect(messages[2]).toBe("Hello Dmitry. Welcome to IT-incubator ")

})