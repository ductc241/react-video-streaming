export default interface ICategoryResponse {
  kind: string,
  etag: string,
  items: ICategoryItem[]
}

export interface ICategoryItem {
  kind: string,
  etag: string,
  id: string,
  snippet: {
    title: string,
    assignable: boolean,
    channelId: string
  }
}