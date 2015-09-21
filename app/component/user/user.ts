import {Component, View, bootstrap, bind, NgFor, EventEmitter} from 'angular2/angular2';
import {UserModel} from '../../model/user-model'
import {FormBuilder, Validators, ControlGroup, FORM_DIRECTIVES} from "angular2/angular2";
import {TypeValidators} from '../../helper/custom_validators';

@Component({
	selector: 'user-login'
})

@View({
    template: `
	{{user.name}}
	<button class="btn-sm btn-primary" [hidden]="user.isLogged()" (click)="user.login()">Login</button>
	`,
    directives: [NgFor]
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
    directives: [NgFor]
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
    directives: [NgFor, FORM_DIRECTIVES]
})

export class LoginForm {
	loginForm: ControlGroup;
	user: UserModel;
    constructor(fb: FormBuilder, user: UserModel) {
		this.user = user;
        this.loginForm = fb.group({
            email: ['', Validators.compose([Validators.required, TypeValidators.email])],
            password: ['', Validators.required]
        });
    }

    doLogin(event) {
        console.log(this.loginForm.value);
        event.preventDefault();
		this.user.login();
    }
}
