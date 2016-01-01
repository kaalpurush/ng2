import {Component, View, bind, ViewQuery, QueryList} from 'angular2/core';
import {Http} from 'angular2/http'
import {Search} from '../search/search'

@Component({
	selector: 'devices'
})

@View({
    templateUrl: './app/component/device/device.html',
    directives: [Search]
})

export class Device {
    devices: Array<any>;
	searchbox1: Search;
    constructor(http: Http, @ViewQuery(Search) private searchComponents: QueryList<Search>) {
        this.devices = [];
        http.get('./devices.json').subscribe(res => this.devices = res.json());
		searchComponents.changes.subscribe(_ => this.searchbox1=searchComponents.first);
    }
}