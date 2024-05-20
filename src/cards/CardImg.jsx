import * as React from 'react';
import Img from '../img/perfil.jpg'
import { Box } from '@mui/material';



export default function CardImg() {
    return (
        <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', width: '280px', height: '280px', borderRadius:'8px', background: '#9bebcf9c' }}>
            <Box marginTop={2} >
                <img 
                    src={Img}
                    alt="Imagen de perfil"
                    width={250}
                    height={250}
                    title="Imagen de perfil"
                />
            </Box >
        </Box>
    );
}
