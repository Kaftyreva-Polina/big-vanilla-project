import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";

export const addMoneyToBudget = (buildings: GovernmentBuildingsType, budget: number) => {
    buildings.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;

}

export const toFireStaff = (building: GovernmentBuildingsType, stuffToFire: number) => {
    building.staffCount -= stuffToFire;
}

export const toHireStaff = (building: GovernmentBuildingsType, stuffToHire: number) => {
    building.staffCount += stuffToHire;
}

export function createMessage(props: CityType) {
    // return ("Hello " + props.title + " citizens. I want you be happy. All " + props.citizensNumber + " men. ")
    return `Hello ${props.title} citizens. I want you be happy. All ${props.citizensNumber} men. `;
}