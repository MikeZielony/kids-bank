import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import {BalanceComponent} from '../pages/start/balance/balance.component';

const  routes: Routes  = [
  {
    path:  '',
    component: AdminComponent,
    children: [
      { path: 'login', component:  LoginComponent},
      { path: 'register', component:  RegisterComponent },
      { path: 'forgot-password', component:  ForgotPasswordComponent },
      { path: 'verify-email', component:  VerifyEmailComponent },
      { path: 'balance', component: BalanceComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
