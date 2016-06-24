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
var Menu = (function () {
    function Menu() {
        this.menu = ["Hola", "Hello", "Adios", "Asta la Vista"];
    }
    Menu = __decorate([
        core_1.Component({
            selector: 'menu',
            template: "\n\t<ul>\n\t\t<li *ngFor=\"#m of menu\">\n\t\t\t<a href=\"#\">{{m}}</a>\n\t\t</li>\n\t</ul>\t\n\t",
            styles: ["\n    li {\n      padding: 5px;\n\t  float:left;\n\t  list-style:none;\n\t  border:1px dashed;\n    }\n  "],
            directives: []
        }), 
        __metadata('design:paramtypes', [])
    ], Menu);
    return Menu;
}());
exports.Menu = Menu;
//# sourceMappingURL=menu.js.map