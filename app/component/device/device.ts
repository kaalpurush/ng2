import {Component, View, bootstrap, bind, NgIf, NgFor, ViewQuery, QueryList, AfterViewInit} from 'angular2/angular2';
import {Http} from 'angular2/http'
import {Search} from '../search/search'

@Component({
	selector: 'devices'
})

@View({
    templateUrl: './app/component/device/device.html',
    directives: [NgIf, NgFor, Search]
})

export class Device implements AfterViewInit {
    devices: Array<any>;
	searchbox1: Search;
    constructor(http: Http, @ViewQuery(Search) private searchComponents: QueryList<Search>) {
        this.devices = [];
        http.get('./devices.json').map(res=> res.json()).subscribe(res => this.devices = res);
    }

	afterViewInit() {
		this.searchbox1 = this.searchComponents.first;
	}
}