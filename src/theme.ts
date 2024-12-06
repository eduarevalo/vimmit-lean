'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#000000',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#dfc76d',
          contrastText: '#ffffff',
        }
      },
    },
    dark: { 
      palette: {
        primary: {
          main: '#ffffff',
          contrastText: '#000000',
        },
        secondary: {
          main: '#ac986d',
          contrastText: '#000000',
        }
      },
     },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});

export default theme;