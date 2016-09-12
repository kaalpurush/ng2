"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var search_1 = require('../search/search');
var http_1 = require('@angular/http');
var Device = (function () {
    function Device(http) {
        var _this = this;
        this.http = http;
        this.searchbox1 = null;
        this.http.get('./devices.json').subscribe(function (res) { _this.devices = res.json(); });
    }
    Device.prototype.ngAfterViewInit = function () {
        this.searchbox1 = this.searchComponents.first;
    };
    Device.prototype.doSearch = function (query) {
        alert("Search component is requesting a search on: " + query);
    };
    __decorate([
        core_1.ViewChildren(search_1.Search), 
        __metadata('design:type', core_1.QueryList)
    ], Device.prototype, "searchComponents", void 0);
    Device = __decorate([
        core_1.Component({
            selector: 'devices',
            templateUrl: './app/component/device/device.html',
            providers: [core_1.QueryList]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Device);
    return Device;
}());
exports.Device = Device;
//# sourceMappingURL=device.js.map