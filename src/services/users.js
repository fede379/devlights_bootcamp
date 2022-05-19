import {API} from "./api"

export const getUsers = async () => {
    const response = await API.get("api/?results=10&seed=abc", {
        headers: {
            "Autorization": `Bearer`
        }
    });

    return response.results;
}