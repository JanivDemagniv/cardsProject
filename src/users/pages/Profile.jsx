import { Avatar, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import { useCurrentUser } from '../porviders/UserProvider'
import { Navigate } from 'react-router-dom'
import ROUTES from '../../routes/routesModuel'
import axios from 'axios'
import { getToken } from '../services/localStorageService'
export default function Profile() {

    const { user } = useCurrentUser()
    const [userData, setUserData] = useState()

    const getUserDetails = async (id) => {
        try {
            axios.defaults.headers.common["x-auth-token"] = getToken()
            const response = await axios.get('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/' + id)
            const data = response.data;
            return setUserData(data)
        } catch (e) {
            throw new Error(e.message);
        }
    };

    useEffect(() => {
        getUserDetails(user._id)
    }, [])



    if (!user) return <Navigate to={ROUTES.ROOT} replace />
    return (
        <Container>
            <PageHeader title='Profile' />
            <Typography>Profile Page</Typography>
            <Avatar></Avatar>
            <Typography sx={{ textDecoration: 'underLine' }}>Name</Typography>
            <Typography></Typography>
            <Typography sx={{ textDecoration: 'underLine' }}>address</Typography>
            <Typography></Typography>
        </Container>
    )
}
