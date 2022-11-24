import { Component, OnInit, Input } from '@angular/core';
import { MainPageService } from '../../main-page/services/main-page.service';
import { IResponce, IMuvie } from '../../global-interfaces';

interface ISuggestMuvie {
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
  id: number,
  media_type: string,
  genre_ids: number[];
  name: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {



  public baseURL: string = 'https://image.tmdb.org/t/p/w500'

  @Input() multiSearchData!: IResponce;
  @Input() recivedMuvie: IMuvie[] = [];

  constructor(private service: MainPageService) { }

  ngOnInit(): void {
    console.log(this.recivedMuvie);
  }

  suggest(item: ISuggestMuvie) {
    const suggested: IMuvie = {
      muvie_id: item.id,
      title: item.title,
      name: item.name,
      poster_path: item.poster_path,
      media_type: item.media_type,
      vote_average: item.vote_average,
    }
    console.log(suggested);
    console.log('suggested');

    this.service.suggestMuvie(suggested).subscribe({

    })
  }


}
