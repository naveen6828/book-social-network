import { Component } from '@angular/core';
import { BookResponse } from 'src/app/services/models';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {

  private _book: BookResponse = {}

  get book(): BookResponse{
    return this._book
  }

  set book(value: BookResponse){
    this._book = value;
  }

}
