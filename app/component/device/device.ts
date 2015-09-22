import {Component, View, bootstrap, bind, NgFor, ViewQuery, QueryList} from 'angular2/angular2';
import {Http} from 'angular2/http'
import {Search} from '../search/search'

@Component({
	selector: 'devices'
})

@View({
    templateUrl: './app/component/device/device.html',
    directives: [NgFor, Search]
})

export class Device {
    devices: Array<any>;
	searchbox1: Search;
    constructor(http: Http, @ViewQuery(Search) private searchComponents: QueryList<Search>) {
        this.devices = [];
        http.get('./devices.json').toRx().map(res=> res.json()).subscribe(res => this.devices = res);
    }
	
	onInit(){
		this.searchbox1=this.searchComponents.first;		
	}
}