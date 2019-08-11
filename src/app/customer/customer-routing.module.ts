import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {ComponentdataComponent} from './componentdata/componentdata.component';
const routes: Routes = [
  {path:'', component:CustomerListComponent},
  {path: 'customerdata', component:ComponentdataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
