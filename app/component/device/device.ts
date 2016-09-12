import {Component, ViewChildren, QueryList, OnInit, AfterViewInit, Inject} from '@angular/core';
import {Search} from '../search/search';
import { Http, Response } from '@angular/http';

@Component({
    selector: 'devices',
    templateUrl: './app/component/device/device.html',
    providers: [QueryList]
})

export class Device implements AfterViewInit {
    devices: Array<any>;
    @ViewChildren(Search) private searchComponents: QueryList<Search>;
    searchbox1: Search = null;
    constructor(private http: Http) {
        this.http.get('./devices.json').subscribe(res => { this.devices = res.json() });
    }

    ngAfterViewInit() {
        this.searchbox1 = this.searchComponents.first;
    }

    doSearch(query: String) {
        alert("Search component is requesting a search on: " + query);
    }
}