import { NgModule } from '@angular/core';
import {MatButtonModule,MatButtonToggleModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelect, MatSelectModule, MatAutocomplete, MatAutocompleteModule, MatCheckboxModule, MatRadioModule, MatMenuModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';


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
  MatMenuModule

];



@NgModule({
  
  imports: [MaterialComponents,],
  exports: [MaterialComponents]  
  

})
export class MaterialModule { }
