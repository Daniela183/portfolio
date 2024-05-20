import { Button, Box, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';

const Layout = ({ children }) => {
    const navigate = useNavigate();

    const handleClick = (rota) => {
        navigate(rota);
    };

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Box component='header' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', columnGap: '5px', fontSize: '20px', marginTop: '30px' }}>
                <Grid> <Button onClick={() => handleClick('/')} style={{ color: '#000' }}>Início</Button></Grid>
                <Grid> <Button onClick={() => handleClick('/sobre')} style={{ color: '#000' }}>Sobre</Button></Grid>
                <Grid> <Button onClick={() => handleClick('/experiencia')} style={{ color: '#000' }}>Experiência</Button></Grid>
                <Grid> <Button onClick={() => handleClick('/educacao')} style={{ color: '#000' }}>Educação</Button></Grid>
                <Grid> <Button onClick={() => handleClick('/habilidades')} style={{ color: '#000' }}>Habilidades</Button></Grid>
                <Grid> <Button onClick={() => handleClick('/projetos')} style={{ color: '#000' }}>Projetos</Button></Grid>
                <Grid> <Button onClick={() => handleClick('/contato')} style={{ color: '#000' }}>Contato</Button></Grid>
            </Box>
            <Box component='main' style={{ flex: '1', marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                {children}
            </Box>
            <Box component='footer' style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                <Footer />
            </Box>
        </Box>
    );
}

export default Layout;
