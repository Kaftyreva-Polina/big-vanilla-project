import {GovernmentBuildingsType, HouseType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentsBuildings = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map(h => h.address.street.title)
}

export const getStreetTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title)
}

export const createMessages = (houses: Array<HouseType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}

