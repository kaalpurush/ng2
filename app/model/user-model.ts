import {Injectable, EventEmitter, Component} from 'angular2/angular2'

@Injectable()
export class UserModel {
	name: string;

	constructor() {
		this.name = "Visitor"
	}

	login() {
		this.name = "Admin";
	}

	logout() {
		this.name = "Visitor";
	}
	
	isLogged(){
		return this.name=="Admin";
	}
}