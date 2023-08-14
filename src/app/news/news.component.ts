import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsData: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews().subscribe(
      (data) => {
        this.newsData = data.articles.slice(0, 5);
        console.log(this.newsData);
      },
      (error) => {
        console.log('Error al obtener noticias:', error);
      }
    );
  }
}
