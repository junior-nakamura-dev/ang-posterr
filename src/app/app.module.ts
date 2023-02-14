import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {MaterialModule} from './material/material.module';
import {FeedModule} from './feed/feed.module';

import {AppRoutingModule} from './config/app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FeedComponent} from "./feed/feed.component";
import {FollowersComponent} from "./followers/followers.component";
import {FormsModule} from "@angular/forms";

import {DialogErrorComponent} from "./components/dialog/dialog.error.component";

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    FollowersComponent,
    DialogErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FeedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
