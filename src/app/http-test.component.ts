import { Component } from '@angular/core';
import {HTTPTestService} from './http-test.service';
import {MaterialModule} from '@angular/material';
import {movieDetails} from './movie-details'
import {favoriteComponent} from './app.favorite';
import {GenreService} from './genre.service'

@Component({
  selector: 'http-test',
  templateUrl: './search.component.html',
styleUrls:['./search.component.css'],

  providers:[HTTPTestService,favoriteComponent,GenreService]
})
export class HTTPTestComponent {
    getData=[];
    postData:string;
    value:string;
    moviename:string;
    MovieArray=[];
    scrolldistance=3000;
    throttle=20;
    page=1;
    totalpage:number;
    new_genre=[];
    count=1;
    

    constructor(private httpservice:HTTPTestService,private _fav:favoriteComponent,private _genre:GenreService){}
    onTestGet(value)
    {
        if(value != "")
        {
        this.httpservice.getHttp(value)
        .subscribe(
            data=>{this.getData=data.results;
                  this.totalpage=data.total_pages;
          },
            error=>alert(error),
            ()=>console.log("finished")
             );
        } 
        else
        {
            alert("Please type a movie name");
        }
     

       this._genre.getGenre()
       .subscribe(
         data=>(this.new_genre=data.genres)
       ,
       error=>alert(error),
            ()=>console.log("genres obtained")
       )  
    }
      
pushGenre(val){
  let genreArray=[];
  this.new_genre.forEach(function(e){
    if (val.includes(e.id))
    {
      genreArray.push(e.name);
    }
    
  })
return genreArray;
}

onScroll (value) {
  if(this.httpservice.page<=this.totalpage){
      this.httpservice.page++;
        console.log('scrolled!!');
         this.httpservice.getHttp(value)
        .subscribe(
            data=> {data.results.forEach((elem) => {
              this.getData.push(elem);
            })},
            error=>alert(error),
            ()=>console.log("finished")
      );
        
    }
}

 }
