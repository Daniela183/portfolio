import { Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

function CardContato() {
    const onButtonClick = () => {
        const pdfUrl = "Sample.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Curriculo-daniela.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (

        <Box >
            <h1 style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', columnGap: '5px' }}>Contato</h1>
            <br /><br />
            <Box>
                <IconButton component="a" href="https://www.linkedin.com/in/daniela-soares-de-melo-0019a9203/" target="_blank" aria-label="LinkedIn" sx={{ margin: '0 18px' }}>
                    <LinkedInIcon />
                </IconButton>
                <IconButton component="a" href="https://github.com/Daniela183" target="_blank" aria-label="GitHub" sx={{ margin: '0 18px' }}>
                    <GitHubIcon />
                </IconButton>
                <IconButton component="a" href="mailto:danielasmelo232@gmail.com" target="_Self" aria-label="Email" sx={{ margin: '0 18px' }}>
                    <EmailIcon />
                </IconButton>
                <IconButton component="a" href="https://www.instagram.com/danieladesoares/" target="_blank" aria-label="Instagram" sx={{ margin: '0 18px' }}>
                    <InstagramIcon />
                </IconButton>
            </Box>
            <br />
            <center>
                <h4 style={{ fontSize: '12px' }}>
                    Clique para fazer o download do currículo
                </h4>
                <IconButton onClick={onButtonClick}>
                    <DownloadIcon />
                </IconButton>
            </center>
        </Box>

    );
}

export default CardContato;