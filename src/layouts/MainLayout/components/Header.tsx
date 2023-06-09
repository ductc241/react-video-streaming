import {
  Toolbar,
  AppBar,
  TextField,
  InputAdornment,
  IconButton,
  Box,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <AppBar
      sx={{ pl: "270px", backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar
        sx={{ minHeight: { xs: "100px" }, justifyContent: "space-between" }}
        style={{ padding: "0 32px" }}
      >
        <IconButton size="large" edge="start">
          <MenuIcon />
        </IconButton>

        <TextField
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            width: { xs: "60%", md: "45%" },
            backgroundColor: "white",

            "& .MuiOutlinedInput-root": {
              pl: 4,
              borderRadius: "45px",
            },

            "& .MuiInputBase-input": {
              padding: "15px 10px",
            },
          }}
          placeholder="Search everything..."
          hiddenLabel
        />

        <Avatar alt="image profile" src="https://picsum.photos/200" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
