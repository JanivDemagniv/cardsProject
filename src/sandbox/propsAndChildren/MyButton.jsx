import { Button } from '@mui/material'
import React, { useState } from 'react'

export default function MyButton({ children, active }) {
    return (
        <Button onClick={active} sx={{ color: 'white', backgroundColor: '#4caf50', '&:hover': { backgroundColor: '#45a049' } }}>
            {children}
        </Button >
    )
}
