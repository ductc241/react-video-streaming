import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Header from "./components/Header";
import AppDrawer from "./components/Drawer";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <AppDrawer />
      <Box
        component="main"
        sx={{
          mt: "100px",
          px: 4,
          maxWidth: "calc(100vw - 270px)",
          overflow: "hidden",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
