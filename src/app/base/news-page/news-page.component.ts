import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../api/api.service";
import {News} from "./interfaces/news.interface";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  public newsArr!: News[]

  constructor(
    private newsApi: ApiService
  ) {}

  ngOnInit(): void {
    this.newsApi.getNews().subscribe(
      data => {
        this.newsArr = data.articles
      }
    )
  }

}
