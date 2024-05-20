import { Box, Link, Typography } from '@mui/material';
import CardCurriculo from './CardCurriculo';
import CardImg from './CardImg';

function CardSobre() {
    return (
        <Box>
            <h1 style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', columnGap: '5px' }}>Sobre</h1>
            <Typography sx={{ textAlign: 'justify', width: 800, fontSize: '17px', margin: '0 auto' }}>
                Bem-vindo! Sou Daniela Soares, desenvolvedora web front-end. Minha jornada de desenvolvimento começou em 2020 quando ingressei no
                <Link href="https://www.ifg.edu.br/formosa" target="_blank" sx={{ textDecoration: 'none', color: '#626969', margin: '4px' }}>
                    IFG
                </Link>
                no curso de Tecnologia em Análise e Desenvolvimento de Sistemas, no qual me formei.
                <br /><br />
                Atualmente, tenho experiência em tecnologias como React, Typescript, JavaScript, HTML, CSS, Next.js e Node.js.
                Continuo a estudar constantemente para aprender melhores práticas e ferramentas, buscando me aperfeiçoar.
                <br /><br />
                Com uma combinação de criatividade, habilidades técnicas e atenção aos detalhes, busco superar expectativas e criar
                impacto por meio da tecnologia.
                <br /><br />
                Obrigada por visitar meu portfólio e dedicar seu tempo para conhecer um pouco mais sobre mim e meu trabalho.
                Espero que aproveite sua visita. Sinta-se à vontade para visualizar o meu currículo e minhas redes abaixo.
                Espero que possamos nos conectar em breve!
            </Typography>
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
            <Box>
                <CardCurriculo />
            </Box>
        </Box>
    );
}

export default CardSobre;
