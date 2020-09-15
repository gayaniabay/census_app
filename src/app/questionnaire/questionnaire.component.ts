import { Component, OnInit } from '@angular/core';
import {  UserService } from '../services/user.service'

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  userData : any
  user : any

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getUserDataFn();
  }

  getUserDataFn() {
    this.userService.getUserData().subscribe(data => {
      this.userData = data
      this.user = this.userData
    })
  }
}
