import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import AnimationIcon from "@mui/icons-material/Animation";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export interface INavItems {
  title: string;
  items: {
    name: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    url: string;
  }[];
}

export const navItems: INavItems[] = [
  {
    title: "New Feeds",
    items: [
      {
        name: "Home",
        icon: ExploreOutlinedIcon,
        url: "/",
      },
      {
        name: "Shorts",
        icon: AnimationIcon,
        url: "/shorts",
      },
      {
        name: "Subscriptions",
        icon: PeopleOutlinedIcon,
        url: "/subscriptions",
      },
    ],
  },
  {
    title: "Personal",
    items: [
      {
        name: "Library",
        icon: VideoLibraryOutlinedIcon,
        url: "/library",
      },
      {
        name: "Watched",
        icon: HistoryOutlinedIcon,
        url: "/history",
      },
      {
        name: "Liked videos",
        icon: FavoriteBorderOutlinedIcon,
        url: "/liked",
      },
    ],
  },
];

export const drawerWidth = "270px";
export const headerHeight = "100px";
