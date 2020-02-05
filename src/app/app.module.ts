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
import { GroomsComponent } from './layout/admin/dashboard/grooms/grooms.component';
import { BridesComponent } from './layout/admin/dashboard/brides/brides.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './Services/data.service';
import { MaterialModule } from './material/material.module';
import { MatSelectModule } from '@angular/material'
import { ErrorComponent } from './User Module/Error.component';
<<<<<<< HEAD
import {MatDialogModule} from '@angular/material/dialog';

=======
import { DashboardComponent } from './layout/admin/dashboard/dashboard.component';
import { viewComponent } from './layout/admin/dashboard/view/view.component';
>>>>>>> dd8f028a73a0c7d3e44a101a382f7eac8924f8f6


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    GroomsComponent,
    BridesComponent,
    DashboardComponent,
    viewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ReactiveFormsModule,
    NgxSpinnerModule,
   MaterialModule,
    MatSelectModule,
    MatDialogModule,
    
    RouterModule.forRoot(MyRoute),
    ToastrModule.forRoot(),
    MaterialModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
