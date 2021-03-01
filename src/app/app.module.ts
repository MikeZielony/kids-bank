import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { StartComponent } from './pages/start/start.component';
import { MenuComponent } from './pages/menu/menu.component';
import { UserComponent } from './pages/user/user.component';
import {AppRoutingModule} from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {LoginComponent} from './admin/login/login.component';
import {RegisterComponent} from './admin/register/register.component';
import {ForgotPasswordComponent} from './admin/forgot-password/forgot-password.component';
import {VerifyEmailComponent} from './admin/verify-email/verify-email.component';
import { AdminComponent } from './admin/admin.component';
import {environment} from '../environments/environment';
import { BalanceComponent } from './pages/start/balance/balance.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    MenuComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    AdminComponent,
    BalanceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
