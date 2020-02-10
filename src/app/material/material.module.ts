import { NgModule } from '@angular/core';
import {MatButtonModule,MatButtonToggleModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelect, MatSelectModule, MatAutocomplete, MatAutocompleteModule, MatCheckboxModule, MatRadioModule, MatMenuModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';

import {MatDatepickerModule} from '@angular/material/datepicker';


 
const MaterialComponents =[
  MatStepperModule,
  CdkTreeModule,
  CdkTableModule,
  CdkStepperModule,
  ScrollingModule,
  PortalModule,
  MatListModule,
  MatGridListModule,
  MatExpansionModule,
  MatDividerModule,
  A11yModule,
  MatSliderModule,
  MatSlideToggleModule,
  DragDropModule,
  MatBottomSheetModule,
  MatNativeDateModule,
   MatRippleModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatDialogModule,
  MatProgressBarModule,
  MatChipsModule,
  MatTreeModule,
  MatDatepickerModule,
  MatTooltipModule,
  MatTabsModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatSnackBarModule,
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
