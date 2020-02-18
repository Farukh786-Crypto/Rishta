import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  username: string;
  password: string;

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

