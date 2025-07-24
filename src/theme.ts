import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom?: Palette['primary'];
  }
  interface PaletteOptions {
    custom?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#24272c',
      contrastText: '#white',
    },
    secondary: {
      main: '#e90d40',
      contrastText: '#ffffff'

    },
    custom: {
      main: '#4d5154',
      contrastText: '#fff',
    },
    background: {
        default: '#24272c',
        paper: '#4d5154',
        },
  },
});

export default theme;
