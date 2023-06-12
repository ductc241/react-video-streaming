import { AxiosResponse } from "axios"
import instance from "../config/axios"
import appConfig from "../config/app"
import ICategoryResponse from "../interfaces/category"

const categoryServices = {
  getList: (): Promise<AxiosResponse<ICategoryResponse, any>> => {
    const url = `key=${import.meta.env.VITE_GOOGLE_API_KEY}&hl=${appConfig.language}&regionCode=${appConfig.country}`
    return instance.get(`videoCategories?${url}`);
  }
}

export default categoryServices