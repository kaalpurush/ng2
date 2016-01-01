System.register(['angular2/core', '../../model/user-model', "angular2/common", '../../helper/custom_validators'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_model_1, common_1, custom_validators_1;
    var UserLogin, UserLogout, LoginForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_model_1_1) {
                user_model_1 = user_model_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (custom_validators_1_1) {
                custom_validators_1 = custom_validators_1_1;
            }],
        execute: function() {
            UserLogin = (function () {
                function UserLogin(user) {
                    this.user = user;
                }
                UserLogin = __decorate([
                    core_1.Component({
                        selector: 'user-login'
                    }),
                    core_1.View({
                        template: "\n\t{{user.name}}\n\t<button class=\"btn-sm btn-primary\" [hidden]=\"user.isLogged()\" (click)=\"user.login()\">Login</button>\n\t",
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [user_model_1.UserModel])
                ], UserLogin);
                return UserLogin;
            })();
            exports_1("UserLogin", UserLogin);
            UserLogout = (function () {
                function UserLogout(user) {
                    this.user = user;
                }
                UserLogout = __decorate([
                    core_1.Component({
                        selector: 'user-logout'
                    }),
                    core_1.View({
                        template: "\n\t{{user.name}}\n\t<button class=\"btn-sm btn-primary\" [hidden]=\"!user.isLogged()\" (click)=\"user.logout()\">Logout</button>\n\t",
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [user_model_1.UserModel])
                ], UserLogout);
                return UserLogout;
            })();
            exports_1("UserLogout", UserLogout);
            LoginForm = (function () {
                function LoginForm(fb, user) {
                    this.type = 1;
                    this.user = user;
                    this.loginForm = fb.group({
                        email: ['', common_1.Validators.compose([common_1.Validators.required, custom_validators_1.default.email])],
                        password: ['', common_1.Validators.required]
                    });
                }
                LoginForm.prototype.doLogin = function (event) {
                    console.log(this.loginForm.value);
                    event.preventDefault();
                    this.user.login();
                };
                LoginForm = __decorate([
                    core_1.Component({
                        selector: 'login-form',
                        viewBindings: [common_1.FormBuilder]
                    }),
                    core_1.View({
                        templateUrl: './app/component/user/login.html',
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, user_model_1.UserModel])
                ], LoginForm);
                return LoginForm;
            })();
            exports_1("LoginForm", LoginForm);
        }
    }
});
//# sourceMappingURL=user.js.map