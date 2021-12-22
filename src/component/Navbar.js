import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Navbar() {
    return (
        <div style={{marginLeft: '0', marginRight: '0', backgroundColor: 'rgb(43, 42, 42)', color: 'white'}}>
            <Typography align='center'>
                <Box mr={5} component='span'>Accueil</Box>
                <Box mr={5} component='span'>Inscription</Box>
                <Box mr={5} component='span'>Connexion</Box>
                <Box mr={5} component='span'>Contactez nous</Box>
                <Box mr={5} component='span'>A propos</Box>
                <Box mr={5} component='span'>Déconnexion</Box>
            </Typography>
        </div>
    )
}
