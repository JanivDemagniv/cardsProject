import React from 'react'
import CardComponent from './Card/CardComponent';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModuel';
import { useCurrentUser } from '../../users/porviders/UserProvider';
import { useSnack } from '../../providers/SnakBarProvider';

export default function Cards({ cards, handleDelete, handleLike }) {
    const navigate = useNavigate()
    const { user } = useCurrentUser()
    const setSnack = useSnack()
    const handleEdit = (card) => {
        if (card.user_id == user._id || user.isAdmin) {
            navigate(ROUTES.EDITCARD + '/' + card._id)
        } else (setSnack('error', "You can't edit  this card"))
    }



    return (
        <Container sx={{ display: "flex", flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'stretch' } }}>
            {cards.map((card) => <CardComponent card={card} key={card._id} handleDelete={handleDelete} handleEdit={() => { handleEdit(card) }} handleLike={handleLike} />
            )}
        </Container>
    )
}
