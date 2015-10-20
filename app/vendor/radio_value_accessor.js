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
var CHECKBOX_VALUE_ACCESSOR = CONST_EXPR(new Provider(angular2_1.NG_VALUE_ACCESSOR, { useExisting: forwardRef(function () { return RadioControlValueAccessor; }), multi: true }));
/**
 * The accessor for writing a value and listening to changes on a checkbox input element.
 *
 *  ### Example
 *  ```
 *  <input type="checkbox" [ng-control]="rememberLogin">
 *  ```
 */
var RadioControlValueAccessor = (function () {
    function RadioControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    RadioControlValueAccessor.prototype.writeValue = function (value) { setProperty(this._renderer, this._elementRef, "checked", value); };
    RadioControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    RadioControlValueAccessor = __decorate([
        angular2_1.Directive({
            selector: 'input[type=radio]',
            host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
            bindings: [CHECKBOX_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [angular2_1.Renderer, angular2_1.ElementRef])
    ], RadioControlValueAccessor);
    return RadioControlValueAccessor;
})();
exports.RadioControlValueAccessor = RadioControlValueAccessor;
//# sourceMappingURL=radio_value_accessor.js.map