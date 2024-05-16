import * as React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import { Box, IconButton, Typography } from '@mui/material';

export default function Footer() {

    return (
        <Box sx={{background:'#d4915a'}}>
            <Box>
                <IconButton component="a" href="https://www.linkedin.com/in/daniela-soares-de-melo-0019a9203/" target="_blank" aria-label="LinkedIn" sx={{ margin: '0 18px' }}>
                    <LinkedInIcon />
                </IconButton>
                <IconButton component="a" href="https://github.com/Daniela183" target="_blank" aria-label="GitHub" sx={{ margin: '0 18px' }}>
                    <GitHubIcon />
                </IconButton>
                <IconButton component="a" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" aria-label="Instagram" sx={{ margin: '0 18px' }}>
                    <EmailIcon />
                </IconButton>
                <IconButton component="a" href="https://www.instagram.com/danieladesoares/" target="_blank" aria-label="Instagram" sx={{ margin: '0 18px' }}>
                    <InstagramIcon />
                </IconButton>
            </Box>
            <Typography sx={{margin:'0 35px'}}>
                © 2024 | Daniela Soares de Melo
            </Typography>
        </Box>
    );
}
