import { Component, OnInit } from '@angular/core'
import { FormControl, Validators, FormGroup } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { CareerService } from './career.service';//imported
import { Observable } from 'rxjs';
import { CareerProfile } from 'src/app/model';

@Component({
    selector: 'career-comp',
    templateUrl: './career.component.html',
    styleUrls: ['./career.component.css',
        '../user.component.css'],
    providers: [CareerService]
})
export class CareerComponent implements OnInit {
    
    stateInfo: any[] = [];
    countryInfo: any[] = [];
    cityInfo: any[] = [];
    country1: string;
    state1: string;
    // stateObject:string;
careerDetails: FormGroup
    // CareerService: any;
    constructor(private toastr: ToastrService, private Career: CareerService) { }

    // Cities:string;
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
            Income: new FormControl('', [Validators.required,Validators.minLength(5)]),
            Express: new FormControl('', [Validators.required,Validators.minLength(200)])
        });
    }
    getCountries() {
        this.Career.allCountries().
            subscribe(
                data => {
                    this.countryInfo = data.Country;
                    console.log('Data:', this.countryInfo);
                },
                err => console.log(err),
                () => console.log('complete')
            )
    }
    onChangeCountry() {
        console.log('In State')
        this.stateInfo =  this.countryInfo;
        // this.stateInfo = this.countryInfo.filter(x => x.country_name === this.country1)[0].stateObject;
        console.log(this.stateInfo);
        this.cityInfo = this.stateInfo[0].cityObject;
        // console.log(this.stateInfo);
    }
    onChangeState() {
        console.log('In City')
        this.cityInfo = this.stateInfo.filter(y => y.state_name === this.state1)[0].cityObject;
        // this.cityInfo = this.stateInfo[stateValue].Cities;
        console.log(this.cityInfo);
    }
    // getCountries() {
    //     this.Career.allCountries().
    //         subscribe(
    //             data => {
    //                 this.countryInfo = data.Countries;
    //                 //console.log('Data:', this.countryInfo);
    //             },
    //             err => console.log(err),
    //             () => console.log('complete')
    //         )
    // }
    // onChangeCountry() {
    //     // console.log('In State')
    //     this.stateInfo = this.countryInfo.filter(x => x.CountryName === this.country)[0].States;
    //     this.cityInfo = this.stateInfo[0].Cities;
    //     console.log(this.stateInfo);
    // }
    // onChangeState() {
    //     // console.log('In City')
    //     this.cityInfo = this.stateInfo.filter(y => y.StateName === this.state)[0].Cities;
    //     // this.cityInfo = this.stateInfo[stateValue].Cities;
    //     console.log(this.cityInfo);
    // }
}
