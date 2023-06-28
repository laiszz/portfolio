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
            <Box mt={5} sx={{ height: '250px', backgroundColor: '#b3beff' }} display='flex' justifyContent='center' alignItems='center'>
                <Grid container py={2} sx={{ height: '175px', width: '100%' }} component={Paper} elevation={9} display='flex' justifyContent='space-between' alignItems='center'>
                    <Grid item xs={12} display='flex' justifyContent='space-evenly' alignItems='center'>
                        <Box display='flex' justifyContent='center' alignItems='center' gap={1}>
                            <MailIcon />
                            <Typography className='typography-cursorDefault'>lais.salesms@gmail.com</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} display='flex' justifyContent='space-evenly' alignItems='center'>
                        <Box display='flex' justifyContent='center' alignItems='center' gap={1}>
                            <CallIcon />
                            <Typography className='typography-cursorDefault'>+55 (12) 98282-4935</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} display='flex' justifyContent='space-evenly' alignItems='center'>
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