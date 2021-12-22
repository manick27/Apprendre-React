import { Box, Container, TextField } from '@mui/material'
import React from 'react'
import { Twitter } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { Facebook } from '@mui/icons-material'
import { WhatsApp } from '@mui/icons-material'
import Navbar from './Navbar'

export default function Header() {
    return (
        <div style={{marginLeft: '0', marginRight: '0', backgroundColor: 'black', color: 'white'}}>
            <Box p={1} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <TextField label="Search" InputProps={{ className : {color: "#fff"}}} style={{color: 'white', background: 'rgb(43, 42, 42)'}} />
                </div>
                <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    <div>
                        <div>SHOPPING</div>
                        <span style={{ fontSize: '10px' }}>UN</span>
                        <span>BIRMINGKAN</span>
                        <span style={{ fontSize: '10px' }}>.com</span>
                    </div>
                    <div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Twitter />
                    <Instagram />
                    <Facebook />
                    <WhatsApp />
                </div>
            </Box>

            <Navbar/>

        </div>
    )
}
