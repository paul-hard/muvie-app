import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardComponent } from '../card/card.component';
import { SearchBoxComponent } from '../search-box/search-box.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CardComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    CardComponent,
    SearchBoxComponent,
    MatButtonToggleModule,
    MatInputModule,
    MatIconModule,
  ]
})
export class SharedModule { }
