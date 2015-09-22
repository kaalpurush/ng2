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
var Search = (function () {
    function Search() {
    }
    Search.prototype.do_search = function () {
        alert('Search component is supposed to search: ' + this.q);
    };
    Search = __decorate([
        angular2_1.Component({
            selector: 'search'
        }),
        angular2_1.View({
            template: "\n\t<div class=\"input-group\">\n\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" [(ng-model)]=\"q\">\n\t\t<span class=\"input-group-btn\">\n\t\t\t<button class=\"btn btn-default\" type=\"button\" (click)=\"do_search($event);\">Go!</button>\n\t\t</span>\n\t</div>\t\n\t",
            styles: ["\n    .input-group {\n      padding: 5px;\n\t  border:1px solid;\n    }\n  "],
            directives: [angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Search);
    return Search;
})();
exports.Search = Search;
//# sourceMappingURL=search.js.map