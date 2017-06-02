import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import {RouterModule} from '@angular/router';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule} from '@angular/material';
import {favoriteComponent} from './app.favorite';
import { AppComponent } from './app.component';
import { HTTPTestComponent } from './http-test.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {favouriteService} from './fav.service';

@NgModule({
  declarations: [
    AppComponent,
    HTTPTestComponent,
    favoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([{
      path:'Home',
      component:HTTPTestComponent
    },
    {
      path:'favorites',
      component:favoriteComponent
    }

    ])

  ],
  providers: [favouriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
