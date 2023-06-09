import { Components, Theme } from "@mui/material";

const buttonTheme: Components<Omit<Theme, "components">> = {
  MuiTextField: {
    styleOverrides: {
      root: {},
    },
  },
};

export default buttonTheme;
