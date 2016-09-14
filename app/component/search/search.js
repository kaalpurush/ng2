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
var Search = (function () {
    function Search() {
        this.onsearch = new core_1.EventEmitter();
    }
    Search.prototype.do_search = function () {
        this.onsearch.emit(this.q);
    };
    return Search;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Search.prototype, "onsearch", void 0);
Search = __decorate([
    core_1.Component({
        selector: 'search',
        template: "\n\t<div class=\"input-group\">\n\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" [(ngModel)]=\"q\">\n\t\t<span class=\"input-group-btn\">\n\t\t\t<button class=\"btn btn-default\" type=\"button\" (click)=\"do_search();\">Go!</button>\n\t\t</span>\n\t</div>\t\n\t",
        styles: ["\n    .input-group {\n      padding: 5px;\n\t  border:1px solid;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [])
], Search);
exports.Search = Search;
//# sourceMappingURL=search.js.map