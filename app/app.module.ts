import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import {Device} from './component/device/device';
import { HttpModule  } from '@angular/http';
import {Menu} from './component/menu/menu';
import {Search} from './component/search/search';
import {About} from './component/about/about';
import { FormsModule } from '@angular/forms';
import { UserLogin, UserLogout } from './component/user/user';
import { AppComponent }  from './app.component';
import {UserModel} from './model/user-model';

@NgModule({
  imports: [BrowserModule, routing, HttpModule, FormsModule],
  providers: [UserModel],
  declarations: [AppComponent, Device, Menu, Search, About, UserLogin, UserLogout],
  bootstrap: [AppComponent]
})
export class AppModule { }
