import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ContactComponent } from './RegisterForm/contact.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LayoutComponent,
    GroomsComponent,
    BridesComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ReactiveFormsModule,
    RouterModule.forRoot(MyRoute),
    ToastrModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
