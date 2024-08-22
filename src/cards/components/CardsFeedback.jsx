import React from 'react'
import Cards from './Cards'
import Error from '../../components/Error'
import Spinner from '../../components/Spiner'
import { Typography } from '@mui/material'

export default function CardsFeedback({ isLoading, cards, error, handleDelete, handleLike }) {
    if (isLoading) return <Spinner />
    if (error) return <Error errorMessage={error} />
    if (cards && cards.length == 0) return <Typography>Sorry, there is no cards to display</Typography>
    if (cards) return <Cards cards={cards} handleDelete={handleDelete} handleLike={handleLike} />
    return null
}

