import {Component, bind, EventEmitter} from '@angular/core';
import {UserModel} from '../../model/user-model'
import {FormBuilder, Validators, ControlGroup, FORM_DIRECTIVES} from "@angular/common";
import {default as CustomValidators} from '../../helper/custom_validators';

@Component({
    selector: 'user-login',
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
    selector: 'user-logout',
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
        templateUrl: './app/component/user/login.html',
    directives: [FORM_DIRECTIVES],
    viewProviders: [FormBuilder]
})

export class LoginForm {
    loginForm: ControlGroup;
    user: UserModel;
    role: String;
    constructor(fb: FormBuilder, user: UserModel) {
        this.user = user;
        this.loginForm = fb.group({
            // email: ['', Validators.required],//Validators.compose([Validators.required, CustomValidators.email])],
            // password: ['', Validators.required],
            // remember: ['', Validators.required],
            // role: ['', Validators.required]
        });
    }

    doLogin(event) {
        console.log(this.loginForm.value);
        event.preventDefault();
        this.user.login();
    }
}
