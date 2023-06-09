import {createTheme, ThemeProvider, styled} from '@mui/material/styles';

export const dashBoardTheme = createTheme({
    components:{
        MuiButton: {
            styleOverrides: {
                contained: {
                  
                }
            }
        }
    }
})