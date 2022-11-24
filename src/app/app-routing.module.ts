import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './modules/cabinet/add/add.component';
import { CabinetComponent } from './modules/cabinet/cabinet.component';
import { DashboardComponent } from './modules/cabinet/dashboard/dashboard.component';
import { SuggestionsComponent } from './modules/cabinet/suggestions/suggestions.component';
import { HomeComponent } from './modules/main-page/home/home.component';
import { MainPageComponent } from './modules/main-page/main-page.component';
import { MuviesComponent } from './modules/main-page/muvies/muvies.component';
import { SuggestMeComponent } from './modules/main-page/suggest-me/suggest-me.component';
import { TvShowsComponent } from './modules/main-page/tv-shows/tv-shows.component';
import { DetailsComponent } from './modules/shared/details/details.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'suggest-me',
        component: SuggestMeComponent
      },
      {
        path: 'tv-shows',
        component: TvShowsComponent,
      },
      {
        path: 'muvies',
        component: MuviesComponent,
      },
      {
        path: 'details',
        component: DetailsComponent
      }
    ]
  },

  {
    path: 'authorized',
    component: CabinetComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'suggestions',
        component: SuggestionsComponent,
      },
      {
        path: 'add',
        component: AddComponent
      }
    ]

  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
