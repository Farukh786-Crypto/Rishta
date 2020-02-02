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
import { LayoutComponent } from './layout/layout.component';
import { GroomsComponent } from './layout/admin/dashboard/grooms/grooms.component';
import { BridesComponent } from './layout/admin/dashboard/brides/brides.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './Services/data.service';
import { AstroreligionComponent } from './User Module/AstroandreligionForm/Astroreligion.component';

import { PersonalDetailsComponent } from './User Module/PersonalDetailsForm/personaldetails.component';
<<<<<<< HEAD
import { DashboardComponent } from './layout/admin/dashboard/dashboard.component';
import { viewComponent } from './layout/admin/dashboard/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    GroomsComponent,
    BridesComponent,
  DashboardComponent,
  viewComponent],
=======
import { FeedbackComponent } from './User Module/Feedback/Feedback.component';
import { HeaderFooterComponent } from './User Module/MasterPage/header-footer.component';
import { MaterialModule } from './material/material.module';
import { MatSelectModule} from '@angular/material'
import { ErrorComponent } from './User Module/Error.component';



@NgModule({
  declarations: [
    AppComponent,HeaderFooterComponent,
    ErrorComponent
    
  ], 
>>>>>>> 1306c979eb40ff8177ea8663bf9de73dadaec2a5
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
    RouterModule.forRoot(MyRoute),
    ToastrModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
