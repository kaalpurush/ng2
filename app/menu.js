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
var Menu = (function () {
    function Menu() {
        this.menu = ["Hola", "Hello", "Adios", "Asta la Vista"];
    }
    Menu = __decorate([
        angular2_1.Component({
            selector: 'menu'
        }),
        angular2_1.View({
            template: "\n\t<ul>\n\t\t<li *ng-for=\"#m of menu\">\n\t\t\t<a href=\"#\">{{m}}</a>\n\t\t</li\n\t</ul>\t\n\t",
            styles: ["\n    li {\n      padding: 5px;\n\t  float:left;\n\t  list-style:none;\n\t  border:1px dashed;\n    }\n  "],
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], Menu);
    return Menu;
})();
exports.Menu = Menu;
