import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../services/main-page.service'

import { IResponce } from '../services/main-page.service';

@Component({
  selector: 'app-muvies',
  templateUrl: './muvies.component.html',
  styleUrls: ['./muvies.component.scss']
})
export class MuviesComponent implements OnInit {
  // public baseURL: string = 'https://image.tmdb.org/t/p/w250'
  // public films: IResponce = {
  //   results: [
  //     {
  //       original_title: "",
  //       backdrop_path: "",
  //       overview: "",
  //       popularity: 0,
  //       poster_path: "",
  //       release_date: "",
  //       title: "",
  //       video: false,
  //       vote_average: 0,
  //       vote_count: 0,
  //     }
  //   ]
  // }



  constructor(
  ) { }

  ngOnInit() {
    // this.service.getPopular().subscribe(data => {
    //   console.log(data.results);
    //   this.films.results = data.results
    // })

  }

}
