import React, { useEffect } from 'react'
import { useCurrentUser } from '../../users/porviders/UserProvider'
import { Navigate, useParams } from 'react-router-dom'
import ROUTES from '../../routes/routesModuel'
import { Container } from '@mui/material'
import useForm from '../../forms/hooks/useForm'
import initialCardForm from '../helpers/initialForms/initialCardForm'
import { cardSchema } from '../models/cardSchema'
import CardForm from '../components/CardForm'
import useCards from '../hooks/useCards'



export default function EditCardPage() {
    const { id } = useParams()
    const { getCardbyId, cardData, isLoading, setCardData, handleUpdateCard } = useCards()
    const { user } = useCurrentUser()
    const {
        errors,
        handleReset,
        validateForm,
        onSubmit,
    } = useForm(initialCardForm, cardSchema, handleUpdateCard)


    useEffect(() => {
        getCardbyId(id)
    }, [id]);

    const handleChangeEdit = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        setCardData((prev) => ({ ...prev, [name]: value }));
    }





    if (!user) return <Navigate to={ROUTES.ROOT} replace />
    if (isLoading) return <div>patiante</div>
    return (
        <Container
            sx={{
                paddingTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CardForm
                onSubmit={onSubmit}
                onReset={handleReset}
                validateForm={validateForm}
                title={"Edit Card"}
                errors={errors}
                data={cardData}
                onInputChange={handleChangeEdit} />
        </Container>
    )
}
