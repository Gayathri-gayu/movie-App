import { Component,Input} from '@angular/core'
import { HTTPTestComponent } from './http-test.component'
import {favouriteService} from './fav.service'

@Component({
  selector: 'my-favorite',
  template: `<h3>Favourites!!</h3>
 <div *ngFor="let val of this._fav.favMovieArray">
  <p>{{val.id}}</p>
   <p>{{val.name}}</p>
</div>`,


providers:[favouriteService]

})

export class favoriteComponent { 


    constructor(private _fav:favouriteService){}    
     getFavourite()
    {
      this._fav.getFav()
       .subscribe(
         data=>{(this._fav.favMovieArray=data);
 console.log(this._fav.favMovieArray)},
       error=>alert(error),
            ()=>console.log("favourites added")
       )
    }
}



