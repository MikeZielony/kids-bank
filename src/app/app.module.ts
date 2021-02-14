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

const firebaseConfig = {
  apiKey: "AIzaSyDfDIwQAFIe2-O09fTq561VYcp4Sl8KPCQ",
  authDomain: "kids-bank-de6c7.firebaseapp.com",
  projectId: "kids-bank-de6c7",
  storageBucket: "kids-bank-de6c7.appspot.com",
  messagingSenderId: "952861204542",
  appId: "1:952861204542:web:b2f76458577a594b33316f"
};

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
    AdminComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
