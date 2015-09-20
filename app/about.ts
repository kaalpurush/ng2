import {Component, View, EventEmitter} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
import {FormBuilder, Validators, ControlGroup, FORM_DIRECTIVES} from "angular2/angular2";
import {UserModel} from "./model/user-model"
import { UserLogin} from "./user-login";
import {UserLogout} from "./user-logout";

@Component({
    selector: 'about',
    viewBindings: [FormBuilder]
})

@View({
    templateUrl: './app/about.html',
    directives: [
        FORM_DIRECTIVES, UserLogin, UserLogout
    ]
})

export class About {
    id: string;
    loginForm: ControlGroup;
	user: UserModel;
    constructor(params: RouteParams, fb: FormBuilder, user: UserModel) {
		this.user = user;
        this.id = params.get('id');
        this.loginForm = fb.group({
            email: ['', Validators.compose([Validators.required, this.invalidEmail])],
            password: ['', Validators.required]
        });

    }

    invalidEmail(control) {
        if (!control.value.match(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)) {
            return { invalidEmail: true };
        }
    }

    doLogin(event) {
        console.log(this.loginForm.value);
        event.preventDefault();
		this.user.login();
    }
}