import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  name: string
  @Output() login = new EventEmitter

  constructor() { }

  ngOnInit() {
  }

  login_function(){
    this.login.emit(this.name)
    this.name = ""
  }

}
