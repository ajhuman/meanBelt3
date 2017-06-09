
import { Component, OnInit } from '@angular/core';

import { UserService } from "./user.service"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user_name: string
  constructor(private user_service: UserService) { }

  ngOnInit() {
    this.check_status()
  }

  set_user_name(name){
    this.user_service.login(name)
      .then(()=>{
        console.log("Log in?")
        this.check_status()
      })
  }

  check_status(){
    this.user_service.check_status()
      .then(data => {
        console.log("check status complete", data)
        if(data.user){
          this.user_name = data.user.name
        } else {
          this.user_name = undefined
        }
      })
  }

  logout(){
    this.user_service.logout()
      .then(()=>this.check_status())
  }

}
