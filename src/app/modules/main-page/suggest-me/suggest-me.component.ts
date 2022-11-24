import { Component, OnInit, Input } from '@angular/core';

import { MainPageService } from '../services/main-page.service';
import { IResponce } from '../../global-interfaces';

@Component({
  selector: 'app-suggest-me',
  templateUrl: './suggest-me.component.html',
  styleUrls: ['./suggest-me.component.scss']
})
export class SuggestMeComponent implements OnInit {

  public multiSearchName: string = '';
  public multiSearchResponce!: IResponce;


  constructor(
    private service: MainPageService
  ) { }

  ngOnInit(): void {

  }

  multiSearchEvent(event: string) {
    this.multiSearchName = event
  }

  multiSearchInitClick() {
    console.log('clicked');
    this.service.getMultiSearch(this.multiSearchName).subscribe(data => {
      this.multiSearchResponce = data
      console.log(data);
      console.log(data.results);
    })
  }



}
