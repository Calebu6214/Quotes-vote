export class Quote {
    // id:number;
    // text:string;
    // name:string;
    showName:boolean;

    constructor( public id:number,public text:string,public name:string,public upvote:number=0){
        this.showName=false;
    }
}
