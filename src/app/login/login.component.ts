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
      localStorage.setItem('isLoginUser','true');
      localStorage.setItem('userRole','admin');
      setTimeout(()=>{this.router.navigate(['./admin']);},250);
    }
    else if (this.username === 'user' && this.password === 'user@143') {
      console.log("Login Succesfully");
      localStorage.setItem('isLoginUser','true');
      localStorage.setItem('userRole','user');
      setTimeout(()=>{
        this.router.navigate(['./users']);
      },250)
    }
    else {
      console.log("Login Failed");
    }
  }

}


// 1) create login module & routing  File
// 2) app.routing path set login
// 3) login -> obj router 
//       login(){
//         if(this.formbgro.controlName==="abc" && ){

//           Router.nevegate('/default-dashboard')
//         }else if( this.f ){
//           Router.nevegate('/user')

//         }
//         else{
//           login failed 
//         }
//       }

