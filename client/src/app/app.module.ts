import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserWelcomeComponent } from './user/user-welcome/user-welcome.component';
import { UserService } from "./user/user.service";
// import { routing } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserLoginComponent,
    UserWelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    // routing
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
