import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap,
  Typography,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useNavigate } from "react-router-dom";

interface INavItem {
  data: {
    name: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    url: string;
  };
  selected: boolean;
}

const NavItem = ({ data, selected }: INavItem) => {
  const navigate = useNavigate();

  return (
    <ListItem disablePadding onClick={() => navigate(data.url)}>
      <ListItemButton sx={{ px: 4 }} selected={selected}>
        <ListItemIcon sx={{ minWidth: 40 }}>
          <data.icon
            sx={{
              ...(selected && {
                fill: "#ad241b",
              }),
              ...(!selected && {
                fill: "#8f8f8f",
              }),
            }}
          />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              sx={{
                fontSize: 15,
                ...(selected && {
                  color: "#211e1f",
                  fontWeight: 600,
                }),
                ...(!selected && {
                  color: "#8f8f8f",
                }),
              }}
            >
              {data.name}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

export default NavItem;
