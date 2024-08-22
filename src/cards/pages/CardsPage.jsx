import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import Cards from '../components/Cards'
import Footer from '../../layout/footer/Footer'
import axios from 'axios'
import CardsFeedback from '../components/CardsFeedback'
import useCards from '../hooks/useCards'
import AddNewCardButton from '../components/AddNewCardButton'


export default function CardsPage() {
    const { cardsData, isLoading, error, getCards, handleLike, handleDelete } = useCards()

    useEffect(() => {
        getCards();
    }, [])

    return (
        <div>
            <PageHeader title={"Cards"} subTitle={"On this page you can find all bussines cards from all categories"} />
            <CardsFeedback cards={cardsData} handleDelete={handleDelete} handleLike={handleLike} error={error} isLoading={isLoading} />
            <AddNewCardButton />
        </div>
    )
}
