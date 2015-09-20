import {Component, View, bootstrap, bind, NgFor, EventEmitter} from 'angular2/angular2';
import {UserModel} from './model/user-model'

@Component({
	selector: 'user',
	viewBindings: [UserModel],
	events: ['userChange']
})

@View({
    template: `
	{{userName}}
	<button (click)="setAdmin()">Admin</button>
	`,
    directives: [NgFor]
})

export class User {
	userName: string;
	userChange: EventEmitter;
    constructor(private user: UserModel) {
		this.userChange = new EventEmitter();
		this.userName = user.name;
    }
	
	onUserChange(event){
		this.userName=event.user.name;
	}

	setAdmin() {
		//this.userName="Kaal";
		//return;
		this.user.setAdmin();
		this.userChange.next({name: this.user.name});	
		console.log(this.user);
	}
}
