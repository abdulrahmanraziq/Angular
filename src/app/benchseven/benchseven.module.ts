import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BenchsevenRoutingModule } from './benchseven-routing.module';
import { AttendancesevenComponent } from './attendanceseven/attendanceseven.component';

@NgModule({
  declarations: [AttendancesevenComponent],
  imports: [
    CommonModule,
    BenchsevenRoutingModule
  ]
})
export class BenchsevenModule { }
