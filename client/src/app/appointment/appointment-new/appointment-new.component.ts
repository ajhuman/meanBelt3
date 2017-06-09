import { Component, OnInit } from '@angular/core';
import { AppointmentService } from './../appointment.service'
import { Appointment } from './../appointment'


@Component({
  selector: 'app-appointment-new',
  templateUrl: './appointment-new.component.html',
  styleUrls: ['./appointment-new.component.css']
})
export class AppointmentNewComponent implements OnInit {

     new_appointment: Appointment = new Appointment()

      constructor(private appointmentService: AppointmentService) { }

      ngOnInit() {
      }

      create(){
      	this.appointmentService.create(this.new_appointment)
      	this.new_appointment = new Appointment()
      }

    }
