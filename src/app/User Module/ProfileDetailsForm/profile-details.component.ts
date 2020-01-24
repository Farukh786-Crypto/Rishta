import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
// import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit{
 

  ProfileDetails:FormGroup
  isSubmitted:boolean;
  
  
  constructor(private spinner: NgxSpinnerService) { 

    
    this.ProfileDetails = new FormGroup({
      Name: new FormControl('', Validators.required),
      Dob: new FormControl('', Validators.required),
      religion: new FormControl('', Validators.required),
      Mothertng: new FormControl('', Validators.required),
      Caste: new FormControl('',Validators.required),
      SubCaste: new FormControl('',Validators.required),
      Manglik: new FormControl('',Validators.required),
      Horoscope: new FormControl('',Validators.required),
      Marrital: new FormControl('', Validators.required),
      Height: new FormControl('',Validators.required),
      chkbx: new FormControl('',Validators.required)
  })
  }
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }
  onSubmit(data:any) {
    this.isSubmitted = true;
    if (!this.ProfileDetails.valid) {
      alert(JSON.stringify(data));
      
    //  this.toastr.success('Hello world!', 'Record SucessFully!');
      
      
      return false;
    } else {
      alert(JSON.stringify(this.ProfileDetails.value))
      //this.toastr.remove;
    }

  }
 
}