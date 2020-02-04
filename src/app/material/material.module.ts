import { NgModule } from '@angular/core';
import {MatButtonModule,MatButtonToggleModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatAutocomplete, MatAutocompleteModule, MatCheckboxModule, MatRadioModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSelectModule} from '@angular/material/select';

// const MaterialComponents =[

//   MatButtonModule,
//   MatButtonToggleModule,
//   MatIconModule,
//   MatBadgeModule,
//   MatToolbarModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatSelectModule,
//   MatAutocompleteModule,
//   MatCheckboxModule,
//   MatRadioModule

// ];



@NgModule({
  
  imports: [MatButtonToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  exports: [MatButtonModule,
    MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatRadioModule

  ]  
  

})
export class MaterialModule { }
