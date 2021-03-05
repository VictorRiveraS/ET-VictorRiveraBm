import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsSinSesionComponent } from './pages/news-sin-sesion/news-sin-sesion.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [{ path: 'home', component: NewsSinSesionComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'news', component: NewsComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
