import { provideRouter, RouterConfig } from '@angular/router';
import {Device} from './component/device/device';
import {About} from './component/about/about';
import {Menu} from './component/menu/menu';
import {LoginForm, UserLogout} from './component/user/user';
import {UserModel} from './model/user-model';

export const routes: RouterConfig = [
    { path: 'login', component: LoginForm },
    { path: 'device', component: Device},
    { path: 'about/:id', component: About},
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];