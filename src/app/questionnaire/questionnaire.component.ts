import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class QuestionnaireComponent implements OnInit {

  userData : any;
  user : any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(public userService: UserService,private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.getUserDataFn();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }

  getUserDataFn() {
    this.userService.getUserData().subscribe(data => {
      this.userData = data
      this.user = this.userData
    })
  }
}
