import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FormsModule]
})
export class NewsListComponent  implements OnInit {
  articles: any[] =[];
  category = 'technology';

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.loadNews();
  }
  loadNews() {
    this.newsService.getNews(this.category).subscribe(data => {
      this.articles = data;
    })
  }

}
