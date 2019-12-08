import { createMuiTheme } from '@material-ui/core/styles';

const mainColor = 'rgba(32,130,161,1)';
const lightColor = 'rgba(93,203,230,1)';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: mainColor,
      light: lightColor,
    },
    background: {
      default: `linear-gradient(180deg, ${mainColor} 40%, ${lightColor} 100%)`,
    },
  },
  typography: {
    fontSize: 12,
  },
});

export default theme;
