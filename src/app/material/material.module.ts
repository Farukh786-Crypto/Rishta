import { NgModule } from '@angular/core';
import {MatButtonModule,MatButtonToggleModule, MatIconModule, MatToolbarModule, MatInputModule, MatAutocompleteModule, MatCheckboxModule, MatRadioModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
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
    MatRadioModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule

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
  MatRadioModule,
  MatCardModule,
  MatFormFieldModule,
  MatListModule

  ]  
  

})
export class MaterialModule { }
