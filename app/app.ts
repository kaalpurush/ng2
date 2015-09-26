import {Component, View, bootstrap, bind} from 'angular2/angular2';
import {ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {RouterLink, RouteConfig, Router, RouterOutlet, Location, RouteParams} from 'angular2/router';
import {HTTP_BINDINGS, Http} from 'angular2/http'
import {Device} from './component/device/device';
import {About} from './component/about/about';
import {Menu} from './component/menu/menu';
import {LoginForm, UserLogout} from './component/user/user';
import {Game} from './component/game/game';
import {UserModel} from './model/user-model'

@Component({
	selector: 'app',
	bindings: [UserModel]
})

@View({
    templateUrl: './app/app.html',
    directives: [RouterLink, RouterOutlet, Menu, UserLogout, Game]
})

@RouteConfig([
    { path: '/', component: LoginForm, as: 'home' },
    { path: '/devices', component: Device, as: 'devices' },
    { path: '/about/:id', component: About, as: 'about' }
])

export class App {
	userName: string;
    constructor(private router: Router, private location: Location) {
        this.router = router;
        this.location = location;
    }

	onUserChange(event) {
		this.userName = event.name
	}

}

bootstrap(App, [ROUTER_BINDINGS, bind(LocationStrategy).toClass(HashLocationStrategy), HTTP_BINDINGS]);
