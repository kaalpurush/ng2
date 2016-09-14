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
var core_1 = require("@angular/core");
var user_model_1 = require("../../model/user-model");
var forms_1 = require("@angular/forms");
var UserLogin = (function () {
    function UserLogin(user) {
        this.user = user;
    }
    return UserLogin;
}());
UserLogin = __decorate([
    core_1.Component({
        selector: 'user-login',
        template: "\n\t{{user.name}}\n\t<button class=\"btn-sm btn-primary\" [hidden]=\"user.isLogged()\" (click)=\"user.login()\">Login</button>\n\t",
    }),
    __metadata("design:paramtypes", [user_model_1.UserModel])
], UserLogin);
exports.UserLogin = UserLogin;
var UserLogout = (function () {
    function UserLogout(user) {
        this.user = user;
    }
    return UserLogout;
}());
UserLogout = __decorate([
    core_1.Component({
        selector: 'user-logout',
        template: "\n\t{{user.name}}\n\t<button class=\"btn-sm btn-primary\" [hidden]=\"!user.isLogged()\" (click)=\"user.logout()\">Logout</button>\n\t"
    }),
    __metadata("design:paramtypes", [user_model_1.UserModel])
], UserLogout);
exports.UserLogout = UserLogout;
var LoginForm = (function () {
    function LoginForm(user) {
        this.cred = {};
        this.user = user;
    }
    LoginForm.prototype.doLogin = function (event) {
        console.log(this.loginForm);
        this.user.login();
    };
    LoginForm.prototype.ngAfterViewChecked = function () {
        if (this.currentForm === this.loginForm) {
            return;
        }
        this.loginForm = this.currentForm;
    };
    return LoginForm;
}());
__decorate([
    core_1.ViewChild('loginForm'),
    __metadata("design:type", forms_1.NgForm)
], LoginForm.prototype, "currentForm", void 0);
LoginForm = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login-form',
        templateUrl: 'login.html'
    }),
    __metadata("design:paramtypes", [user_model_1.UserModel])
], LoginForm);
exports.LoginForm = LoginForm;
//# sourceMappingURL=user.js.map