import {Injectable} from '@angular/core';
import { Http,Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GenreService
{
    
    constructor(private http:Http){}
    getGenre()
    {
        return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=803f406ee611d09fae70832841ed7471&language=en-US')
       .map((response:Response)=>response.json());
    }
   
}
