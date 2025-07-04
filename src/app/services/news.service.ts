import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = '31b82cf2f2634dfda492bc9b2b9103dd';
  private apiUrl = 'https://newsapi.org/v2/top-headlines?country=us';
  constructor(private http: HttpClient) { }
  getNews(category:string =""){
    return this.http.get(`${this.apiUrl}&category=${category}&apiKey=${this.apiKey}`).pipe(map((res: any)=>res.articles));
    
}
}
