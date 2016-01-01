import {Component, View, bind, EventEmitter} from 'angular2/core';
import {UserModel} from '../../model/user-model'
import {FormBuilder, Validators, ControlGroup, FORM_DIRECTIVES} from "angular2/common";
import {default as CustomValidators} from '../../helper/custom_validators';
import {RadioControlValueAccessor} from '../../helper/radio_control_value_accessor';

@Component({
	selector: 'user-login'
})

@View({
    template: `
	{{user.name}}
	<button class="btn-sm btn-primary" [hidden]="user.isLogged()" (click)="user.login()">Login</button>
	`,
    directives: []
})

export class UserLogin {
	user: UserModel;
    constructor(user: UserModel) {
		this.user = user;
    }
}

@Component({
	selector: 'user-logout'
})

@View({
    template: `
	{{user.name}}
	<button class="btn-sm btn-primary" [hidden]="!user.isLogged()" (click)="user.logout()">Logout</button>
	`,
    directives: []
})

export class UserLogout {
	user: UserModel;
    constructor(user: UserModel) {
		this.user = user;
    }
}

@Component({
	selector: 'login-form',
	viewBindings: [FormBuilder]
})

@View({
    templateUrl: './app/component/user/login.html',
    directives: [FORM_DIRECTIVES, RadioControlValueAccessor]
})

export class LoginForm {
	loginForm: ControlGroup;
	user: UserModel;
	type: number = 1;
    constructor(fb: FormBuilder, user: UserModel) {
		this.user = user;
        this.loginForm = fb.group({
            email: ['', Validators.compose([Validators.required, CustomValidators.email])],
            password: ['', Validators.required],
            remember: ['', Validators.required],
            role: ['', Validators.required]
        });
    }

    doLogin(event) {
        console.log(this.loginForm.value);
        event.preventDefault();
		this.user.login();
    }
}
