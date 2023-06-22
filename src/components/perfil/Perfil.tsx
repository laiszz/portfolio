import useLocalStorage from "react-use-localstorage"
import { Box, Button, Grid, Paper, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import FotoPerfil from '../../images/foto-perfil.png'
import './Perfil.css'

function Perfil() {
    const texts = [
        'FullStack Developer and Teacher',
        'Desenvolvedora FullStack e Professora',
        'Find out more',
        'Descubra mais'
    ]

    const [language, setLanguage] = useLocalStorage('language')

    return (
        <>
            <Grid component={Paper} elevation={9} container className='sobre' px={10} display='flex' justifyContent='center' alignItems='center'>
                <Grid container item xs={12} mt='150px'>
                    <Grid item xs={7} display='flex' flexDirection='column' justifyContent='center' alignItems='start'>
                        <Typography className='typography-cursorDefault' mb={2} color='textPrimary' variant='h1'>Laís Sales Xavier</Typography>
                        <Typography className='typography-cursorDefault' mb={10} color='textPrimary' variant='h6'>{language == 'true' ? texts[0] : texts[1]}</Typography>
                        <Link to='#' className='link-noDecoration'>
                            <Box className='perfil-botao' display='flex' justifyContent='start' alignItems='center' gap={1}>
                                <Typography variant='body1'>{language == 'true' ? texts[2] : texts[3]}</Typography>
                                <PlayCircleOutlineIcon />
                            </Box>
                        </Link>
                    </Grid>
                    <Grid item xs={5} display='flex' justifyContent='center' alignItems='center'>
                        <img src={FotoPerfil} width='90%' />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Perfil