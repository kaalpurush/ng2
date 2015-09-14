import {Component, View, bootstrap, bind} from 'angular2/angular2';
import {ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {RouterLink, RouteConfig, Router, RouterOutlet, Location, RouteParams} from 'angular2/router';
import {HTTP_BINDINGS} from 'angular2/http'
import {Devices} from './devices';
import {About} from './about';

@Component({
   selector: 'app'
})

@View({
    templateUrl: './app/app.html',
    directives: [RouterLink, RouterOutlet, About]
})

@RouteConfig([
    {path: '/devices', component: Devices, as: 'devices'},
    {path: '/about/:id', component: About, as: 'about'}
])
 
export class App {
    constructor(private router: Router, private location: Location) {
        this.router = router;
        this.location = location;
    }
}

bootstrap(App,[ROUTER_BINDINGS, bind(LocationStrategy).toClass(HashLocationStrategy), HTTP_BINDINGS]);
