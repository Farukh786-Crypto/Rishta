import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,RequiredValidator} from '@angular/forms'

@Component({
  selector: 'c',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changepassword: FormGroup
  constructor() {this.changepassword = new FormGroup({
    CurrentPassword:new FormControl('',[Validators.minLength(6),Validators.required]),
    NewPassword:new FormControl('',[Validators.minLength(6),Validators.required]),
    ConfirmPassword:new FormControl('',[Validators.minLength(6),Validators.required]),
}) }
  
    

  ngOnInit() {
  }

}