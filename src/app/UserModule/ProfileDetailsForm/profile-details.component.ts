import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProfileDetailsService } from './profile-details.service';

// import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css',
              '../user.component.css'],
  providers:[ProfileDetailsService]
})
export class ProfileDetailsComponent implements OnInit {


  ProfileDetails: FormGroup
  isSubmitted: boolean;
  ProfileInfo: any
  mothertounge: {};
  allreligions: {};
  allcastes: {};
  allsubcastes: {};

  constructor(private spinner: NgxSpinnerService, private pd: ProfileDetailsService) {


    this.ProfileDetails = new FormGroup({
      create_profile_by: new FormControl('', [Validators.required]),
      Name: new FormControl('', Validators.required),
      Dob: new FormControl('', Validators.required),
      religion: new FormControl('', Validators.required),
      Mothertng: new FormControl('', Validators.required),
      Caste: new FormControl('', Validators.required),
      SubCaste: new FormControl('', Validators.required),
      Manglik: new FormControl('', Validators.required),
      Horoscope: new FormControl('', Validators.required),
      Marrital: new FormControl('', Validators.required),
      Height: new FormControl('', Validators.required),
      chkbx: new FormControl('', Validators.required)
    })
  }
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    this.pd.getMothertounge().subscribe(
      data => this.mothertounge = data
    );
    this.pd.getReligion().subscribe(
      data => this.allreligions = data
    );
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);



    
  }

  // public GetAllMothertounge()
  // {
  //     this.pd.getMothertounge().subscribe(res=>{this.ProfileInfo=res},err=>{this.ProfileInfo=err})
  // }
  public getrel() {
    this.pd.getReligion().subscribe(
      data => this.allreligions = data
    );
  }
  

  public onChangeReligion(religion_id: number) {
   
    if (religion_id) {
      this.pd.getCaste(religion_id).subscribe(
        data => {
          this.allcastes = data;
          this.allsubcastes = null;
        });
    }
    else {
      this.allcastes = null;
      this.allsubcastes = null;

    }
  }
  // onChangeReligion(religion_Id: number) {
  //    if (religion_Id) {
  //     this.pd.getCaste(religion_Id).subscribe(
  //       data => 
  //         this.allcastes = data;
  //         this.allsubcastes = null;}

  //     );

  onChangeSubCaste(caste_id: number) {
    if (caste_id) {
      this.pd.getSubcaste(caste_id).subscribe(
        data => {
          this.allsubcastes = data;
          //this.allsubcastes = null;
        });
    }
    else {
      this.allsubcastes = null;
      //this.allsubcastes = null;
  
    }
  }

  onSubmit(data: any) {
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






