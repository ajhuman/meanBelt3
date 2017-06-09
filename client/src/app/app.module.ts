import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserWelcomeComponent } from './user/user-welcome/user-welcome.component';
import { UserService } from "./user/user.service";
import { AppointmentService } from "./appointment/appointment.service";
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import { AppointmentNewComponent } from './appointment/appointment-new/appointment-new.component';
import { SearchapptsPipe } from './appointment/searchappts.pipe';
// import { routing } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserLoginComponent,
    UserWelcomeComponent,
    AppointmentComponent,
    AppointmentListComponent,
    AppointmentNewComponent,
    SearchapptsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    // routing
  ],
  providers: [UserService, AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
