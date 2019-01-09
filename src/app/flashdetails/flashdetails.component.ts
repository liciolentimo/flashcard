import { Component, OnInit,Input } from '@angular/core';
import { Flash } from '../flash';

@Component({
  selector: 'app-flashdetails',
  templateUrl: './flashdetails.component.html',
  styleUrls: ['./flashdetails.component.css']
})
export class FlashdetailsComponent implements OnInit {

  @Input() flashcard:Flash;
  constructor() { }

  ngOnInit() {
  }

}
