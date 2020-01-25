import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
@Component({
  
  selector: 'app-family-details',
  templateUrl: './Family-details.component.html'

})
export class FamilyDetailsComponent{

  FamilyDetailsModel:FormGroup
  isSubmitted:boolean;

  constructor() { 

    this.FamilyDetailsModel = new FormGroup({
      familytype: new FormControl('', Validators.required),
      fatherocc: new FormControl('', Validators.required),
      motherocc: new FormControl('', Validators.required),
      brother: new FormControl('', Validators.required),
      sister: new FormControl('',Validators.required),
      livingstate: new FormControl('',Validators.required),
      livingcity: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      aboutfamily: new FormControl('',Validators.required)
      
  })
  }
  onSubmit(data:any) {
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
 
}

