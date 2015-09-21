import {Component, View, bootstrap, bind, NgFor} from 'angular2/angular2';
import {Http} from 'angular2/http'

@Component({
	selector: 'devices'
})

@View({
    templateUrl: './app/component/device/device.html',
    directives: [NgFor]
})

export class Device {
    devices: Array<any>;
    constructor(http: Http) {
        this.devices = [];
        http.get('./devices.json').toRx().map(res=> res.json()).subscribe(res => this.devices = res);
    }
}