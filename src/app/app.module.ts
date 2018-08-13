import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
