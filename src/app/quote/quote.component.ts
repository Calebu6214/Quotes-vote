import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote(1,'"The purpose of our lives is to be happy."','Dalai Lama', 'KIM',new Date(2022,9,13)),
    new Quote(2,'"You only live once, but if you do it right, once is enough."','Mae West','Lake', new Date (2023,5,25)),
    new Quote(3,'"Get busy living or get busy dying."','Stephen King', 'Ryan',new Date(2025,8,21)),
    new Quote(4,'"Life is what happens when you’re busy making other plans"','John Lennon','Kevin',new Date(2024,6,7)),
    new Quote(5,'"Never say die','Roman King"','Shawn',new Date(2022,6,6))
  ];
  toggleDetails(index){
    this.quotes[index].showName=!this.quotes[index].showName;
  }
  deleteQuote(deletequoteevent, index){
    if (deletequoteevent) {
      this.quotes.splice(index,1);
    }
  };
  likeQuote(likequoteevent, index){
    if (likequoteevent) {
      this.quotes[index].upvote++;
    }
  };
  dislikeQuote(dislikequoteevent, index){
    if (dislikequoteevent) {
      this.quotes[index].downvote++;
    }
  };

  addNewQuote(Quote){ 
    let quoteLength = this.quotes.length;
  Quote.id = quoteLength+1;
    Quote.completeDate = new Date(Quote.completeDate)
    this.quotes.push(Quote)

  }
  // showdateQuote(showdatequoteevent, index){
  //   if (showdatequoteevent) {
  //     this.quotes[index].completeDate;
  //   }
  // }
  constructor() { }

  ngOnInit():void {
  }

}
