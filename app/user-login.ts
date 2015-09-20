import {Component, View, bootstrap, bind, NgFor, EventEmitter} from 'angular2/angular2';
import {UserModel} from './model/user-model'

@Component({
	selector: 'user-login'
})

@View({
    template: `
	{{user.name}}
	<button [hidden]="user.isLogged()" (click)="user.login()">Login</button>
	`,
    directives: [NgFor]
})

export class UserLogin {
	user:UserModel;
    constructor(user: UserModel) {
		this.user=user;
    }
}