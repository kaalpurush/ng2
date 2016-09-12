import {Component, ViewChildren, QueryList, OnInit, AfterContentInit,Inject} from '@angular/core';
import {Search} from '../search/search';
import { Http, Response } from '@angular/http';

@Component({
    selector: 'devices',
    templateUrl: './app/component/device/device.html',
    providers:[QueryList]
})

export class Device implements OnInit, AfterContentInit {
    devices: Array<any>;
    searchbox1: Search=null;
    constructor(private http: Http, @ViewChildren(Search) private searchComponents: QueryList<Search>) {
    }

    ngOnInit() {
        this.http.get('./devices.json').subscribe(res => { this.devices = res.json() });
    }

    ngAfterContentInit() {
        this.searchComponents.changes.subscribe(() =>this.searchbox1 = this.searchComponents.first);
    }
}