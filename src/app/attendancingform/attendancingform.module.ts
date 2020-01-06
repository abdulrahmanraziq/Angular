import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendancingformRoutingModule } from './attendancingform-routing.module';
import { AttendanceformthreeComponent } from './attendanceformthree/attendanceformthree.component';

@NgModule({
  declarations: [AttendanceformthreeComponent],
  imports: [
    CommonModule,
    AttendancingformRoutingModule
  ]
})
export class AttendancingformModule { }
