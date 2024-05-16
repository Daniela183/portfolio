import { Button, Box, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';

    const Layout= ({ children }) => {
        const navigate = useNavigate();
  
    const handleClick = (rota) => {
        navigate(rota);
    };

    return (
        <Box style={{ display: 'flex',flexDirection:'column', minHeight: '100vh'}}>
            <Box style={{ display: 'flex', flexDirection: 'column', marginTop: '30px'}}>
                <Box component='header'sx={{background:'#e9ae7d'}} style={{ display: 'flex', justifyContent:'center', flexDirection: 'row', columnGap: '5px', fontSize:'20px'}}>
                    <Grid> <Button onClick={() => handleClick('/sobre')} style={{ color: '#000' }}>Sobre</Button></Grid>
                    <Grid> <Button onClick={() => handleClick('/experiencia')} style={{ color: '#000' }}>Experiência</Button></Grid>
                    <Grid> <Button onClick={() => handleClick('/educacao')} style={{ color: '#000' }}>Educação</Button></Grid>
                    <Grid> <Button onClick={() => handleClick('/habilidades')} style={{ color: '#000' }}>Habilidades</Button></Grid>
                    <Grid> <Button onClick={() => handleClick('/projetos')} style={{ color: '#000' }}>Projetos</Button></Grid>
                    <Grid> <Button onClick={() => handleClick('/contato')} style={{ color: '#000' }}>Contato</Button></Grid>
                </Box>
            </Box>
            <main style={{ overflowY: 'auto', marginBottom: '85px', marginTop:'20px', display:'flex', justifyContent:'center' }}>
                {children}
            </main>
            <Box style={{display:'flex', justifyContent:'center'}}>
                <Footer/>
            </Box>
        </Box>
    );
}

export default Layout;