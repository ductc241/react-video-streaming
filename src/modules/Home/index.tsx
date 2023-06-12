import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import CategoryChipList from "./CategoryChipList";
import VideoCart from "../../components/VideoCart";
import videoServices from "../../api/video";
import { IVideo } from "../../interfaces/video";

const Home = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const { data } = await videoServices.getVideos();
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getVideos();
  }, []);

  return (
    <>
      <CategoryChipList />

      <Grid container spacing={3}>
        {videos.map((item, index) => (
          <Grid item xs={3} key={index}>
            <VideoCart direction="column" data={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
