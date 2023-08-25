import {createTheme} from "@mui/material";
import {red} from "@mui/material/colors";

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: "#12416F",
    },
    secondary: {
      main: "#1DBDCD",
    },
    error: {
      main: red.A400,
    },
  },
});
