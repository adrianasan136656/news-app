import { Routes } from '@angular/router';
import { NewsListComponent } from './pages/news-list/news-list.component';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';

/* export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
*/

export const routes: Routes =[
  {path: '', component:NewsListComponent},
  {path: ':category/:id', component: NewsDetailComponent}
];
