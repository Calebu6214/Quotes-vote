import { Component } from '@angular/core';
import { Quote } from './quote';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[]=[
    {id:1,text:'The purpose of our lives is to be happy.',name:'Dalai Lama'},
    {id:2,text:'You only live once, but if you do it right, once is enough.',name:'Mae West'},
    {id:3,text:'Get busy living or get busy dying.',name:'Stephen King'},
    {id:4,text:'Life is what happens when you’re busy making other plans',name:'John Lennon'},
    {id:5,text:'Never say die',name:'Roman King'}
  ];
}

