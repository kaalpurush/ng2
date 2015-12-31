import {Component, View, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {RouterLink, RouteConfig, Router, RouterOutlet, Location, RouteParams} from 'angular2/router';
import {HTTP_BINDINGS, Http} from 'angular2/http'
import {Device} from './component/device/device';
import {About} from './component/about/about';
import {Menu} from './component/menu/menu';
import {LoginForm, UserLogout} from './component/user/user';
import {UserModel} from './model/user-model'

@Component({
	selector: 'app',
    //template: '<h1>My First Angular 2 App</h1>',
	bindings: [UserModel]
})

@View({
    templateUrl: './app/app.html',
    directives: [RouterLink, RouterOutlet, Menu, UserLogout]
})

@RouteConfig([
    { path: '/', component: About, as: 'About' },
])

export class App {
	userName: string;
    constructor(private router: Router, private location: Location) {
        this.router = router;
        this.location = location;
    }
}

bootstrap(App, [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);
