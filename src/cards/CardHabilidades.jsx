import { Box, Typography } from '@mui/material';

function CardHabilidades() {

    return (
        <Box sx={{ background: '#e7771c' }}>
            <h1 style={{display: 'flex', justifyContent:'center', flexDirection: 'row', columnGap: '5px' }}>Habilidades</h1>
            <Typography>
                • Proficiência em pacote Office (Word, Excel, PowerPoint).
                <br />
                • Capacidade de trabalhar em equipe
                <br />
                • Facilidade em aprender
            </Typography>
            
        </Box>
    );
}

export default CardHabilidades;