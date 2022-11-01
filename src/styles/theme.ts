import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  typography: {
    h1: {
      fontSize: "2rem",
      "@media (min-width: 768px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width: 992px)": {
        fontSize: "3.2rem",
      }
    }
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
