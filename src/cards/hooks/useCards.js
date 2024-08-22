import { useCallback, useState } from "react";
import { useSnack } from "../../providers/SnakBarProvider";
import axios from "axios";
import normalizeCard from "../helpers/normalization/normalizeCard";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModuel";
import { createCardRequest, getMyCards } from "../services/cardsApiService";

export default function useCards() {
    const navigate = useNavigate()

    const [cardsData, setCardsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()
    const [cardData, setCardData] = useState([])

    const setSnack = useSnack()

    const getCards = useCallback(async () => {
        try {
            let response = await axios.get('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards');
            setCardsData(response.data)
            setSnack('success', 'all Card are loaded')
        } catch (err) {
            setError(err.message)
        }
        setIsLoading(false)
    }, []);

    const getCardbyId = useCallback(async (id) => {
        setIsLoading(true)
        try {
            let response = await axios.get('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/' + id);
            setCardData(response.data)
        } catch (err) {
            setError(err.message)
        }
        setIsLoading(false)
    }, []);

    const handleLike = useCallback((id) => {
        console.log(`This card ${id} has been liked`);
    }, [])
    const handleDelete = useCallback((id) => {
        console.log(`Deleting the ${id} card`);
    }, [])

    const handleCreateCard = async (card) => {
        setIsLoading(true)
        try {
            let addCard = normalizeCard(card);
            const newCard = await createCardRequest(addCard);
            navigate(ROUTES.CARDINFO + '/' + newCard._id)
        } catch (e) {
            setError(e);
            setSnack('error', e.message)
        }
        setIsLoading(false)
    }

    const handleUpdateCard = useCallback(async (card, id) => {
        setIsLoading(true)
        try {
            let updateCard = normalizeCard(card);
            const updatedCard = await sendUpdateCard(updateCard, id)
            navigate(ROUTES.CARDINFO + '/' + updateCard._id)
        } catch (e) {
            setError(e)
            setSnack('error', e.message)
        }
    }, [])

    const handleMyCards = async () => {
        setIsLoading(true)
        try {
            const myCardData = await getMyCards();
            setCardsData(myCardData)
            setSnack('success', 'all Card are loaded')
        } catch (e) {
            setError(e)
            setSnack('error', e.message)
        }
        setIsLoading(false)
    }

    return { handleMyCards, cardData, setCardData, getCardbyId, cardsData, isLoading, error, setSnack, getCards, handleLike, handleDelete, handleCreateCard, handleUpdateCard }
}