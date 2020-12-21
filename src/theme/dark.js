import {createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
        main:'#2698fb'
    },
    secondary: {
        main:'#673ab7' 
    },
    stable: {
        main: '#c2c2c2',
        dark: '#c2c2c2',
    },
    error: {
        main:'#ca0909' 
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
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default theme;