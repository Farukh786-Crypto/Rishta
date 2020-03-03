import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';
// import { ToastrService } from 'ngx-toastr';
@Component({

  selector: 'app-family-details',
  templateUrl: './Family-details.component.html',
  styleUrls:['./Family-details.component.css',
               '../user.component.css']

})
export class FamilyDetailsComponent {

  FamilyDetailsModel: FormGroup
  isSubmitted: boolean;
  title:string='Family Details'
  constructor() {
  //  console.log('---------------------------------------');
    this.FamilyDetailsModel = new FormGroup({
      familytype: new FormControl('', Validators.required),
      fatherocc: new FormControl('', Validators.required),
      motherocc: new FormControl('', Validators.required),
      brother: new FormControl('', Validators.required),
      sister: new FormControl('', Validators.required),
      livingstate: new FormControl('', Validators.required),
      livingcity: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      aboutfamily: new FormControl('', Validators.required),
      brothermarried: new FormControl('', Validators.required),
      sistermarried: new FormControl('', Validators.required)
    })
  }
  onSubmit(data: any) {
    this.isSubmitted = true;
    if (!this.FamilyDetailsModel.valid) {
      alert(JSON.stringify(data));

      //  this.toastr.success('Hello world!', 'Record SucessFully!');


      return false;
    } else {
      alert(JSON.stringify(this.FamilyDetailsModel.value))
      //this.toastr.remove;
    }

  }


  brotherddl: Number

  selectChangeHandler(event: any) {
    this.brotherddl = event.target.value;
    console.log("if change in method " + this.brotherddl)
  }

}