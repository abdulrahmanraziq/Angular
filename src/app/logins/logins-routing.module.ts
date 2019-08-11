import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginsListComponent} from './logins-list/logins-list.component';
const routes: Routes = [
  {path: '', component:LoginsListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginsRoutingModule { }
