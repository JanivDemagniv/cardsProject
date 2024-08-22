import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function MyStateComponent() {
    const [toggle, setToggel] = useState(true)
    return (
        <div>
            <Button onClick={() => { setToggel(!toggle) }}>Click to change</Button>
            <Typography>{toggle ? "Hello" : 'Bye'}</Typography>
        </div>
    )
}
