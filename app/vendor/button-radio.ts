import {
Directive,
Self, NgModel, ElementRef,
ControlValueAccessor, OnInit
} from 'angular2/angular2';


@Directive({
	selector: 'input[type=radio][ng-model]',
	properties: ['btnRadio'],
	host: {
		'(click)': 'onClick()',
		'[class.active]': 'isActive'
	}
})
export class ButtonRadio implements ControlValueAccessor, OnInit {
	public btnRadio: string;

	constructor( @Self() public cd: NgModel, public el: ElementRef) {
		// hack!
		cd.valueAccessor = this;
	}

	onInit() {
	}

	// hack view model!
	public get value() {
		return this.cd.viewModel;
	}

	public set value(value) {
		this.cd.viewModel = value;
	}

	// view -> model
	onClick() {
		this.cd.viewToModelUpdate(this.el.nativeElement.value);
	}

	// ControlValueAccessor
	// model -> view
	writeValue(value: any) {
		this.value = value;
		if (this.el.nativeElement.value == this.value)
			this.el.nativeElement.checked = true;
		else
			this.el.nativeElement.checked = false;
	}

	onChange = (_: any) => { };
	onTouched = () => { };

	registerOnChange(fn: (_: any) => {}): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => {}): void {
		this.onTouched = fn;
	}

}
