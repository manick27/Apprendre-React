import { Box, padding } from '@mui/system'
import React from 'react'
import img from '../images/background.jpg'

export default function Body() {
    return (
        <div style={{backgroundColor: 'black', display: 'flex', justifyContent: 'space-between', color: 'white', padding: '10px'}}>
            <div style={{width: '50%', padding: '70px'}}>
                <h1>Shop the city</h1>
                <span>5 departement, 3 shopping center, 1000 shops</span>
                <Box style={{border: "2px solid white", width: 'fit-content', padding: '5px', marginTop: '50px', backgroundColor: ''}}>Create your count</Box>
            </div>
            <div style={{width: '50%'}}>
                <img src={img} height={600} width={800} alt="Erreur de chargement" />
            </div>
        </div>
    )
}
