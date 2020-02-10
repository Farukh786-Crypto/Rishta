import { NgModule } from '@angular/core';
import {MatButtonModule,MatButtonToggleModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelect, MatSelectModule, MatAutocomplete, MatAutocompleteModule, MatCheckboxModule, MatRadioModule, MatMenuModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';


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

  MatCardModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,

  MatMenuModule,
  MatCardModule


];



@NgModule({
  
  imports: [MaterialComponents,],
  exports: [MaterialComponents]  
  

})
export class MaterialModule { }
