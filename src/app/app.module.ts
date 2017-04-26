import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';
import { MineSweeperComponent } from './blog/mine-sweeper/mine-sweeper.component';
import { MoxieComponent } from './blog/moxie/moxie.component';

// import 'normalize.css'

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ProfileComponent,
    MineSweeperComponent,
    MoxieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
