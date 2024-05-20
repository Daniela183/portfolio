import { Box, Typography } from '@mui/material';

function Card() {

    return (
        <Box >
            <Box>
                <h1 style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', columnGap: '5px' }}>Experiência</h1>
                <Typography>
                    Em busca de uma oportunidade na área de desenvolvimento.
                </Typography>
            </Box>
        </Box>
    );
}

export default Card;