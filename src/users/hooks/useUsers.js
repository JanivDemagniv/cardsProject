import { useCallback, useState } from "react";
import { useCurrentUser } from "../porviders/UserProvider";
import { getUserData, getUserDeatails, login, signUp } from "../services/usersApiService";
import { getUser, removeToken, setTokenInLocalStorage } from "../services/localStorageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModuel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnack } from "../../providers/SnakBarProvider";

export default function useUsers() {
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();
    const { setUser, setToken } = useCurrentUser();
    const navigate = useNavigate()
    const setSnack = useSnack()



    const handleLogin = useCallback(async (userData) => {
        setIsLoading(true)
        try {
            const token = await login(userData);
            setTokenInLocalStorage(token);
            setToken(token);
            setUser(getUser());
            setSnack('success', 'You Are Logged In')
            navigate(ROUTES.CARDS);
        } catch (err) {
            setError(err.message)
            setSnack('error', err.message)
        }
        setIsLoading(false)
    }, [])

    const handleLogout = useCallback(() => {
        removeToken();
        setUser(null);
        setSnack('success', 'You logged Out')
    }, []);

    const handleSignup = useCallback(async (signUpDeatails) => {
        setIsLoading(true)
        try {
            const signUpNormlize = normalizeUser(signUpDeatails)
            await signUp(signUpNormlize);
            setSnack('success', 'You are signed Up')
            await handleLogin({ email: signUpDeatails.email, password: signUpDeatails.password });
        } catch (err) {
            setError(err);
            setSnack('error', err.message)
        }
        setIsLoading(false)
    }, [])

    const handleUserDetails = useCallback(async (id) => {
        try {
            let userInfo = await getUserDeatails(id)
            return userInfo
        } catch (e) {
            throw new Error(e.message)
        }
    }, [])

    return {
        isLoading, error, handleLogin, handleLogout, handleSignup, handleUserDetails
    }
}