import { createMuiTheme } from '@material-ui/core/styles';

const mainColor = 'rgba(32,130,161,1)';
const lightColor = 'rgba(93,203,230,1)';
const darkColor = 'rgb(0,65,255)';
const whiteColor = 'rgb(255,255,255)';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: mainColor,
      light: lightColor,
      contrastText: whiteColor,
      dark: darkColor,
    },
    background: {
      default: `linear-gradient(180deg, ${mainColor} 40%, ${lightColor} 100%)`,
    },
  },
  border: {
    button: `2px solid ${whiteColor}`,
  },
  typography: {
    fontSize: 12,
  },
});

export default theme;
