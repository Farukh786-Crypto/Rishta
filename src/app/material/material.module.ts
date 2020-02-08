import { NgModule } from '@angular/core';
import {MatButtonModule,MatButtonToggleModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelect, MatSelectModule, MatAutocomplete, MatAutocompleteModule, MatCheckboxModule, MatRadioModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';


const MaterialComponents =[

  MatButtonModule,
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
  MatCardModule

];



@NgModule({
  
  imports: [MaterialComponents],
  exports: [MaterialComponents]  
  

})
export class MaterialModule { }
