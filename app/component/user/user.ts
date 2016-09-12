import {Component, EventEmitter} from '@angular/core';
import {UserModel} from '../../model/user-model';

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

export class LoginForm {
    user: UserModel;
    role: String;
    constructor(user: UserModel) {
        this.user = user;
    }

    doLogin(event) {
        //console.log(this.loginForm.value);
        event.preventDefault();
        this.user.login();
    }
}
