import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})

export class SearchBoxComponent {


  @Output() multiSearchEvent = new EventEmitter<string>();


  onKeyUpMultiSerach(event: string) {
    this.multiSearchEvent.emit(event)

  }


}
