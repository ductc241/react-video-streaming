import { createTheme } from "@mui/material/styles";
import buttonTheme from "./button";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#ad241b"
    },
    text: {
      primary: "#211e1f",
      secondary: "#8f8f8f"
    }
  },

  typography: {
    fontFamily: "'Poppins', sans-serif",
  },

  components: {
    MuiButton: buttonTheme.MuiButton
  }
})

export default customTheme