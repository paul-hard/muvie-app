import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/main-page/home/home.component';
import { MuviesComponent } from './modules/main-page/muvies/muvies.component';
import { SuggestMeComponent } from './modules/main-page/suggest-me/suggest-me.component';
import { TvShowsComponent } from './modules/main-page/tv-shows/tv-shows.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'suggest-me',
    component: SuggestMeComponent
  },
  {
    path: 'tv-shows',
    component: TvShowsComponent
  },
  {
    path: 'muvies',
    component: MuviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
