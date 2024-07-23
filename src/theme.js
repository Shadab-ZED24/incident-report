// src/theme.js
import { createTheme } from '@mui/material/styles';
import { blue, grey, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7367F0', // Vuexy primary color
    },
    secondary: {
      main: '#28C76F', // Vuexy secondary color
    },
    background: {
      default: '#F8F8F8', // Vuexy background color
    },
    error: {
      main: red[500],
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
  },
});

export default theme;
