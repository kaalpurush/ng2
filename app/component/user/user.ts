import {Component, EventEmitter, ViewChild, AfterViewChecked} from '@angular/core';
import {UserModel} from '../../model/user-model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'user-login',
    template: `
	{{user.name}}
	<button class="btn-sm btn-primary" [hidden]="user.isLogged()" (click)="user.login()">Login</button>
	`,
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
	`
})

export class UserLogout {
    user: UserModel;
    constructor(user: UserModel) {
        this.user = user;
    }
}

@Component({
    selector: 'login-form',
    templateUrl: './app/component/user/login.html'
})

export class LoginForm implements AfterViewChecked {
    loginForm: NgForm;
    user: UserModel;
    role: String;
    cred: any = {};
    @ViewChild('loginForm') currentForm: NgForm;
    constructor(user: UserModel) {
        this.user = user;
        this.cred.email = '';
        this.cred.password = '';
    }

    doLogin(event) {
        console.log(this.loginForm);
        this.user.login();
    }

    ngAfterViewChecked() {
        if (this.currentForm === this.loginForm) { return; }
        this.loginForm = this.currentForm;
    }
}
