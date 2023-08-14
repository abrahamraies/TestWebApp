import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'https://newsapi.org/v2/everything?q=csharp&language=en&from=2023-06-27&sortBy=publishedAt&apiKey=15da07e608df4db2ab2a0600406463d1';

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
