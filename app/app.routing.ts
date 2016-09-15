import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Device } from './component/device/device';
import { About } from './component/about/about';
import { Material } from './component/material/material';
import { LoginForm } from './component/user/user';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginForm, },
  { path: 'device', component: Device },
  { path: 'about/:id', component: About },
  { path: 'material', component: Material },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);