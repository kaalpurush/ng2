import { Control } from 'angular2/common';

module CustomValidators {
	export class TypeValidators {
		static tel(control: Control) {
			if (!control.value.match(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)) {
				return { tel: true }
			}
		}

		static email(control: Control) {
			if (!control.value.match(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)) {
				return { email: true }
			}
		}
	}

}

export default CustomValidators.TypeValidators