import {} from 'angular2/angular2'

module CustomValidators {
	export class TypeValidators {
		static tel(control: ng.Control) {
			if (!control.value.match(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)) {
				return { tel: true }
			}
		}

		static email(control: ng.Control) {
			if (!control.value.match(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)) {
				return { email: true }
			}
		}
	}

}

export = CustomValidators;

