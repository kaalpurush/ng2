import {Component, View, bootstrap, bind, NgFor} from 'angular2/angular2';
import {Http, HTTP_BINDINGS} from 'angular2/http'

@Component({
   selector: 'app'
})

@View({
    templateUrl: 'devices.html',
    directives: [NgFor]
})
 
export class App {
    devices: any;
    constructor(http: Http) {
        this.devices = []; 
        http.get('./devices.json').toRx().subscribe(res => this.devices = res.json());
    }
}

bootstrap(App,[HTTP_BINDINGS]);
