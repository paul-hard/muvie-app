import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared/shared.service';

import { IMuvie } from '../../global-interfaces';

@Component({
  selector: 'app-muvies',
  templateUrl: './muvies.component.html',
  styleUrls: ['./muvies.component.scss']
})
export class MuviesComponent implements OnInit {
  public baseURL: string = 'https://image.tmdb.org/t/p/w250'
  public muvies: IMuvie[] = []


  constructor(
    private service: SharedService,
  ) { }

  ngOnInit() {

  }

  searchMuvie(event: string) {
    console.log(event); // get request with name, recived data filter and assign to muvies

  }





}
