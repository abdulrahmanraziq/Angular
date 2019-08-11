import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginsRoutingModule } from './logins-routing.module';
import { LoginsListComponent } from './logins-list/logins-list.component';

@NgModule({
  declarations: [LoginsListComponent],
  imports: [
    CommonModule,
    LoginsRoutingModule
  ]
})
export class LoginsModule { }
