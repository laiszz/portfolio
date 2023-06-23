import useLocalStorage from "react-use-localstorage"
import { Link } from "react-router-dom"
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import AlgebraLinear from '../../images/AlgebraLinear.jpg'
import PetFood from '../../images/PetFood.png'
import Gecko from '../../images/Gecko.png'
import Simulacoes from '../../images/Simulacoes.jpg'

function Trabalhos() {
    const texts = [
        'Recent Works',
        'Linear Algebra',
        'Simulations',
        'Trabalhos Recentes',
        'Álgebra Linear',
        'Simulações'
    ]

    const [language, setLanguage] = useLocalStorage('language')

    return (
        <>
            <Box my={15} mx={10} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Typography color='textPrimary' variant='h2' className='typography-cursorDefault'>{language == 'true' ? texts[0] : texts[3]}</Typography>

                <Grid container spacing={2} mt={5}>
                    <Grid item xs={3}>
                        <Card square elevation={5}>
                            <Link to='https://github.com/laiszz/AlgebraLinear' className='link-noDecoration' target="_blank">
                                <CardActionArea>
                                    <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                                        <Typography textAlign='center' variant="h4" color='secondary'>
                                            {language == 'true' ? texts[1] : texts[4]}
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        sx={{ height: 700 }}
                                        image={AlgebraLinear}
                                        title={language == 'true' ? texts[1] : texts[4]}
                                    />
                                </CardActionArea>
                            </Link>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card square elevation={5}>
                            <Link to='https://github.com/projetoPetFood/petfood' className='link-noDecoration' target="_blank">
                                <CardActionArea>
                                    <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                                        <Typography textAlign='center' variant="h4" color='secondary'>
                                            PetFood
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        sx={{ height: 700 }}
                                        image={PetFood}
                                        title="PetFood"
                                    />
                                </CardActionArea>
                            </Link>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card square elevation={5}>
                            <Link to='https://github.com/ProjetoGecko' className='link-noDecoration' target="_blank">
                                <CardActionArea>
                                    <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                                        <Typography textAlign='center' variant="h4" color='secondary'>
                                            Gecko
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        sx={{ height: 700 }}
                                        image={Gecko}
                                        title="Gecko"
                                    />
                                </CardActionArea>
                            </Link>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card square elevation={5}>
                            <Link to='https://github.com/laiszz/VPython' className='link-noDecoration' target="_blank">
                                <CardActionArea>
                                    <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                                        <Typography textAlign='center' variant="h4" color='secondary'>
                                            {language == 'true' ? texts[2] : texts[5]}
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        sx={{ height: 700 }}
                                        image={Simulacoes}
                                        title={language == 'true' ? texts[2] : texts[5]}
                                    />
                                </CardActionArea>
                            </Link>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Trabalhos