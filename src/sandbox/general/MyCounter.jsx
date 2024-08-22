import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function MyCounter() {
    const [count, setCount] = useState(0);

    const handleCounterPlus = () => {
        setCount((p) => p + 1);
    }

    const handleCounterMinus = () => {
        setCount((p) => p - 1)
    }

    return (
        <div>
            <Typography>{count}</Typography>
            <Button variant='contained' onClick={handleCounterPlus}>+</Button>
            <Button variant='contained' onClick={handleCounterMinus}>-</Button>
        </div>
    )
}
