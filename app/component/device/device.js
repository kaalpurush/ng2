System.register(['angular2/core', 'angular2/http', '../search/search'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1, search_1;
    var Device;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (search_1_1) {
                search_1 = search_1_1;
            }],
        execute: function() {
            Device = (function () {
                function Device(http, searchComponents) {
                    var _this = this;
                    this.searchComponents = searchComponents;
                    this.devices = [];
                    http.get('./devices.json').map(function (res) { return res.json(); }).subscribe(function (res) { return _this.devices = res; });
                }
                Device.prototype.ngAfterViewInit = function () {
                    this.searchbox1 = this.searchComponents.first;
                };
                Device = __decorate([
                    core_1.Component({
                        selector: 'devices'
                    }),
                    core_1.View({
                        templateUrl: './app/component/device/device.html',
                        directives: [search_1.Search]
                    }),
                    __param(1, core_1.ViewQuery(search_1.Search)), 
                    __metadata('design:paramtypes', [http_1.Http, core_1.QueryList])
                ], Device);
                return Device;
            })();
            exports_1("Device", Device);
        }
    }
});
//# sourceMappingURL=device.js.map