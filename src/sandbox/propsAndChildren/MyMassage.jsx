import { Box } from '@mui/material'
import React from 'react'

export default function MyMassage({ children }) {
    return (
        <Box sx={{ backgroundColor: "#FA5F54", border: "1px solid black", padding: '10px' }}>
            {children}
        </Box>
    )
}
