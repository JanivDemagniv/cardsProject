import { Visibility } from '@mui/icons-material'
import { Icon, IconButton, TextField } from '@mui/material'
import React from 'react'

export default function PassField() {
    return (
        <div>
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"></TextField><IconButton></IconButton>
        </div>
    )
}
