import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import AnimationIcon from "@mui/icons-material/Animation";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

const navList = [
  {
    title: "Home",
    icon: <ExploreOutlinedIcon />,
  },
  {
    title: "Shorts",
    icon: <AnimationIcon />,
  },
  {
    title: "Subscriptions",
    icon: <PeopleAltOutlinedIcon />,
  },
];

const SideBar = () => {
  const theme = useTheme();

  return (
    <Box component="nav">
      <Drawer
        variant="permanent"
        sx={{
          width: "270px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "270px",
            boxShadow: "none",
          },
          "& .MuiModal-backdrop": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Toolbar sx={{ display: "flex", mb: 2 }} style={{ padding: "0 32px" }}>
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

        <Box sx={{ pb: 5 }}>
          <List
            subheader={
              <Typography
                sx={{ px: 4, mb: 1.5, fontSize: "14px", fontWeight: "600" }}
              >
                News Feed
              </Typography>
            }
          >
            {navList.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton sx={{ px: 4 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography color="#939393">{item.title}</Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideBar;
