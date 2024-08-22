import axios from "axios";
import useAxios from "../../hooks/useAxios";

export const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";

useAxios()

export const createCardRequest = async (card) => {
    try {
        const response = await axios.post(apiUrl, card)
        const data = response.data
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

export const sendUpdateCard = async (card, id) => {
    try {
        const response = await axios.put(apiUrl + "/" + id, card)
        const data = response.data
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

export const getMyCards = async () => {
    try {
        const response = await axios.get(apiUrl + '/my-cards')
        const data = response.data
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}


