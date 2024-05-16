import { Box, Typography } from '@mui/material';

function CardContato() {

    return (
            <Box sx={{background:'#e7771c'}}>
                <h1 style={{display: 'flex', justifyContent:'center', flexDirection: 'row', columnGap: '5px' }}>Contato</h1>
           <Typography>Este é o meu contato (00) 0 0000-0000</Typography>
            </Box>
    );
}

export default CardContato;