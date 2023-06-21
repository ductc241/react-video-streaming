import { Box, Drawer, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NavGroup from "./NavGroup";
import { drawerWidth, headerHeight, navItems } from "../../../../config/layout";

const AppDrawer = () => {
  const theme = useTheme();

  return (
    <Box component="nav">
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxShadow: "none",
            overflow: "hidden",
          },
          "& .MuiModal-backdrop": {
            backgroundColor: "transparent",
          },

          "&:hover .MuiDrawer-paper": {
            overflow: "auto",

            "&::-webkit-scrollbar": {
              width: "5px",
            },

            "&::-webkit-scrollbar-track-piece": {
              backgroundColor: "white",
            },

            "&::-webkit-scrollbar-track-piece:start": {
              marginTop: "80px",
            },

            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#9f9f9f",
            },
          },
        }}
      >
        <Toolbar
          sx={{ display: "flex", minHeight: { xs: headerHeight } }}
          style={{ padding: "0 32px" }}
        >
          <Typography variant="h5" fontWeight="600">
            Clip.
          </Typography>
          <Typography
            variant="h5"
            fontWeight="600"
            color={theme.palette.primary.main}
          >
            Stream
          </Typography>
        </Toolbar>

        <Box sx={{ mt: 3 }}>
          {navItems.map((item, index) => (
            <NavGroup data={item} key={index} />
          ))}
        </Box>
      </Drawer>
    </Box>
  );
};

export default AppDrawer;
