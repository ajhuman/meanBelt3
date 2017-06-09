import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http"

import "rxjs"

const HEADERS = new Headers({ "Content-Type": "application/json"})
const OPTIONS = new RequestOptions({ headers: HEADERS })

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  login(name: string){
  	return this.http.post("/login", {name: name})
  			.toPromise()
  }

  check_status(){
  	return this.http.get("/login_status")
  			.map(data => data.json())
  			.toPromise()
  }

  logout(){
  	return this.http.get("/logout")
  			.toPromise()
  }

}
