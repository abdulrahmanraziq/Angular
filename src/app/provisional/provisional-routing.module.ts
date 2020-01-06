import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProvisionalListComponent} from './provisional-list/provisional-list.component';
const routes: Routes = [
  {
    path: '',
    component: ProvisionalListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvisionalRoutingModule { }
