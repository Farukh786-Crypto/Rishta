import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyRoute } from './route.config';
import { ToastrModule } from 'ngx-toastr';
import { AstroreligionComponent } from './User Module/AstroandreligionForm/Astroreligion.component';

import { PersonalDetailsComponent } from './User Module/PersonalDetailsForm/personaldetails.component';
import { FeedbackComponent } from './User Module/Feedback/Feedback.component';
<<<<<<< HEAD
 

@NgModule({
  declarations: [
    AppComponent
     
=======
import { HeaderFooterComponent } from './User Module/MasterPage/header-footer.component';

@NgModule({
  declarations: [
    AppComponent,HeaderFooterComponent
>>>>>>> 5199b23b5f217127869f0ad0dc0b2be3ca2be878
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ReactiveFormsModule,
    NgxSpinnerModule,
    RouterModule.forRoot(MyRoute),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
