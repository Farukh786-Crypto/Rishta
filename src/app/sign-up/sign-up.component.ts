import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
// import { RegService } from './Register.service';
import { Router } from '@angular/router';
import { Registerprofile } from 'src/app/model';


export interface profCreated {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  ngOnInit() {

  }


  states: string[] = [
    'Self', 'Parents'
  ];

  createdby = [
    { id: 1, value: 'Self' },
    { id: 2, value: 'Parents' }
  ];

  disabledAgreement: boolean = true
  RegisterModel: FormGroup
  isSubmited: boolean;
  required: Boolean;
  title: 'Farukh';
  hide = true;

  disableRipple: Boolean;
  pCreated: profCreated[] = [{ value: 'self', viewValue: 'Self' }, { value: 'parent', viewValue: 'Parent' }]

  constructor(private toastr: ToastrService,  private _router: Router) {


    this.RegisterModel = new FormGroup({

      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4}))$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      mobile: new FormControl('', [Validators.required, Validators.pattern(/^(\+\d{0,1,3}[- ]?)?\d{10}$/)]),
      mobileno: new FormControl('', [Validators.required, Validators.pattern(/^(\+\d{0,1,3}[- ]?)?\d{10}$/)]),
      gender: new FormControl('male', [Validators.required]),
      date: new FormControl(new Date())

    })


  }

  // public RegisterPost: any;

  // public RegisterUser(content: Registerprofile) {

  //   this.register.addContent(content).subscribe(res => {

  //     this.RegisterPost = res,
  //       this.toastr.success('Sucess!!')
  //   },
  //     err => { this.RegisterPost = err })
  // }

}
