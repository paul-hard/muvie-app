import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CardComponent } from './modules/shared/card/card.component';
// import { SearchBoxComponent } from './modules/shared/search-box/search-box.component';

import { MainPageModule } from "./modules/main-page/main-page.module";
import { CabinetModule } from './modules/cabinet/cabinet.module'
import { SharedModule } from './modules/shared/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    // CardComponent,
    // SearchBoxComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModule,
    CabinetModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
