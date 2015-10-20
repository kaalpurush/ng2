import {Renderer, Directive, ElementRef, DefaultValueAccessor, NgControl, Self,NG_VALUE_ACCESSOR, ControlValueAccessor} from 'angular2/angular2';


const CHECKBOX_VALUE_ACCESSOR = CONST_EXPR(new Provider(
    NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => RadioControlValueAccessor), multi: true}));

/**
 * The accessor for writing a value and listening to changes on a checkbox input element.
 *
 *  ### Example
 *  ```
 *  <input type="checkbox" [ng-control]="rememberLogin">
 *  ```
 */
@Directive({
  selector:
      'input[type=radio]',
  host: {'(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()'},
  bindings: [CHECKBOX_VALUE_ACCESSOR]
})
export class RadioControlValueAccessor implements ControlValueAccessor {
  onChange = (_) => {};
  onTouched = () => {};

  constructor(private _renderer: Renderer, private _elementRef: ElementRef) {}

  writeValue(value: any): void { setProperty(this._renderer, this._elementRef, "checked", value); }
  registerOnChange(fn: (_: any) => {}): void { this.onChange = fn; }
  registerOnTouched(fn: () => {}): void { this.onTouched = fn; }
}