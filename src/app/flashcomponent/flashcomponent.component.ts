import { Component, OnInit } from '@angular/core';
import { Flash } from '../flash';


@Component({
  selector: 'app-flashcomponent',
  templateUrl: './flashcomponent.component.html',
  styleUrls: ['./flashcomponent.component.css']
})
export class FlashcomponentComponent implements OnInit {
  flashcards = [
    new Flash('Object','An instance of a class'),
    new Flash('Abstraction',' Its main goal is to handle complexity by hiding unnecessary details from the user.')
  ]

  toggleDetails(index){
    this.flashcards[index].showDescription = !this.flashcards[index].showDescription;
}

  constructor() { }

  ngOnInit() {
  }

}
