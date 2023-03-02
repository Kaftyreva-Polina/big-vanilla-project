import {student, StudentType} from "../02/02";
import {GovernmentBuildingsType, HoseType} from "../02/02_02";

const sum1 = (a: number, b: number) => {
    return a + b;
}

function sum2(a: number, b: number) {
    return a + b;
}


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function addSkill2(student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

