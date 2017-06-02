import {Injectable} from '@angular/core';
import { Http,Response,Headers,RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class favouriteService
{
     favMovieArray=[];    
    constructor(private http:Http){}
    getFav()
    {
        let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Methods':' GET, POST, PATCH, PUT, DELETE, OPTIONS' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('http://localhost:3000/api/bear').map((response:Response)=>response.json());
    }
   
}
