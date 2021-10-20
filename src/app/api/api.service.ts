import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {NewsApiResponse} from "../base/news-page/interfaces/news-api-response.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public newsApiBaseUrl: string = 'https://newsapi.org/v2/';

  constructor(
    private http: HttpClient
  ) {}

  public getNews(): Observable<NewsApiResponse> {
    return this.http.get<NewsApiResponse>(`${this.newsApiBaseUrl}top-headlines?country=us&apiKey=${environment.newsApiKey}`)
  }
}
