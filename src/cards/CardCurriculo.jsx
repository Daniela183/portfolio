import { Box, IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

function CardCurriculo() {
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
            <p style={{ fontSize: '12px' }}>
                Clique para fazer o download do currículo
                <IconButton onClick={onButtonClick}>
                    <DownloadIcon />
                </IconButton>
            </p>
        </Box>

    );
}

export default CardCurriculo;