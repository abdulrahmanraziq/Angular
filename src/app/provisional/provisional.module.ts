import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvisionalRoutingModule } from './provisional-routing.module';
import { ProvisionalListComponent } from './provisional-list/provisional-list.component';

@NgModule({
  declarations: [ProvisionalListComponent],
  imports: [
    CommonModule,
    ProvisionalRoutingModule
  ]
})
export class ProvisionalModule { }
