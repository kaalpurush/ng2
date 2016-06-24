import {Component} from '@angular/core';
import {HTTP_PROVIDERS, Http} from '@angular/http'
import {Device} from './component/device/device';
import {About} from './component/about/about';
import {Menu} from './component/menu/menu';
import {LoginForm, UserLogout} from './component/user/user';
import {UserModel} from './model/user-model';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'app',
    providers: [UserModel],
    templateUrl: './app/app.component.html',
    directives: [Menu, UserLogout, ROUTER_DIRECTIVES]
})

export class AppComponent {
    userName: string;
}


