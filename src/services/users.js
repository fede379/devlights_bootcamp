import {API} from "./api"

export const getUsers = () => {
    return API.get("api/?results=10&seed=abc");
}