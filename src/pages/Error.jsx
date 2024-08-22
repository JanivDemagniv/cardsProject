import React from 'react'
import PageHeader from '../components/PageHeader'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../routes/routesModuel'



export default function Error() {
    const navigate = useNavigate()
    return (
        <>
            <PageHeader title={"Eror 404"} subTitle={"Page not found"} />
            <div style={{ display: 'flex', width: '500px', margin: '0 auto' }}>
                <Button onClick={() => navigate(ROUTES.ROOT)}>Return to main page</Button>
                <img src='/images/robot.png' alt="robot" />
            </div>
        </>
    )
}
