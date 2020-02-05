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
      this.router.navigate(['./admin']);
    }
    else if (this.username === 'user' && this.password === 'user@143') {
      console.log("Login Succesfully");
      this.router.navigate(['./users'])
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

