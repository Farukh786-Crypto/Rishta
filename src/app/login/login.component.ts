import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  ngOnInit() {
  }
  constructor(private router: Router) { }

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl(''),
  });
  login() {
    if (this.username === 'admin' && this.password === 'admin@143') {
      console.log("Login succesfully");
      sessionStorage.setItem('isLoginUser','true');
      sessionStorage.setItem('userRole','admin');
      setTimeout(()=>{this.router.navigate(['./admin']);},250);
    }
    else if (this.username === 'user' && this.password === 'user@143') {
      console.log("Login Succesfully");
      sessionStorage.setItem('isLoginUser','true');
      sessionStorage.setItem('userRole','user');
      setTimeout(()=>{
        this.router.navigate(['./users']);
      },250)
    }
    else {
      console.log("Login Failed");
    }
  }
}