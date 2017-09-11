import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ContentsComponent }  from './components/contents/contents.component';
import { HomeComponent }  from './components/home/home.component';
import { AboutComponent }  from './components/about/about.component';
import { ContactsComponent }  from './components/contacts/contacts.component';
import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, ContentsComponent, HomeComponent, AboutComponent, ContactsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
