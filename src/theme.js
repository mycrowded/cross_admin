import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

    
 export const theme = createTheme({
    palette: {
        primary: {main: "#b43f3f"},
        secondary: {main: "#b43f3f"},
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Arial',
            'sans-serif',
        ].join(','),
    },
    overrides: {
        MuiButton: { // override the styles of all instances of this component
            root: { // Name of the rule
                color: 'white', // Some CSS
            },
        },
    },
});

