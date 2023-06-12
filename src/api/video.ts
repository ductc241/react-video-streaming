import qs from "qs";
import appConfig from "../config/app"
import instance from "../config/axios";
import { AxiosResponse } from "axios";
import { IVideoResponse } from "../interfaces/video";

const videoServices = {
  getVideos: (q?: string, page?: string): Promise<AxiosResponse<IVideoResponse, any>> => {
    const queryObj = {
      q,
      part: "snippet",
      type: "video",
      maxResults: 20,
      page,
      regionCode: appConfig.country,
      relevanceLanguage: appConfig.language,
      key: import.meta.env.VITE_GOOGLE_API_KEY
    }
    const queryString = qs.stringify(queryObj)

    return instance.get(`search?${queryString}`)
  }
}

export default videoServices