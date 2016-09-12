"use strict";
var router_1 = require('@angular/router');
var device_1 = require('./component/device/device');
var about_1 = require('./component/about/about');
exports.appRoutes = [
    { path: '', redirectTo: '/device', pathMatch: 'full' },
    //{ path: 'login', component: LoginForm, },
    { path: 'device', component: device_1.Device },
    { path: 'about/:id', component: about_1.About },
];
exports.routing = router_1.RouterModule.forRoot(exports.appRoutes);
//# sourceMappingURL=app.routing.js.map