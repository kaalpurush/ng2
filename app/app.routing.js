"use strict";
var router_1 = require("@angular/router");
var device_1 = require("./component/device/device");
var about_1 = require("./component/about/about");
var material_1 = require("./component/material/material");
var user_1 = require("./component/user/user");
exports.appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: user_1.LoginForm, },
    { path: 'device', component: device_1.Device },
    { path: 'about/:id', component: about_1.About },
    { path: 'material', component: material_1.Material },
];
exports.routing = router_1.RouterModule.forRoot(exports.appRoutes);
//# sourceMappingURL=app.routing.js.map