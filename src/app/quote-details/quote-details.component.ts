import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']

})
export class QuoteDetailsComponent implements OnInit {


  @Input() quote:Quote;

  @Output() deletequoteevent = new EventEmitter<Quote>();
  @Output() likequoteevent = new EventEmitter<Quote>();
  @Output() dislikequoteevent = new EventEmitter<Quote>();
  // @Output() showdatequoteevent = new EventEmitter<Quote>();
  deletequote(quoteToDelete:Quote){
    this.deletequoteevent.emit(quoteToDelete);
  };
  likeButtonClick(quoteToLike:Quote) {
    this.likequoteevent.emit(quoteToLike);
  };
  dislikeButtonClick(quoteToDislike:Quote) {
    this.dislikequoteevent.emit(quoteToDislike);
  }
  // showdateQuote(quotedays:Quote) {
  //   this.showdatequoteevent.emit(quotedays);
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
