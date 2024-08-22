import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [counter, setCounter] = useState(0);
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (!isActive) return;
        const interValTimer = setInterval(() => {
            setCounter(p => p + 1)
        }, 1000)

        return () => clearInterval(interValTimer)
    }, [isActive])

    return (
        <div>
            <Typography>{counter < 10 ? '0' + counter : counter}</Typography>
            <Button onClick={() => !isActive ? setIsActive(true) : setIsActive(false)}>{isActive ? 'Stop' : 'Start'}</Button>
            <Button onClick={() => setCounter(0)}>Reset</Button>
        </div>
    )
}
