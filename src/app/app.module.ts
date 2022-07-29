import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ProfileDataService} from '../app/profile-data.service'
@NgModule({
  declarations: [
    AppComponent,
    FormTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProfileDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
