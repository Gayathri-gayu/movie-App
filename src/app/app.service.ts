import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService{
   page=1;
   constructor(private http:Http){}
   getHttp(searchStr:string){
       return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=803f406ee611d09fae70832841ed7471&language=en-US&query='+searchStr+'&page='+this.page+'&include_adult=false')
       .map((response:Response)=>response.json());
   }
   
}