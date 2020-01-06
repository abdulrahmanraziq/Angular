import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BenchfourRoutingModule } from './benchfour-routing.module';
import { AttendisplayfourComponent } from './attendisplayfour/attendisplayfour.component';

@NgModule({
  declarations: [AttendisplayfourComponent],
  imports: [
    CommonModule,
    BenchfourRoutingModule
  ]
})
export class BenchfourModule { }
