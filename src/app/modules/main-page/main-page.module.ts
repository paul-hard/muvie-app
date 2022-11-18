import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';

import { MainPageComponent } from '../main-page/main-page.component';
import { HeaderComponent } from '../shared/header/header.component'
import { MuviesComponent } from './muvies/muvies.component'
import { CardComponent } from '../shared/card/card.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { SuggestMeComponent } from './suggest-me/suggest-me.component';
import { HomeComponent } from './home/home.component';
import { SearchBoxComponent } from '../shared/search-box/search-box.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    MuviesComponent,
    CardComponent,
    TvShowsComponent,
    SuggestMeComponent,
    HomeComponent,
    SearchBoxComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonToggleModule,
    MatInputModule,
    MatIconModule

  ],
  exports: [
    MainPageComponent,
    HeaderComponent,
    MuviesComponent,
    CardComponent,
    TvShowsComponent,
    MatButtonToggleModule,
    SearchBoxComponent
  ]
})
export class MainPageModule { }
