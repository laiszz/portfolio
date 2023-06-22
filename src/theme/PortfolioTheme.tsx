import { createTheme } from "@mui/material"

export const PortfolioTheme = createTheme({
    palette: {
        primary: {
            main: '#60308c',
            contrastText: '#e6f2ff'
        },
        secondary: {
            main: '#fb9649',
            contrastText: '#e6f2ff'
        },
        background: {
            default: '#e6f2ff',
            paper: '#ccdcff'
        },
        text: {
            primary: '#431259',
            secondary: '#e6f2ff'
        },
        error: {
            main: '#f992ad',
            contrastText: '#e6f2ff'
        },
        info: {
            main: '#e6f2ff',
            contrastText: '#431259'
        }
    },
    typography: {
        fontFamily: 'Poppins'
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 800,
            lg: 1000,
            xl: 1300,
        }
    }
})