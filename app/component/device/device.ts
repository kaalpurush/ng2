import {Component, ViewChild, OnInit, AfterViewInit, Inject} from '@angular/core';
import {Search} from '../search/search';
import { Http, Response } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'devices',
    templateUrl: 'device.html'
})

export class Device implements AfterViewInit {
    devices: Array<any>;
    @ViewChild(Search) private searchComponent: Search;
    searchbox: Search = null;
    constructor(private http: Http) {
        this.http.get('./devices.json').subscribe(res => { this.devices = res.json() });
    }

    ngAfterViewInit() {
        this.searchbox = this.searchComponent;
    }

    doSearch(query: String) {
        alert("Search component is requesting a search on: " + query);
    }
}