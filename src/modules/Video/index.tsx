import Grid from "@mui/material/Grid";
import ReactPlayer from "react-player";
import VideoCart from "../../components/VideoCart";
import { useParams } from "react-router-dom";
import VideoContent from "./VideoContent";
import { IVideo } from "../../interfaces/video";

const videoData = {
  id: {
    kind: "youtube#video",
    videoId: "ukHK1GVyr0I",
  },
  snippet: {
    publishedAt: "2023-05-13T03:00:09Z",
    channelId: "UCWu91J5KWEj1bQhCBuGeJxw",
    title: "Đen - Nấu ăn cho em ft. PiaLinh (M/V)",
    description:
      "Đen - Nấu ăn cho em ft. PiaLinh Download/Stream: https://Denvau.lnk.to/NACE Đạo diễn: Phương Vũ Music Produ",
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/ukHK1GVyr0I/default.jpg",
        width: 120,
        height: 90,
      },
      medium: {
        url: "https://i.ytimg.com/vi/ukHK1GVyr0I/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      high: {
        url: "https://i.ytimg.com/vi/ukHK1GVyr0I/hqdefault.jpg",
        width: 480,
        height: 360,
      },
    },
    channelTitle: "Đen Vâu Official",
    liveBroadcastContent: "none",
    publishTime: "2023-05-13T03:00:09Z",
  },
};

const VideoDetail = () => {
  const params = useParams();

  return (
    <Grid container spacing={2.5}>
      <Grid item xs={8.5}>
        <VideoContent data={videoData} />
      </Grid>
      <Grid item xs={3.5}>
        <VideoCart data={videoData} direction="row" />
      </Grid>
    </Grid>
  );
};

export default VideoDetail;
