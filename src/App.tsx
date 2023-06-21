import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./modules/Home";
import VideoDetail from "./modules/Video";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="react-video-streaming" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="video/:id" element={<VideoDetail />} />
          <Route path="shorts" element={"Shorst"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
