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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var ButtonRadio = (function () {
    function ButtonRadio(cd, el) {
        this.cd = cd;
        this.el = el;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        // hack!
        cd.valueAccessor = this;
    }
    ButtonRadio.prototype.onInit = function () {
    };
    Object.defineProperty(ButtonRadio.prototype, "value", {
        // hack view model!
        get: function () {
            return this.cd.viewModel;
        },
        set: function (value) {
            this.cd.viewModel = value;
        },
        enumerable: true,
        configurable: true
    });
    // view -> model
    ButtonRadio.prototype.onClick = function () {
        this.cd.viewToModelUpdate(this.el.nativeElement.value);
    };
    // ControlValueAccessor
    // model -> view
    ButtonRadio.prototype.writeValue = function (value) {
        this.value = value;
        if (this.el.nativeElement.value == this.value)
            this.el.nativeElement.checked = true;
        else
            this.el.nativeElement.checked = false;
    };
    ButtonRadio.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonRadio.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ButtonRadio = __decorate([
        angular2_1.Directive({
            selector: 'input[type=radio][ng-model]',
            properties: ['btnRadio'],
            host: {
                '(click)': 'onClick()',
                '[class.active]': 'isActive'
            }
        }),
        __param(0, angular2_1.Self()), 
        __metadata('design:paramtypes', [angular2_1.NgModel, angular2_1.ElementRef])
    ], ButtonRadio);
    return ButtonRadio;
})();
exports.ButtonRadio = ButtonRadio;
//# sourceMappingURL=button-radio.js.map