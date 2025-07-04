import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class NewsDetailComponent  implements OnInit {
  article: any;

  constructor(private route: ActivatedRoute, private newService:NewsService) {
    const category = this.route.snapshot.paramMap.get('category')!;
    const index = this.route.snapshot.paramMap.get('id')!;
    console.log('ID del artículo', index);
    if (!index){
      throw new Error('No hay un ID de artículo proporcionado');
    } else {
      const indexNumber = parseInt(index, 10);
      this.newService.getNews(category).subscribe((data: any) =>{
        console.log('Datos recibidos:', data);
        this.article = data[indexNumber];
      });
    }
  }

  ngOnInit() {}

}
