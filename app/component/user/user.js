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
var user_model_1 = require('../../model/user-model');
var angular2_2 = require("angular2/angular2");
var custom_validators_1 = require('../../helper/custom_validators');
var UserLogin = (function () {
    function UserLogin(user) {
        this.user = user;
    }
    UserLogin = __decorate([
        angular2_1.Component({
            selector: 'user-login'
        }),
        angular2_1.View({
            template: "\n\t{{user.name}}\n\t<button class=\"btn-sm btn-primary\" [hidden]=\"user.isLogged()\" (click)=\"user.login()\">Login</button>\n\t",
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [user_model_1.UserModel])
    ], UserLogin);
    return UserLogin;
})();
exports.UserLogin = UserLogin;
var UserLogout = (function () {
    function UserLogout(user) {
        this.user = user;
    }
    UserLogout = __decorate([
        angular2_1.Component({
            selector: 'user-logout'
        }),
        angular2_1.View({
            template: "\n\t{{user.name}}\n\t<button class=\"btn-sm btn-primary\" [hidden]=\"!user.isLogged()\" (click)=\"user.logout()\">Logout</button>\n\t",
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [user_model_1.UserModel])
    ], UserLogout);
    return UserLogout;
})();
exports.UserLogout = UserLogout;
var LoginForm = (function () {
    function LoginForm(fb, user) {
        this.user = user;
        this.loginForm = fb.group({
            email: ['', angular2_2.Validators.compose([angular2_2.Validators.required, custom_validators_1.TypeValidators.email])],
            password: ['', angular2_2.Validators.required]
        });
    }
    LoginForm.prototype.doLogin = function (event) {
        console.log(this.loginForm.value);
        event.preventDefault();
        this.user.login();
    };
    LoginForm = __decorate([
        angular2_1.Component({
            selector: 'login-form',
            viewBindings: [angular2_2.FormBuilder]
        }),
        angular2_1.View({
            templateUrl: './app/component/user/login.html',
            directives: [angular2_1.NgFor, angular2_2.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [angular2_2.FormBuilder, user_model_1.UserModel])
    ], LoginForm);
    return LoginForm;
})();
exports.LoginForm = LoginForm;
//# sourceMappingURL=user.js.map