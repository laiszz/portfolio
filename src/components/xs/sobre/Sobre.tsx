import useLocalStorage from "react-use-localstorage"
import { Box, Button, Paper, Typography } from "@mui/material"
import Teacher from '../../../images/teacher.png'
import Programmer from '../../../images/programmer.png'
import MailIcon from '@mui/icons-material/Mail';
import DescriptionIcon from '@mui/icons-material/Description';
import Pdf from '../../../assets/Currículo Laís.pdf'

function Sobre() {
    const texts = [
        'About Me',
        'Sobre Mim',
        'Hi! I\'m Laís, and since I was a little I\'ve been very curious and love learning new things. I started my trajectory back in 2013, when I iniciated in the Fullstack development area.',
        'Oi! Sou a Laís, e desde pequena sou muito curiosa e amo aprender coisas novas. Comecei minha trajetória em 2013, quando iniciei na área de desenvolvimento Fullstack.',
        'Today, I\'m a private teacher passionate about education, with over 3 years of experience in the subjects of Math and Physics, teaching students of every age!',
        'Hoje, sou uma professora particular apaixonada pelo ensino, com mais de 3 anos de experiência nas áreas de Física e Matemática, e dou aula para todas as idades!',
        'Hire Me',
        'Me Contrate',
        'Download my CV',
        'Baixe meu CV'
    ]

    const [language, setLanguage] = useLocalStorage('language')

    return (
        <>
            <Box mt='-100px' display='flex' justifyContent='center'>
                <Box px={5} py={10} component={Paper} elevation={9} width='95%' height='650px' display='flex' justifyContent='center' alignItems='center'>
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Typography textAlign='center' color='secondary' className='typography-cursorDefault' mb={3} variant='h4'>{language == 'true' ? texts[0] : texts[1]}</Typography>
                        <Typography textAlign='center' className='typography-cursorDefault' mb={1}>{language == 'true' ? texts[2] : texts[3]}</Typography>
                        <Typography textAlign='center' className='typography-cursorDefault'>{language == 'true' ? texts[4] : texts[5]}</Typography>
                        <Box mt={5} width='100%' display='flex' justifyContent='space-between'>
                            <a style={{ width: '50%' }} href='mailto:lais.salesms@gmail.com'>
                                <Button sx={{ height: '50px' }} fullWidth variant='text' className='sobre-botoes'>
                                    <MailIcon />
                                </Button>
                            </a>
                            <a style={{ width: '50%' }} href={Pdf} download='Currículo Laís Sales'>
                                <Button sx={{ height: '50px' }} fullWidth variant='text' className='sobre-botoes'>
                                    <DescriptionIcon />
                                </Button>
                            </a>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Sobre