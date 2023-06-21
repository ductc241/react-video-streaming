import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";

import ActionBar from "./ActionBar";
import VideoDescribe from "./VideoDescribe";
import { IVideo } from "../../interfaces/video";

const VideoContent = ({ data }: { data: IVideo }) => {
  const params = useParams();

  return (
    <>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${params.id}`}
        width="100%"
        height="660px"
        controls
      />

      <Typography variant="h6" component="h5" sx={{ my: 1 }}>
        {data.snippet.title}
      </Typography>

      <ActionBar />
      <VideoDescribe />
    </>
  );
};

export default VideoContent;
