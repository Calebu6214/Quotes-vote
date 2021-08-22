import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']

  // <div>
  // <button (click)="likeButtonClick()" [ngClass]="chooseclassl ? 'like-button' : 'liked'"> Like | {{numberOfLikes}} </button>
  // <button (click)="dislikeButtonClick()" [ngClass]="chooseclassd ? 'dislike-button' : 'disliked'"> Dislike | {{numberOfDislike}} </button>
  //   </div>
  // `,
  
  // styles:[`
  //   .like-button,.dislike-button {
  //     font-size: 1rem;
  //     padding: 5px 10px;
  //     color: #585858;
  //   }
  // .liked, .disliked {
  //   font-weight: bold;
  //   color:#1565c0;
  // }
  //   `]

})
export class QuoteDetailsComponent implements OnInit {


  @Input() quote:Quote;

  @Output() deletequoteevent = new EventEmitter<Quote>();
  @Output() likequoteevent = new EventEmitter<Quote>();
  @Output() dislikequoteevent = new EventEmitter<Quote>();
  deletequote(quoteToDelete:Quote){
    this.deletequoteevent.emit(quoteToDelete);
  };
  likeButtonClick(quoteToLike:Quote) {
    this.likequoteevent.emit(quoteToLike);
  };
  dislikeButtonClick(quoteToDislike:Quote) {
    this.dislikequoteevent.emit(quoteToDislike);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
