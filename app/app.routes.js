"use strict";
var router_1 = require('@angular/router');
var device_1 = require('./component/device/device');
var about_1 = require('./component/about/about');
var user_1 = require('./component/user/user');
exports.routes = [
    { path: 'login', component: user_1.LoginForm },
    { path: 'device', component: device_1.Device },
    { path: 'about/:id', component: about_1.About },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map