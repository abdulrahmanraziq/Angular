import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AttendanceformthreeComponent} from './attendanceformthree/attendanceformthree.component';
const routes: Routes = [
  {path:'', component:AttendanceformthreeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendancingformRoutingModule { }
