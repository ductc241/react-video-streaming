import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./components/Header";
import AppDrawer from "./components/Drawer";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <AppDrawer />
      <Box component="main" sx={{ flexGrow: 1, px: 4, mt: "100px" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
