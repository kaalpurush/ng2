import {Component, View, EventEmitter} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
import {UserModel} from "./model/user-model"
import {UserLogin, UserLogout, LoginForm} from "./user";

@Component({
    selector: 'about',
    viewBindings: []
})

@View({
    templateUrl: './app/about.html',
    directives: [
        UserLogin, UserLogout, LoginForm
    ]
})

export class About {
    id: string;
	user: UserModel;
    constructor(params: RouteParams, user: UserModel) {
		this.user = user;
        this.id = params.get('id');
    }
}