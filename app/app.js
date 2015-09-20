/// <reference path="../typings/tsd.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var http_1 = require('angular2/http');
var devices_1 = require('./devices');
var about_1 = require('./about');
var menu_1 = require('./menu');
var user_1 = require('./user');
var App = (function () {
    function App(router, location) {
        this.router = router;
        this.location = location;
        this.router = router;
        this.location = location;
    }
    App.prototype.onUserChange = function (event) {
        this.userName = event.name;
    };
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            bindings: []
        }),
        angular2_1.View({
            templateUrl: './app/app.html',
            directives: [router_2.RouterLink, router_2.RouterOutlet, menu_1.Menu, user_1.User]
        }),
        router_2.RouteConfig([
            { path: '/devices', component: devices_1.Devices, as: 'devices' },
            { path: '/about/:id', component: about_1.About, as: 'about' }
        ]), 
        __metadata('design:paramtypes', [router_2.Router, router_2.Location])
    ], App);
    return App;
})();
exports.App = App;
angular2_1.bootstrap(App, [router_1.ROUTER_BINDINGS, angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy), http_1.HTTP_BINDINGS]);
