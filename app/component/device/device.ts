import {Component, bind, ViewQuery, QueryList, OnInit} from '@angular/core';
import {Search} from '../search/search'
import { Http, Response } from '@angular/http';

@Component({
    selector: 'devices',
    templateUrl: './app/component/device/device.html',
    directives: [Search]
})

export class Device implements OnInit {
    devices: Array<any>;
    searchbox1: Search;
    constructor(private http: Http, @ViewQuery(Search) private searchComponents: QueryList<Search>) {
        this.devices = [];
        searchComponents.changes.subscribe(_ => this.searchbox1 = searchComponents.first);
    }

    ngOnInit(){
        this.http.get('./devices.json').subscribe(res => {this.devices = res.json()});
    }
}