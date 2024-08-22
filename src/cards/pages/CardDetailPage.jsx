import { Box, Card, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useCards from '../hooks/useCards';
import Spinner from '../../components/Spiner';
import Error from '../../components/Error'
import PageHeader from '../../components/PageHeader';
import CardActionBar from '../components/Card/CardActionBar';

export default function CardDetailPage() {
    const { id } = useParams();
    const { cardData, getCardbyId, isLoading, error, setSnack } = useCards();


    useEffect(() => {
        getCardbyId(id)

    }, [id]);

    if (isLoading) return <Spinner />
    if (error) return <Error errorMessage={error} />
    if (cardData && cardData.length == 0) return <Typography>Sorry, there is no cards to display</Typography>
    if (cardData) return (
        <div style={{ margin: '0 auto', width: '700px' }}>
            <PageHeader title={cardData.title} />

            {/* <Headers /> */}
            <Card variant='outlined' >
                <CardMedia sx={{ height: '300px' }} image={cardData.image.url} />
                <CardContent>
                    <Box sx={{ width: '100%', p: '15px', fontFamily: 'roboto' }}>
                        <Typography sx={{ color: 'gray' }}>{cardData.subtitle}</Typography>
                        <Typography paragraph={true}>
                            {cardData.description}
                        </Typography>
                        <Divider />
                        <Typography paragraph={true}>
                            <span style={{ fontWeight: 'bold' }}>Phone:</span> {cardData.phone}
                        </Typography>
                        <Typography paragraph={true}>
                            <span style={{ fontWeight: 'bold' }}>Email:</span> {cardData.email}
                        </Typography>
                        <Typography paragraph={true}>
                            <span style={{ fontWeight: 'bold' }}>Address:</span> {cardData.address.country + ' ' + cardData.address.city + ' ' + cardData.address.street}
                        </Typography>
                    </Box>
                </CardContent>
                <CardActionBar />

            </Card>
        </div>
    )
}
