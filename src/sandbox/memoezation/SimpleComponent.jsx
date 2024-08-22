import { Typography } from '@mui/material'
import React, { memo } from 'react'

export default memo(function SimpleComponent({ user }) {
    console.log('render');

    return (
        <div>
            <Typography variant='h3'>{user.firstName} and the age is {user.age}</Typography>
        </div>
    )
})
