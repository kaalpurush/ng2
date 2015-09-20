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
var user_model_1 = require('./model/user-model');
var User = (function () {
    function User(user) {
        this.user = user;
        this.userChange = new angular2_1.EventEmitter();
        this.userName = user.name;
    }
    User.prototype.onUserChange = function (event) {
        this.userName = event.user.name;
    };
    User.prototype.setAdmin = function () {
        //this.userName="Kaal";
        //return;
        this.user.setAdmin();
        this.userChange.next({ name: this.user.name });
        console.log(this.user);
    };
    User = __decorate([
        angular2_1.Component({
            selector: 'user',
            viewBindings: [user_model_1.UserModel],
            events: ['userChange']
        }),
        angular2_1.View({
            template: "\n\t{{userName}}\n\t<button (click)=\"setAdmin()\">Admin</button>\n\t",
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [user_model_1.UserModel])
    ], User);
    return User;
})();
exports.User = User;
