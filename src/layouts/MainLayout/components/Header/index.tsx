import { Toolbar, AppBar, IconButton, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "./SearchBar";
import { headerHeight, drawerWidth } from "../../../../config/layout";

const Header = () => {
  return (
    <AppBar
      sx={{ pl: drawerWidth, backgroundColor: "white", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: headerHeight },
          justifyContent: "space-between",
        }}
        style={{ padding: "0 32px" }}
      >
        <IconButton size="large" edge="start">
          <MenuIcon />
        </IconButton>

        <SearchBar />

        <Avatar alt="image profile" src="https://picsum.photos/200" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
