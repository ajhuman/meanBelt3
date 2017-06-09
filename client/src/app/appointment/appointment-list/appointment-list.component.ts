import { Component, OnInit } from '@angular/core';
import { Appointment } from "./../appointment"

import { AppointmentService } from "./../appointment.service";
import { UserService } from "./../../user/user.service"

import { SearchapptsPipe } from './../searchappts.pipe';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  search_string: string = ""

  constructor(private appointmentService: AppointmentService, private userService: UserService) { }

  ngOnInit() {
  }

  delete(id){
  	this.appointmentService.delete(id)
  }

}
