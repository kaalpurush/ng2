import {Component, EventEmitter} from '@angular/core';
import {UserModel} from "../../model/user-model"
import {UserLogin, UserLogout, LoginForm} from "../user/user";
import { Router, ActivatedRoute }       from '@angular/router';

@Component({
    selector: 'about',
    templateUrl: './app/component/about/about.html',
    directives: [
        UserLogin, UserLogout, LoginForm
    ]
})

export class About {
    id: string;
    user: UserModel;
    constructor(private route: ActivatedRoute, private router: Router, user: UserModel) {
        this.user = user;
        this.id = route.params['id']
    }
}