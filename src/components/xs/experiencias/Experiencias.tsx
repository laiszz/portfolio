import React from "react"
import { Box, Tabs, Tab, Typography, LinearProgressProps, LinearProgress, Divider, Grid } from "@mui/material"
import useLocalStorage from "react-use-localstorage"

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.pecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

function Experiencias() {
    const texts = [
        'Intro',
        'Experiences',
        'Education',
        'My Passion',
        'I have been a teacher for over 3 years now, but never wanted to stop learning. So now, I\'m reigniting an old passion from my High School: programming!',
        'And today, after completing the Java Developer Bootcamp with Generation Brasil, I\'m ready to tackle some new challenges and continue to improve and learn!',
        'Shop Assistant',
        'Customer services, online and on-site sales, and organization and repairs of the shop\'s stock.',
        'Intern',
        'In classroom intern, monitoring of students during their day-to-day tasks, and substitute teacher.',
        'Tutoring teacher',
        'Private online classes of Math, Physics and Chemistry to students off all ages.',
        'Computer Technician',
        'Technician dedicated to Fullstack development, usinc C# and .NET, and basic notions of Networks',
        'Bachelor\'s in Physics',
        'Data taking and analisys, with focus on Theoretical Physics and simulation programming.',
        'Java Developer Bootcamp',
        'Fullstack development using Java and Typescript, in the frameworks Spring and React.',
        'Intro',
        'Experiências',
        'Educação',
        'Minha Paixão',
        'Sou professora há mais de 3 anos agora, mas nunca quis parar de aprender. Então agora, estou reacendendo uma antiga paixão criada no Ensino Médio: programação!',
        'E atualmente, após concluir o Bootcamp Desenvolvedorx Java com a Generation Brasil, estou pronta para novos desafios e para continuar aprendendo!',
        'Assistente de Loja',
        'Atendimento ao cliente, vendas online e presenciais, e organização e reparos do estoque da loja.',
        'Estagiária',
        'Estagiária de sala, acompanhamento dos alunos durante todo seu dia-a-dia, e plantonista e monitora.',
        'Monitora',
        'Aulas particulares remotas de Matemática, Física e Química para alunos do Ensino Fundamental e Ensino Médio.',
        'Técnico em Informática',
        'Técnico voltado ao desenvolvimento Fullstack, usando C# e .NET, e noções básicas de Redes.',
        'Bacharelado em Física',
        'Tomada e análise de dados, com foco em Física Teórica e programação de simulações.',
        'Bootcamp Desenvolvedorx Java',
        'Desenvolvimento Fullstack usando Java e Typescript, nos frameworks Spring e React.',
        'Experiences',
        'Experiências',
        'Education',
        'Educação'
    ]

    const [language, setLanguage] = useLocalStorage('language')

    return (
        <Box width='100%' mt={15} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Grid container xs={12} display='flex' justifyContent='center' alignItems='center'>
                <Box px={2} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <Typography textAlign='center' mb={5} color='secondary' variant='h4' className='typography-cursorDefault'>{language == 'true' ? texts[3] : texts[21]}</Typography>
                    <Typography textAlign='center' color='textPrimary' className='typography-cursorDefault'>{language == 'true' ? (<>{texts[4]} <br /><br /> {texts[5]}</>) : (<>{texts[22]} <br /><br /> {texts[23]}</>)}</Typography>
                </Box>
                <Divider />
                <Box width='100vw' px={2} py={5}>
                    <Box my={2}>
                        <Typography className='typography-cursorDefault'>Java</Typography>
                        <LinearProgressWithLabel color='secondary' value={61} />
                    </Box>
                    <Box mb={2}>
                        <Typography className='typography-cursorDefault'>Python</Typography>
                        <LinearProgressWithLabel color='secondary' value={72} />
                    </Box>
                    <Box mb={2}>
                        <Typography className='typography-cursorDefault'>Typescript</Typography>
                        <LinearProgressWithLabel color='secondary' value={45} />
                    </Box>
                    <Box mb={2}>
                        <Typography className='typography-cursorDefault'>SQL</Typography>
                        <LinearProgressWithLabel color='secondary' value={58} />
                    </Box>
                </Box>
            </Grid>
            <Grid container width='100vw' px={2} py={5} display='flex' justifyContent='center' alignItems='center'>
                <Typography textAlign='center' mb={5} color='primary' variant='h4' className='typography-cursorDefault'>{language == 'true' ? texts[36] : texts[37]}</Typography>
                <Grid item pb={3} xs={12}>
                    <Typography textAlign='center' gutterBottom variant='h5' color='secondary' className='typography-cursorDefault'>{language == 'true' ? texts[6] : texts[24]}</Typography>
                    <Typography textAlign='center' gutterBottom color='textPrimary' className='typography-cursorDefault'>PBKids Brinquedos</Typography>
                    <Typography textAlign='center' gutterBottom color='textPrimary' className='typography-cursorDefault'>2021 - 2021</Typography>
                    <Typography textAlign='center' color='textPrimary' className='typography-cursorDefault'>{language == 'true' ? texts[7] : texts[25]}</Typography>
                </Grid>
                <Grid item pb={3} xs={12}>
                    <Typography textAlign='center' gutterBottom variant='h5' color='secondary' className='typography-cursorDefault'>{language == 'true' ? texts[8] : texts[26]}</Typography>
                    <Typography textAlign='center' gutterBottom color='textPrimary' className='typography-cursorDefault'>Escola Bilíngue Pueri Domus</Typography>
                    <Typography textAlign='center' gutterBottom color='textPrimary' className='typography-cursorDefault'>2022 - 2022</Typography>
                    <Typography textAlign='center' color='textPrimary' className='typography-cursorDefault'>{language == 'true' ? texts[9] : texts[27]}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography textAlign='center' gutterBottom variant='h5' color='secondary' className='typography-cursorDefault'>{language == 'true' ? texts[10] : texts[28]}</Typography>
                    <Typography textAlign='center' gutterBottom color='textPrimary' className='typography-cursorDefault'>KOGNO</Typography>
                    <Typography textAlign='center' gutterBottom color='textPrimary' className='typography-cursorDefault'>2022 - Atualmente</Typography>
                    <Typography textAlign='center' color='textPrimary' className='typography-cursorDefault'>{language == 'true' ? texts[11] : texts[29]}</Typography>
                </Grid>
            </Grid>
            <Grid container width='100vw' px={2} py={5} display='flex' justifyContent='center' alignItems='center'>
            <Typography textAlign='center' mb={5} color='primary' variant='h4' className='typography-cursorDefault'>{language == 'true' ? texts[38] : texts[39]}</Typography>
                <Grid item pb={3} xs={12}>
                    <Typography textAlign='center' gutterBottom variant='h5' color='secondary' className='typography-cursorDefault'>{language == 'true' ? texts[12] : texts[30]}</Typography>
                    <Typography textAlign='center' gutterBottom color='textPrimary' className='typography-cursorDefault'>Colégio Joseense</Typography>
                    <Typography textAlign='center' gutterBottom color='textPrimary' className='typography-cursorDefault'>2013 - 2015</Typography>
                    <Typography textAlign='center' color='textPrimary' className='typography-cursorDefault'>{language == 'true' ? texts[13] : texts[31]}</Typography>
                </Grid>
                <Divider orientation='vertical' flexItem />
                <Grid item pb={3} xs={12}>
                    <Typography textAlign='center' gutterBottom variant='h5' color='secondary' className='typography-cursorDefault'>{language == 'true' ? texts[14] : texts[32]}</Typography>
                    <Typography textAlign='center' gutterBottom color='textPrimary' className='typography-cursorDefault'>Universidade de São Paulo</Typography>
                    <Typography textAlign='center' gutterBottom color='textPrimary' className='typography-cursorDefault'>2017 - Incompleto</Typography>
                    <Typography textAlign='center' color='textPrimary' className='typography-cursorDefault'>{language == 'true' ? texts[15] : texts[33]}</Typography>
                </Grid>
                <Divider orientation='vertical' flexItem />
                <Grid item xs={12}>
                    <Typography textAlign='center' gutterBottom variant='h5' color='secondary' className='typography-cursorDefault'>{language == 'true' ? texts[16] : texts[34]}</Typography>
                    <Typography textAlign='center' gutterBottom color='textPrimary' className='typography-cursorDefault'>Generation Brasil</Typography>
                    <Typography textAlign='center' gutterBottom color='textPrimary' className='typography-cursorDefault'>2023 - 2023</Typography>
                    <Typography textAlign='center' color='textPrimary' className='typography-cursorDefault'>{language == 'true' ? texts[17] : texts[35]}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Experiencias
