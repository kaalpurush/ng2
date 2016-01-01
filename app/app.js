System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', 'angular2/http', './component/device/device', './component/about/about', './component/menu/menu', './component/user/user', './model/user-model'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, router_1, router_2, http_1, device_1, about_1, menu_1, user_1, user_model_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (device_1_1) {
                device_1 = device_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            },
            function (menu_1_1) {
                menu_1 = menu_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (user_model_1_1) {
                user_model_1 = user_model_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(router, location) {
                    this.router = router;
                    this.location = location;
                    this.router = router;
                    this.location = location;
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        providers: [user_model_1.UserModel]
                    }),
                    core_1.View({
                        templateUrl: './app/app.html',
                        directives: [router_2.RouterLink, router_2.RouterOutlet, menu_1.Menu, user_1.UserLogout]
                    }),
                    router_2.RouteConfig([
                        { path: '/', component: user_1.LoginForm, as: 'Home' },
                        { path: '/device', component: device_1.Device, as: 'Device' },
                        { path: '/about/:id', component: about_1.About, as: 'About' },
                    ]), 
                    __metadata('design:paramtypes', [router_2.Router, router_2.Location])
                ], App);
                return App;
            })();
            exports_1("App", App);
            browser_1.bootstrap(App, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
        }
    }
});
//# sourceMappingURL=app.js.map