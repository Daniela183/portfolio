import { Box } from '@mui/material';
import Layout from '../components/Layout';
import CardProjetos from '../cards/CardProjetos';


function Projetos() {

    return (
        <Layout>
            <Box >
                <CardProjetos/>
            </Box>
        </Layout>
    );
}

export default Projetos;
