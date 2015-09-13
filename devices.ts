import {Component, View, bootstrap, bind, NgFor} from 'angular2/angular2';
import {Http} from 'angular2/http'

@Component({
   selector: 'devices'
})

@View({
    templateUrl: 'devices.html',
    directives: [NgFor]
})
 
export class Devices {
    devices: Array<any>;
    constructor(http: Http) {
        this.devices = []; 
        http.get('./devices.json').toRx().subscribe(res => this.devices = res.json());
    }
}