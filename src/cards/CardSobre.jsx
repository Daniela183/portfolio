import { Box, Typography } from '@mui/material';

function CardSobre() {

    return (
            <Box sx={{background:'#e7771c'}}>
                <h1 style={{display: 'flex', justifyContent:'center', flexDirection: 'row', columnGap: '5px' }}>Sobre</h1>
                <Typography sx={{display:'flex', justifyContent:'center', textAlign:'justify', width: 850, fontSize:'17px'}}>
                    Bem-vindo! Sou Daniela Soares, uma desenvolvedora
                    apaixonado por criar experiências digitais memoráveis e soluções inovadoras. Nesta página,
                    você encontrará uma amostra do meu trabalho e minha jornada profissional até agora.
                    <br/> <br/>
                    Com uma combinação de criatividade, habilidades técnicas e atenção aos detalhes, busco 
                    constantemente superar expectativas e criar impacto por meio do design e da tecnologia. 
                    Cada projeto reflete meu compromisso com a excelência e minha busca incessante pela
                    perfeição.
                    <br/> <br/>
                    Explore as diferentes seções para descobrir meus projetos mais recentes, 
                    experiências profissionais, habilidades técnicas e muito mais. Estou sempre em busca de
                    novas oportunidades e desafios emocionantes, então não hesite em entrar em contato se 
                    você estiver interessado em colaborar ou saber mais sobre meu trabalho.
                    <br/> <br/>
                    Obrigado por visitar meu portfólio e por dedicar seu tempo para conhecer um pouco mais 
                    sobre mim e meu trabalho. Espero que você aproveite sua visita e que possamos nos conectar
                    em breve!
                </Typography>
            </Box>
    );
}

export default CardSobre;