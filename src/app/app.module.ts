import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';

@NgModule({
  imports: [
    MainPageComponent,
    AppComponent,
    LoginPageComponent,
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  providers: []
})
export class AppModule { }
