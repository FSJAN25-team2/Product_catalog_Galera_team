import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,    // Mobile
      sm: 640,  // Tablet
      md: 900,  // Default MUI breakpoint (not used)
      lg: 1200, // Desktop
      xl: 1536  // Default MUI breakpoint (not used)
    },
  },
  palette: {
    primary: {
      main: '#216CFF',
      light: '#005BFF',
      dark: '#0049D9',
    },
    secondary: {
      main: '#89939A',
      light: '#B4BDC4',
      dark: '#313237',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F5',
    },
    text: {
      primary: '#0F0F11',
      secondary: '#89939A',
    },
    divider: '#E2E6E9',
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontSize: '24px',
      fontWeight: 800,
      lineHeight: '32px',
      letterSpacing: '-0.01em',
    },
    h2: {
      fontSize: '18px',
      fontWeight: 800,
      lineHeight: '24px',
    },
    h3: {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '21px',
    },
    h4: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '20px',
    },
    subtitle1: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '21px',
      color: '#0F0F11',
    },
    subtitle2: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '15px',
      color: '#89939A',
    },
    body1: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '15px',
      color: '#89939A',
    },
    body2: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '15px',
      color: '#89939A',
    },
    button: {
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '21px',
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: '21px',
          padding: '8px 16px',
        },
        contained: {
          backgroundColor: '#216CFF',
          '&:hover': {
            backgroundColor: '#005BFF',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          border: '1px solid #E2E6E9',
          boxShadow: 'none',
          transition: 'all 0.3s',
          '&:hover': {
            borderColor: '#0F0F11',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1136px',
          padding: '0 16px',
          '@media (min-width: 1200px)': {
            maxWidth: '1136px',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat, sans-serif',
        },
        h1: {
          fontWeight: 800,
        },
        h2: {
          fontWeight: 800,
        },
        h3: {
          fontWeight: 700,
        },
        h4: {
          fontWeight: 600,
        },
        subtitle1: {
          fontWeight: 600,
        },
        subtitle2: {
          fontWeight: 500,
        },
        body1: {
          fontWeight: 500,
        },
        body2: {
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme; 