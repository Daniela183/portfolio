import * as React from 'react';
import Layout from '../components/Layout';
import CardImg from '../cards/CardImg';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Layout>
      <Box style={{ display: 'flex', justifyContent: 'center', textAlign: 'justify', width: 500, fontSize: '17px' }}>
        <h3>
          Bem-vindo ao meu portifólio! Meu nome é Daniela Soares, espero que aproveite sua visita.
        </h3>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          top: 50,
          right: 50,
          padding: 2
        }}>
        <CardImg />
      </Box>
    </Layout>
  );
}
