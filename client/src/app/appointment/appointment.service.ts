import { Injectable } from '@angular/core';

import { Http, Request, Response, Headers, RequestOptions } from "@angular/http"

import { Appointment } from "./appointment"

import "rxjs"

@Injectable()
export class AppointmentService {
  APPOINTMENTS: Appointment[] = []

  constructor(private http: Http) { this.getAppointments() }

  getAppointments(){
  	this.http.get("/appointments")
  		.map( (response: Response) => response.json() )
  		.subscribe(
  			data => {
	  			this.APPOINTMENTS = data; console.log("SHOULD BE ARRAY HERE", data)
	  		},
	  		(e) => {
	  			console.log(e)
	  		},
	  		() => {console.log("Getting Appts")}
  		)
  }

  create(appointment: Appointment){
  	const headers = new Headers({ "Content-Type": "application/json" })
  	const options = new RequestOptions({ headers: headers })

  	this.http.post("/appointment", appointment, options)
  		.subscribe(response => this.getAppointments())
  }

  delete(id: string){
  	this.http.delete("/appointment/"+id)
  		.subscribe(response => this.getAppointments())
  }
}
