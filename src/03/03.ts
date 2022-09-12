import {GovernmentBuildingsType, HousesType, studentType} from "../02_objects/02";

export const sum = (a: number, b: number) => {
    return a + b;
}

const res = sum(sum(1, 2), sum(3, 4));

export const addSkill = (st: studentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentPassive(s: studentType) {
    s.isActive = false;
}

export function doesStudentLiveIn(s: studentType, city: string) {
    return s.address.city.title === city;
}

export function addMoneyToBudget(building: GovernmentBuildingsType, budget: number) {
    return building.budget += budget;
}

export function repairHouse(h: HousesType) {
    h.repaired = true;
}

export function toFireStaff(building: GovernmentBuildingsType, staff: number) {
    building.staffCount -= staff;
}

export function toHireStaff(building: GovernmentBuildingsType, staff: number) {
    building.staffCount += staff;
}