import { Box, Typography } from '@mui/material';

function CardEducacao() {

    return (
        <Box sx={{ background: '#e7771c' }}>
            <h1 style={{display: 'flex', justifyContent:'center', flexDirection: 'row', columnGap: '5px' }}>Formação Acadêmica</h1>
            <Typography>
                Superior de Tecnologia em Análise e Desenvolvimento de Sistemas
                <br />
                Instituto Federal De Goiás - Câmpus Formosa
                <br />
                Graduação - Tecnologia | 2022
                <br />
            </Typography>
            <h1 style={{display: 'flex', justifyContent:'center', flexDirection: 'row', columnGap: '5px' }}>Idiomas</h1>
            <Typography>
                • Inglês intermediário
                <br/>
                • Libras intermediário
            </Typography>
        </Box>
    );
}

export default CardEducacao;