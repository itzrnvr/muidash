import { createTheme } from '@mui/material/styles';

const dashBoardTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                select: {
                    '&:before': {
                        color: 'white',
                        borderColor: 'white',
                    },
                    '&:after': {
                        color: 'white',
                        borderColor: 'white',
                    },
                    '&:not(.Mui-disabled):hover::before': {
                        color: 'white',
                        borderColor: 'white',
                    },
                },
                icon: {
                    fill: 'white',
                },
                root: {
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    borderRadius: 8.5,
                    textTransform: 'none',
                    '&.MuiButton-contained': {
                        backgroundColor: '#b287ed',
                        '&:hover': {
                            backgroundColor: '#006db3'
                        },
                    },
                    '&.MuiButton-outlined': {
                        color: "#fff",
                        borderColor: 'rgba(255, 255, 255, 0.7)',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)'
                        },
                    },
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: '1.7rem',
                },
            },
        },
    },
    palette: {
        white: {
            main: '#fff',
        },
    },
    typography: {
        h1: {
            fontSize: '1.6rem',
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '0.5px',
            textTransform: 'capitalize',
        },
    },
  });

export default dashBoardTheme