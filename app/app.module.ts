import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { Device } from './component/device/device';
import { HttpModule } from '@angular/http';
import { Menu } from './component/menu/menu';
import { Search } from './component/search/search';
import { About } from './component/about/about';
import { FormsModule } from '@angular/forms';
import { LoginForm, UserLogin, UserLogout } from './component/user/user';
import { AppComponent } from './app.component';
import { UserModel } from './model/user-model';
import { Material } from './component/material/material';
// import { MdButtonModule } from '@angular2-material/button';
//import { MdRadioModule } from '@angular2-material/radio';


@NgModule({
  imports: [BrowserModule, routing, HttpModule, FormsModule],
  providers: [UserModel, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  declarations: [AppComponent, Device, Menu, Search, About, LoginForm, UserLogin, UserLogout, Material],
  bootstrap: [AppComponent]
})
export class AppModule { }
