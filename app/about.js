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
var user_model_1 = require("./model/user-model");
var user_1 = require("./user");
var About = (function () {
    function About(params, user) {
        this.user = user;
        this.id = params.get('id');
    }
    About = __decorate([
        angular2_1.Component({
            selector: 'about',
            viewBindings: []
        }),
        angular2_1.View({
            templateUrl: './app/about.html',
            directives: [
                user_1.UserLogin, user_1.UserLogout, user_1.LoginForm
            ]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams, user_model_1.UserModel])
    ], About);
    return About;
})();
exports.About = About;
//# sourceMappingURL=about.js.map