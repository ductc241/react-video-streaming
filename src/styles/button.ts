import { Components, Theme } from "@mui/material";

const buttonTheme: Components<Omit<Theme, "components">> = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 30,
        textTransform: "capitalize",
        boxShadow: "none",

        "&:hover": {
          boxShadow: "none",
          backgroundColor: "#c44d46"
        }
      },
    },

    variants: [
      {
        props: { size: "large" },
        style: {
          padding: "15px 30px",
        }
      },
      {
        props: { size: "medium" },
        style: {
          padding: "10px 20px",
        }
      }
    ]
  }
}

export default buttonTheme