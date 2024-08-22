import { Button } from '@mui/material'
import React from 'react'

export default function EventComponent() {

    const clickHandler = () => console.log('My button has been clicked');

    return (
        <div>
            <Button variant='contained' onClick={clickHandler}>Click</Button>
        </div>
    )
}
