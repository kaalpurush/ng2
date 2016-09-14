import {Component, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/observable';
import {UserModel} from "../../model/user-model"
import {UserLogin, UserLogout, LoginForm} from "../user/user";
import { Router, ActivatedRoute }       from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: 'about.html'
})

export class About {
    id: string;
    user: UserModel;
    constructor(private route: ActivatedRoute, private router: Router, user: UserModel) {
        route.params.subscribe((params) => {
            this.id = params["id"];
        });
        this.user = user;
    }
}