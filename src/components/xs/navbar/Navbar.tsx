import useLocalStorage from "react-use-localstorage"
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import FotoLogo from '../../../images/foto-icon.png'
import AmericanFlag from '../../../images/en-flag.png'
import BrazilianFlag from '../../../images/pt-flag.png'
import './Navbar.css'

function Navbar() {
    const texts = [
        'EN',
        'PT',
        'Welcome to my portfolio!',
        'Bem vinde ao meu portfólio!'
    ]

    const [language, setLanguage] = useLocalStorage('language')

    function changeLanguage() {
        if (language == 'true') {
            setLanguage('false')
        }
        else if (language == 'false') {
            setLanguage('true')
        }
        else {
            setLanguage('true')
        }

        window.location.reload()
    }

    return (
        <>
            <AppBar position='static' sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                <Toolbar className='toolbar'>
                    <Box pl={2} display='flex' justifyContent='center' alignItems='center'>
                        <img src={FotoLogo} width={50} />
                    </Box>
                    <Box pr={2}>
                        <Button type='submit' className='toolbar-language' variant='text' onClick={() => changeLanguage()}>
                            <img src={language == 'true' ? AmericanFlag : BrazilianFlag} width='30px' />
                            <Typography>{language == 'true' ? texts[0] : texts[1]}</Typography>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar