import {News} from "./news.interface";

export interface NewsApiResponse {
  articles: News[],
  status: string,
  totalResults: number
}

