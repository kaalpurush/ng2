import {Component, View} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
import {FormBuilder, Validators, ControlGroup, FORM_DIRECTIVES} from "angular2/angular2";

@Component({
    selector: 'about',
    viewBindings: [FormBuilder]
})

@View({
    templateUrl: 'about.html',
    directives: [
        FORM_DIRECTIVES, 
    ]
})

export class About {
    id: string;
    loginForm: ControlGroup;
    constructor(params: RouteParams, fb: FormBuilder){
        this.id = params.get('id');
        this.loginForm = fb.group({
            email: ['', Validators.compose([Validators.required, this.invalidEmail ])],
            password: ['', Validators.required]
        });
    }
    
    invalidEmail(control) {  
        if (!control.value.match(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)){  
            return {invalidEmail: true};  
        }
    }
    
    doLogin(event) {
        console.log(this.loginForm.value);    
        event.preventDefault();
    }
}