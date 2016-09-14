import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Device} from './component/device/device';
import {About} from './component/about/about';
import {Menu} from './component/menu/menu';
import {Material} from './component/material/material';
import {LoginForm, UserLogout} from './component/user/user';
import {UserModel} from './model/user-model';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login',pathMatch:'full' },
  { path: 'login', component: LoginForm, },
  { path: 'device', component: Device },
  { path: 'about/:id', component: About },
  { path: 'material', component: Material },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);