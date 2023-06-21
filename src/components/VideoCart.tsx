import {
  Stack,
  Avatar,
  Typography,
  Box,
  CardContent,
  CardMedia,
  styled,
  Tooltip,
} from "@mui/material";
import Card, { CardProps } from "@mui/material/Card";

import { IVideo } from "../interfaces/video";
import { Link } from "react-router-dom";

interface ICardCustom extends CardProps {
  direction: "column" | "row";
}

interface IVideoCard {
  direction: "column" | "row";
  data: IVideo;
}

const CartCustom = styled(Card, {
  shouldForwardProp: prop => prop !== "direction",
})<ICardCustom>(({ direction }) => ({
  display: "flex",

  "& .MuiCardContent-root": {
    padding: 0,
  },

  ...(direction === "column" && {
    flexDirection: "column",
    rowGap: 15,
  }),

  ...(direction === "row" && {
    flexDirection: "row",
    columnGap: 10,
  }),
}));

const VideoCart = ({ direction, data }: IVideoCard) => {
  const { id, snippet } = data;

  return (
    <CartCustom sx={{ boxShadow: "none" }} direction={direction}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={snippet.thumbnails.medium.url}
        sx={{
          ...(direction === "column" && {
            height: snippet.thumbnails.medium.height,
          }),

          ...(direction === "row" && {
            width: 190,
            height: 120,
          }),

          borderRadius: 4,
        }}
      />
      <CardContent
        sx={{
          px: 0,
          "&.MuiCardContent-root:last-child": {
            pb: 0,
          },
        }}
      >
        <Stack direction="row" gap={2}>
          {direction === "column" && (
            <Avatar alt="image profile" src="https://picsum.photos/200" />
          )}
          <Box>
            <Link
              to={`video/${id.videoId}`}
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              <Tooltip title={snippet.title} placement="bottom-start">
                <Typography
                  gutterBottom
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "2",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  {snippet.title}
                </Typography>
              </Tooltip>
            </Link>
            <Typography variant="body2" color="text.secondary">
              {snippet.channelTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {snippet.publishTime}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </CartCustom>
  );
};

export default VideoCart;
