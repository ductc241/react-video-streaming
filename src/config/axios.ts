import axios from "axios";

const instance = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
})

export default instance