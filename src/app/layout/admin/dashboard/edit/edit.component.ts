import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ViewComponent } from '../view/view.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  EditModel : FormGroup;
  constructor(public dialogRef: MatDialogRef<ViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
          
      this.EditModel = new FormGroup({
           username : new FormControl('', [Validators.required]),
           religion: new FormControl('', Validators.required), 
           Mothertng: new FormControl('', Validators.required),
           livingcity: new FormControl('', Validators.required),
           Marrital: new FormControl('', Validators.required),
           blood_group: new FormControl('', Validators.required),
           height: new FormControl('', [Validators.required]),
           weight: new FormControl('', [Validators.required]),
           body_type: new FormControl('', [Validators.required]),
           lens: new FormControl('', [Validators.required]),
           spectacles: new FormControl('', [Validators.required]),
           complexion: new FormControl('', [Validators.required]),
           NRI: new FormControl('', [Validators.required]),
           smoking: new FormControl('', [Validators.required]),
           drinking: new FormControl('', [Validators.required]),
           eating_habits: new FormControl('', [Validators.required]),
           Country: new FormControl('',[Validators.required]),
           State: new FormControl('', [Validators.required]),
           City: new FormControl('',[Validators.required]),
           HighestDegree: new FormControl('', [Validators.required]),
           Emplyeed: new FormControl('', [Validators.required]),
           Occupation: new FormControl('', [Validators.required]),
            Income: new FormControl('', [Validators.required]),
            Express: new FormControl('', [Validators.required]),
            caste:new FormControl('',[Validators.required]),
            subcaste:new FormControl('',[Validators.required]),
            Languages: new FormControl('', [Validators.required]),
            Food: new FormControl('', [Validators.required]),
            Interests: new FormControl('', [Validators.required]),
            Music: new FormControl('', [Validators.required]),
            Books: new FormControl('', [Validators.required]),
            Movies: new FormControl('', [Validators.required]),
            sports: new FormControl('', [Validators.required]),
            familytype: new FormControl('', Validators.required),
            fatherocc: new FormControl('', Validators.required),
            motherocc: new FormControl('', Validators.required),
            brother: new FormControl('', Validators.required),
            sister: new FormControl('', Validators.required),
            brothermarried: new FormControl('', Validators.required),
            sistermarried: new FormControl('', Validators.required),
            address: new FormControl('', Validators.required),
            aboutfamily: new FormControl('', Validators.required),
            





      })
  }

  

  ngOnInit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
