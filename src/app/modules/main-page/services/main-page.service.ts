import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface IResponce {
  results: [
    {
      original_title: string,
      backdrop_path: string,
      overview: string,
      popularity: number,
      poster_path: string,
      release_date: string,
      title: string,
      video: boolean,
      vote_average: number,
      vote_count: number,
    }
  ]


}

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(private http: HttpClient) { }

  getPopular() {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=cb54c90b7e2c3b40e5a8ffcb081daefb&language=en-US&page=1';
    return this.http.get(url).pipe(map(responce => responce as IResponce));
  }
}
