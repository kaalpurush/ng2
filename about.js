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
var angular2_2 = require("angular2/angular2");
var About = (function () {
    function About(params, fb) {
        this.id = params.get('id');
        this.loginForm = fb.group({
            email: ['', angular2_2.Validators.compose([angular2_2.Validators.required, this.invalidEmail])],
            password: ['', angular2_2.Validators.required]
        });
    }
    About.prototype.invalidEmail = function (control) {
        if (!control.value.match(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)) {
            return { invalidEmail: true };
        }
    };
    About.prototype.doLogin = function (event) {
        console.log(this.loginForm.value);
        event.preventDefault();
    };
    About = __decorate([
        angular2_1.Component({
            selector: 'about',
            viewBindings: [angular2_2.FormBuilder]
        }),
        angular2_1.View({
            templateUrl: 'about.html',
            directives: [
                angular2_2.FORM_DIRECTIVES,
            ]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams, angular2_2.FormBuilder])
    ], About);
    return About;
})();
exports.About = About;
