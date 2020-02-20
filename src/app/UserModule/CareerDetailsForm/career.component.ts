import { Component, OnInit } from '@angular/core'
import { FormControl, Validators, FormGroup } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { CareerService } from './career.service';//imported
import { Observable } from 'rxjs';
import { CareerProfile } from 'src/app/model';
@Component({
selector:'career-comp',
templateUrl:'./career.component.html',
styleUrls: ['./career.component.css',
            '../user.component.css'],
providers: [CareerService]
})


export class CareerComponent implements OnInit {

    careerDetails: FormGroup
    country: {};
    state: {};
    city: {};
    bachlorDegree: {};
    highestDegree: {};
    emplyeed: {};
    occupation: {};


    CareerService: any;
    constructor(private toastr: ToastrService, private Career: CareerService) { }
     
    

  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];

  ngOnInit() {
 this.getCountries();
 this.careerDetails = new FormGroup({
    Country: new FormControl('', Validators.required),
    State: new FormControl('', [Validators.required]),
    City: new FormControl('', [Validators.required]),
    HighestDegree: new FormControl('', [Validators.required]),
    BachlorDegree: new FormControl('', [Validators.required]),
    Emplyeed: new FormControl('', [Validators.required]),
    Occupation: new FormControl('', [Validators.required]),
    Income: new FormControl('', [Validators.required]),
    Express: new FormControl('', [Validators.required])
});



  }
 
  getCountries(){
    this.Career.allCountries().
    subscribe(
      data => {
        this.countryInfo=data.Countries;
        //console.log('Data:', this.countryInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }

  onChangeCountry(countryValue) {
      console.log("hi");
    this.stateInfo=this.countryInfo[countryValue].States;
    this.cityInfo=this.stateInfo[0].Cities;
    // console.log(this.cityInfo);
  }

  onChangeState(stateValue) {
    this.cityInfo=this.stateInfo[stateValue].Cities;
    //console.log(this.cityInfo);
  }
    
}

     