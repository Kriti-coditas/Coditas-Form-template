import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormTemplateComponent} from '../app/form-template/form-template.component'
const routes: Routes = [
 {path:'employeeForm',component:FormTemplateComponent},
 {path:'**',redirectTo:'employeeForm',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
