import {
  Stack,
  Avatar,
  Typography,
  Box,
  CardContent,
  CardMedia,
  styled,
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

  ...(direction === "column"
    ? {
        flexDirection: "column",
      }
    : {
        flexDirection: "row",
      }),
}));

const VideoCart = ({ direction, data }: IVideoCard) => {
  return (
    <CartCustom sx={{ boxShadow: "none" }} direction={direction}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={data.snippet.thumbnails.medium.url}
        sx={{
          height: data.snippet.thumbnails.medium.height,
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
          <Avatar alt="image profile" src="https://picsum.photos/200" />
          <Box>
            <Link
              to={`video/${data.id.videoId}`}
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
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
                {data.snippet.title}
              </Typography>
            </Link>
            <Typography variant="body2" color="text.secondary">
              {data.snippet.channelTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.snippet.publishTime}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </CartCustom>
  );
};

export default VideoCart;
