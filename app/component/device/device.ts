import {Component, View, bind, ViewQuery, QueryList, AfterViewInit} from 'angular2/core';
import {Http} from 'angular2/http'
import {Search} from '../search/search'

@Component({
	selector: 'devices'
})

@View({
    templateUrl: './app/component/device/device.html',
    directives: [Search]
})

export class Device implements AfterViewInit {
    devices: Array<any>;
	searchbox1: Search;
    constructor(http: Http, @ViewQuery(Search) private searchComponents: QueryList<Search>) {
        this.devices = [];
        http.get('./devices.json').map(res=> res.json()).subscribe(res => this.devices = res);
    }

	ngAfterViewInit() {
		this.searchbox1 = this.searchComponents.first;
	}
}