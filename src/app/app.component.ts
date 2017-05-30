import { Component } from '@angular/core';
import {HttpService} from './app.service';
import {genre} from './genre-main';
import {genres} from './genre-list';
 import { InfiniteScroll } from 'angular2-infinite-scroll';

@Component({
  selector: 'app-root',

 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HttpService],

})
export class HttpTestComponent{
  getdata=[];
  postdata:string;
  values:string;
  title='Movie App';
  scrollDistance=20;
  throttle=3000;
  totalpage:number;
 


  onKey(event:any){
    this.values=event.target.value;
  }
  constructor(private _httpService:HttpService){}
  myMovieSearch(values,page){
    this._httpService.getHttp(values)
    .subscribe(data=>{this.getdata=data.results;
      this.totalpage=data.total_results;
    },
    ()=>console.log("finished"),
    );

  }
  genreMethod(val){
    let arr=[];
    genres.forEach(function(api)
    {
      if (val.includes(api.id))
      {
        arr.push(api.name);
      }
    })
    return arr;
  }

onScroll(values,page) {
  if(this._httpService.page<=this.totalpage){
        this._httpService.page++;
        console.log('scrolled!!');
         this._httpService.getHttp(values)
        .subscribe(

            data=> {data.results.forEach((elem) => {
              this.getdata.push(elem);
              
            })
            console.log(this.getdata);
          },
            error=>alert(error),
            ()=>console.log("finished")
      );
        
   }
}


}
