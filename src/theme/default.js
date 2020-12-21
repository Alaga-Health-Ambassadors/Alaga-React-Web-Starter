import { createMuiTheme } from '@material-ui/core/styles';
import { fontFamily } from '../utils/constants.utils';

const theme = createMuiTheme({
    typography: {
        button: {
            //textTransform: 'none',
            fontWeight: 'normal'
        },
        h1:{
            fontFamily: fontFamily,
            fontSize:"6rem",
            fontWeight:300,
            lineHeight:1.167,
            letterSpacing:"-0.01562em"
        },
        h2:{
            fontFamily: fontFamily,
            fontSize:"3.75rem",
            fontWeight:300,
            lineHeight:1.2,
            letterSpacing:"-0.00833em"
        },
        h3:{
            fontFamily: fontFamily,
            fontSize:"3rem",
            fontWeight:400,
            lineHeight:1.167,
            letterSpacing:"0em"
        },
        h4:{
            fontFamily: fontFamily,
            fontSize:"2.125rem",
            fontWeight:400,
            lineHeight:1.235,
            letterSpacing:"0.00735em"
        },
        h5:{
            fontFamily: fontFamily,
            fontSize:"1.5rem",
            fontWeight:400,
            lineHeight:1.334,
            letterSpacing:"0em"
        },
        h6:{
            fontFamily: fontFamily,
            fontSize:"1.25rem",
            fontWeight:500,
            lineHeight:1.6,
            letterSpacing:"0.0075em"
        },
        body1:{
            fontFamily: fontFamily,
            fontSize:"1rem",
            fontWeight:400,
            lineHeight:1.5,
            letterSpacing:"0.00938em"
        },
        body2:{
            fontFamily: fontFamily,
            fontSize:"0.874rem",
            fontWeight:400,
            lineHeight:1.43,
            letterSpacing:"0.01071em"
        }
    },
    palette: {
        type: 'light',
        primary: {
            main:'#2698fb',
            dark: '#2698fb',
        },
        secondary: {
            main: '#f50057' 
        },
        textPrimary: {
            main: '#2a2a2a'
        },
        textSecondary: {
            main: '#444444'
        },
        contrastText: {
            main: '#f7f6f6'
        },
        error: {
            main:'#ca0909' 
        },
        grass: {
            main: '#27f199'
        },
        sand:{
            main:'#F4DECB'
        },
        shell:{
            main:'#F8EEE7'
        },
        status:{
            danger:'#b71c1c'
        },
        light:{
            main:'#FFFFFF'
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});

export default theme;