import { Button, createTheme } from "@mui/material";

export const defaultTheme = createTheme({
    typography: {
        fontWeightBold: 700,
        fontFamily: 'roboto',
        h2: {
            fontSize: 30,
        },
        h3: {
            fontSize: 20,
            fontWeight: 700
        },
        h4: {
            fontSize: 16
        },
        body1: {
            fontSize: 14
        },
        body2: {
            fontSize: 12
        },
        button: {
            textTransform: 'none'
        }
    },
    palette: {
        success: {
            main: '#1DA304'
        }
    }
})