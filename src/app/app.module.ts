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
import { DashboardComponent } from './layout/admin/dashboard/dashboard.component';
import { viewComponent } from './layout/admin/dashboard/view/view.component';
import { MatchesComponent } from './layout/admin/matches/matches.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    GroomsComponent,
    BridesComponent,
    DashboardComponent,
    viewComponent,
    MatchesComponent
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
    RouterModule.forRoot(MyRoute),
    ToastrModule.forRoot()
  ],
  providers: [DataService],
  //bootstrap: [AppComponent]
  bootstrap:[MatchesComponent]
})

export class AppModule { }
