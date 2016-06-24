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
var user_model_1 = require('../../model/user-model');
var common_1 = require("@angular/common");
var UserLogin = (function () {
    function UserLogin(user) {
        this.user = user;
    }
    UserLogin = __decorate([
        core_1.Component({
            selector: 'user-login',
            template: "\n\t{{user.name}}\n\t<button class=\"btn-sm btn-primary\" [hidden]=\"user.isLogged()\" (click)=\"user.login()\">Login</button>\n\t",
            directives: []
        }), 
        __metadata('design:paramtypes', [user_model_1.UserModel])
    ], UserLogin);
    return UserLogin;
}());
exports.UserLogin = UserLogin;
var UserLogout = (function () {
    function UserLogout(user) {
        this.user = user;
    }
    UserLogout = __decorate([
        core_1.Component({
            selector: 'user-logout',
            template: "\n\t{{user.name}}\n\t<button class=\"btn-sm btn-primary\" [hidden]=\"!user.isLogged()\" (click)=\"user.logout()\">Logout</button>\n\t",
            directives: []
        }), 
        __metadata('design:paramtypes', [user_model_1.UserModel])
    ], UserLogout);
    return UserLogout;
}());
exports.UserLogout = UserLogout;
var LoginForm = (function () {
    function LoginForm(fb, user) {
        this.user = user;
        this.loginForm = fb.group({});
    }
    LoginForm.prototype.doLogin = function (event) {
        console.log(this.loginForm.value);
        event.preventDefault();
        this.user.login();
    };
    LoginForm = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: './app/component/user/login.html',
            directives: [common_1.FORM_DIRECTIVES],
            viewProviders: [common_1.FormBuilder]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, user_model_1.UserModel])
    ], LoginForm);
    return LoginForm;
}());
exports.LoginForm = LoginForm;
//# sourceMappingURL=user.js.map