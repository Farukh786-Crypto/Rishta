import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyRoute } from './route.config';
import { ToastrModule } from 'ngx-toastr';
import { AstroreligionComponent } from './User Module/AstroandreligionForm/Astroreligion.component';
import { ProfileDetailsComponent } from './User Module/ProfileDetailsForm/profile-details.component';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ReactiveFormsModule,
    RouterModule.forRoot(MyRoute),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
