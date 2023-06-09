import { INavItems } from "../../../../config/layout";

import { Divider, List, Typography } from "@mui/material";
import NavItem from "./NavItem";
import { useLocation } from "react-router-dom";

const NavGroup = ({ data }: { data: INavItems }) => {
  const { pathname } = useLocation();

  return (
    <List
      subheader={
        <Typography sx={{ px: 4, mb: 1.5, fontSize: 14, fontWeight: 600 }}>
          {data.title}
        </Typography>
      }
      sx={{ mb: 2 }}
    >
      {data.items.map((item, index) => (
        <NavItem data={item} key={index} selected={pathname === item.url} />
      ))}

      <Divider sx={{ width: "76%", mx: "auto", mt: 3 }} />
    </List>
  );
};

export default NavGroup;
