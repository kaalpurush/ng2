import {Injectable, EventEmitter, Component} from 'angular2/angular2'

@Injectable()
export class UserModel {
	name: string;

    constructor() {
		this.name = "Visitor";
    }
	
	setAdmin() {
		this.name = "Admin";
	}

	getName() {
		return this.name;
	}

}