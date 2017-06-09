
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-welcome',
  templateUrl: './user-welcome.component.html',
  styleUrls: ['./user-welcome.component.css']
})
export class UserWelcomeComponent implements OnInit {
  @Input() name: string
  @Output() logout = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  logout_function(){
    this.logout.emit()
  }

}
