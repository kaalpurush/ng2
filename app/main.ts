import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS, HTTP_PROVIDERS 
])
.catch(err => console.error(err));