import axios from "axios";
import useAxios from "../../hooks/useAxios";

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users";

const login = async (userLogin) => {
    try {
        const response = await axios.post(apiUrl + '/login', userLogin);
        const data = response.data
        return data
    } catch (e) {
        throw new Error(e.message)
    }
};

const signUp = async (userSignUp) => {
    try {
        const response = await axios.post(apiUrl, userSignUp)
        const data = response.data;
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

const getUserData = async (id) => {
    try {
        const response = await axios.post(apiUrl + '/' + id, userSignUp)
        const data = response.data;
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

const getUserDeatails = async (id) => {
    try {
        useAxios();
        let response = await axios.get(apiUrl + '/' + id)
        let data = response.data
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

export { getUserData, signUp, login, getUserDeatails }