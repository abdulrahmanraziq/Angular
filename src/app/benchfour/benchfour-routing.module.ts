import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AttendisplayfourComponent} from './attendisplayfour/attendisplayfour.component';

const routes: Routes = [
  {path:'', component:AttendisplayfourComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BenchfourRoutingModule { }
