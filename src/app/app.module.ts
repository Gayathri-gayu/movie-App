import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule} from '@angular/material';
import { MaterialModule} from '@angular/material';
import { HttpTestComponent } from './app.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {RouterModule} from  '@angular/router';


@NgModule({
  declarations: [
    HttpTestComponent,

  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    FormsModule,
    HttpModule,
     BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [HttpTestComponent]
})
export class AppModule { }

 
platformBrowserDynamic().bootstrapModule(AppModule);