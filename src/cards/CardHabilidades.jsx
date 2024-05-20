import { Box, Typography } from '@mui/material';
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";

function CardHabilidades() {

    return (
        <Box >
            <h1 style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', columnGap: '5px' }}>Habilidades</h1>
            <Typography>
                ● Trabalho em equipe
                <br />
                ● Facilidade em aprender
                <br />
                ● Proficiência em pacote Office (Word, Excel, PowerPoint).
            </Typography>
            <br /><br />
            <h1 style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', columnGap: '5px' }}>Linguagens</h1>
            <Typography style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', columnGap: '5px' }}>
                <IoLogoJavascript style={{ width: '45px', height: '45px', margin: '0 10px' }} />
                <SiTypescript style={{ width: '40px', height: '42px', margin: '0 10px' }} />
                <FaReact style={{ width: '45px', height: '45px', margin: '0 10px' }} />
                <IoLogoHtml5 style={{ width: '45px', height: '45px', margin: '0 10px' }} />
                <IoLogoCss3 style={{ width: '45px', height: '45px', margin: '0 10px' }} />
            </Typography>
        </Box>
    );
}

export default CardHabilidades;