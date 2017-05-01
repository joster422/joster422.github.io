import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';
import { MineSweeperComponent } from './blog/mine-sweeper/mine-sweeper.component';
import { MoxieComponent } from './blog/moxie/moxie.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './header/contact/contact.component';
import { ToggleComponent } from './forms/toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ProfileComponent,
    MineSweeperComponent,
    MoxieComponent,
    HeaderComponent,
    ContactComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
