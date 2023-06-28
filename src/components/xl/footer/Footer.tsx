import { Link } from "react-router-dom";
import { Box, Grid, Paper, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import PublicIcon from '@mui/icons-material/Public';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <>
            <Box sx={{ height: '250px', backgroundColor: '#b3beff' }} display='flex' justifyContent='center' alignItems='center'>
                <Grid container sx={{ height: '150px', width: '80%' }} component={Paper} elevation={9} display='flex' justifyContent='space-between' alignItems='center'>
                    <Grid item xs={8} gap={2} display='flex' justifyContent='space-evenly' alignItems='center'>
                        <Box>
                            <Box display='flex' alignItems='center' gap={1}>
                                <HomeIcon />
                                <Typography className='typography-cursorDefault'>Rua Barbosa Machado, 52</Typography>
                            </Box>
                            <Box display='flex' alignItems='center' gap={1}>
                                <PublicIcon />
                                <Typography className='typography-cursorDefault'>São Paulo, SP - Brasil</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box display='flex' alignItems='center' gap={1}>
                                <MailIcon />
                                <Typography className='typography-cursorDefault'>lais.salesms@gmail.com</Typography>
                            </Box>
                            <Box display='flex' alignItems='center' gap={1}>
                                <CallIcon />
                                <Typography className='typography-cursorDefault'>+55 (12) 98282-4935</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4} display='flex' justifyContent='space-evenly' alignItems='center'>
                        <Link to='https://www.instagram.com/skyeles/' target='_blank' className='link-noDecoration'>
                            <InstagramIcon fontSize='large' />
                        </Link>
                        <Link to='https://twitter.com/SkyeL3s' target='_blank' className='link-noDecoration'>
                            <TwitterIcon fontSize='large' />
                        </Link>
                        <Link to='https://www.linkedin.com/in/lsalesxavier/' target='_blank' className='link-noDecoration'>
                            <LinkedInIcon fontSize='large' />
                        </Link>
                        <Link to='https://github.com/laiszz' target='_blank' className='link-noDecoration'>
                            <GitHubIcon fontSize='large' />
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Footer