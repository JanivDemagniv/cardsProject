import React from 'react'
import NavBarLink from '../../../routes/components/NavBarLink'
import { Avatar, IconButton } from '@mui/material'
import ROUTES from '../../../routes/routesModuel'

export default function LogoIcon() {
    return (
        <NavBarLink to={ROUTES.ROOT}>
            <IconButton>
                <Avatar alt='LogoIcon' src='/images/logoPic.png' />
            </IconButton>
        </NavBarLink>
    )
}
