import{ Component }from '@angular/core'
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators,NgForm } from '@angular/forms'
@Component({
selector:'Lifestyle-Comp',
templateUrl:'./LifestyleDetails.component.html',
styleUrls:['../user.component.css']

 
})
export class LifestyleComponent{
  LifestyleModel: FormGroup
  isSubmited: boolean;
title:string='Lifestyle Component demo'
constructor(private toastr: ToastrService,  ){
  this.LifestyleModel = new FormGroup({
    
house: new FormControl('', [Validators.required]),
car: new FormControl('', [Validators.required]),
Languages: new FormControl('', [Validators.required]),
Food: new FormControl('', [Validators.required]),
Books: new FormControl('', [Validators.required]),
Favouritefood: new FormControl('', [Validators.required]),
sports: new FormControl('', [Validators.required]),
Music: new FormControl('', [Validators.required]),
Interests: new FormControl('', [Validators.required]),
Destination: new FormControl('', [Validators.required]),
Movies: new FormControl('', [Validators.required]),
drink: new FormControl('', [Validators.required]),
smoke: new FormControl('', [Validators.required]),
  });
}
onFormSubmit(form:NgForm)  
  {  
    console.log(form);  
  }  


  onSaveSuccess(data: any) {

    this.isSubmited = true;
    if (this.LifestyleModel.valid) {
        this.toastr.success(' Succesfully Saved !!');
        alert(JSON.stringify(data))
    }
   
  }



}



 
   

//constructor(private toastr: ToastrService,private _bottomSheet: MatBottomSheet) {}
// openBottomSheet(): void {
//   this._bottomSheet.open(LifestyleComponent);
// }
 
