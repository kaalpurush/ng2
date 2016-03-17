System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var Search;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Search = (function () {
                function Search() {
                }
                Search.prototype.do_search = function () {
                    alert('Search component is supposed to search: ' + this.q);
                };
                Search = __decorate([
                    core_1.Component({
                        selector: 'search'
                    }),
                    core_1.View({
                        template: "\n\t<div class=\"input-group\">\n\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" [(ngModel)]=\"q\">\n\t\t<span class=\"input-group-btn\">\n\t\t\t<button class=\"btn btn-default\" type=\"button\" (click)=\"do_search($event);\">Go!</button>\n\t\t</span>\n\t</div>\t\n\t",
                        styles: ["\n    .input-group {\n      padding: 5px;\n\t  border:1px solid;\n    }\n  "],
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Search);
                return Search;
            }());
            exports_1("Search", Search);
        }
    }
});
//# sourceMappingURL=search.js.map