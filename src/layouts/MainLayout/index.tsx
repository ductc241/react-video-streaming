import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import AppDrawer from "./components/Drawer";
import Header from "./components/Header";
import { headerHeight } from "../../config/layout";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <AppDrawer />
      <Box
        component="main"
        sx={{
          mt: headerHeight,
          px: 4,
          py: 3,
          width: "calc(100vw - 270px)",
          overflow: "hidden",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
