import useLocalStorage from "react-use-localstorage"
import { Box, Button, Grid, Paper, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import FotoPerfil from '../../../images/foto-perfil.png'
import './Perfil.css'

function Perfil() {
    const texts = [
        'FullStack Developer and Teacher',
        'Desenvolvedora FullStack e Professora',
        'Find out',
        'Descubra'
    ]

    const [language, setLanguage] = useLocalStorage('language')

    return (
        <>
            <Grid component={Paper} elevation={9} container className='perfil' px={5} display='flex' justifyContent='center' alignItems='center'>
                <Grid container item xs={12}>
                    <Grid item xs={12} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Typography textAlign='center' className='typography-cursorDefault' mb={2} color='textPrimary' variant='h2'>Laís Sales Xavier</Typography>
                        <Typography textAlign='center' className='typography-cursorDefault' mb={10} color='textPrimary' variant='h6'>{language == 'true' ? texts[0] : texts[1]}</Typography>
                        <Link to='#' className='link-noDecoration'>
                            <Box className='perfil-botao' display='flex' justifyContent='center' alignItems='center' gap={1}>
                                <Typography variant='body1'>{language == 'true' ? texts[2] : texts[3]}</Typography>
                                <PlayCircleOutlineIcon />
                            </Box>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Perfil