import {Component, View, bootstrap, bind, NgFor, EventEmitter} from 'angular2/angular2';
import {UserModel} from './model/user-model'

@Component({
	selector: 'user-logout'
})

@View({
    template: `
	{{user.name}}
	<button [hidden]="!user.isLogged()" (click)="user.logout()">Logout</button>
	`,
    directives: [NgFor]
})

export class UserLogout {
	user:UserModel;
    constructor(user: UserModel) {
		this.user=user;
    }
}
