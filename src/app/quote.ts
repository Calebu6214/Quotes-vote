export class Quote {
    
    showName:boolean;

    constructor( public id:number,public text:string,public name:string,public upvote:number=0,public downvote:number=0){
        this.showName=false;
    }
}
