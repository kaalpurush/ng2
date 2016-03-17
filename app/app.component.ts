import {Component, View, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Router, RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http'
import {Device} from './component/device/device';
import {About} from './component/about/about';
import {Menu} from './component/menu/menu';
import {LoginForm, UserLogout} from './component/user/user';
import {UserModel} from './model/user-model'

@Component({
    selector: 'app',
    providers: [ROUTER_PROVIDERS, UserModel],
})

@View({
    templateUrl: './app/app.component.html',
    directives: [Menu, UserLogout, ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', component: LoginForm, as: 'Home' },
    { path: '/device', component: Device, name: 'Device', useAsDefault: true },
    { path: '/about/:id', component: About, as: 'About' },
])

export class AppComponent {
    userName: string;
    constructor(private router: Router) {
        this.router = router;
    }
}


