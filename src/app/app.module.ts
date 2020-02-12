import * as platformBrowser from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyRoute } from './route.config';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './Services/data.service';
import { MaterialModule } from './material/material.module';
import { MatSelectModule } from '@angular/material'
import { ErrorComponent } from './UserModule/Error.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter'
 
import {MatDialogModule} from '@angular/material/dialog';
 

import { DashboardComponent } from './layout/admin/dashboard/dashboard.component';
import { viewComponent } from './layout/admin/dashboard/view/view.component';
import { employeecomponent } from './UserModule/Employee/employees.component';
 
import { EmployeesService } from './shared/employees.service';
import { UserComponent } from './UserModule/user.component';
 



@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    
   
  ],
  imports: [
    platformBrowser.BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ReactiveFormsModule,
    NgxSpinnerModule,
    Ng2SearchPipeModule,
    
   MaterialModule,
    MatSelectModule,
    MatDialogModule,
    
    RouterModule.forRoot(MyRoute),
    ToastrModule.forRoot(),
    MaterialModule
  ],
  providers: [DataService,EmployeesService],
  bootstrap: [AppComponent]
  //bootstrap:[DashboardComponent]
})

export class AppModule { }
