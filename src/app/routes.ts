import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routeConfig: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/login"
  },
  {
    path: 'login',
    component: LoginPageComponent,
    title: 'Login'
  },
  {
    path: 'invitacion',
    component: MainPageComponent,
    title: 'Invitación'
  },
  {
    path: '**',
    component: LoginPageComponent,
    title: 'Login'
  }
];

export default routeConfig;