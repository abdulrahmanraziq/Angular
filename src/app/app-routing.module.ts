import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AvengersComponent } from './avengers/avengers.component';
import { EndgameComponent } from './endgame/endgame.component';
import {FulldetailsComponent} from './fulldetails/fulldetails.component';
import {ExplorerComponent} from './explorer/explorer.component';
import {MedicalComponent} from './medical/medical.component';
import {OperationsComponent} from './operations/operations.component';
import {ProfilingComponent} from './profiling/profiling.component';
import {IndexcobraComponent} from './indexcobra/indexcobra.component';
import {HomeComponent} from './home/home.component';
import {LifeguardComponent} from './lifeguard/lifeguard.component';
import {FirstaidComponent} from './firstaid/firstaid.component';
import {SportserviceComponent} from './sportservice/sportservice.component';
import{ContactcobraComponent} from './contactcobra/contactcobra.component';
import{CustomerModule} from './customer/customer.module';
import {OrdersModule} from './orders/orders.module';
import{LoginsModule} from './logins/logins.module';
const routes: Routes = [
  /*{ path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'avengers', component: AvengersComponent },
  { path: 'endgame', component: EndgameComponent },
  { path: 'fulldetails', component: FulldetailsComponent},*/
  /*{ path:'', redirectTo:'/explorer' , pathMatch:'full'},
  { path: 'explorer', component: ExplorerComponent},
  { path: 'medical', component: MedicalComponent},
  { path: 'operations', component: OperationsComponent},
  { path: 'profiling', component: ProfilingComponent},*/
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path : 'home' , component: HomeComponent},
  {path : 'lifeguard' , component: LifeguardComponent},
  {path : 'firstaid' , component: FirstaidComponent},
  {path : 'sportservice' , component: SportserviceComponent},
  {path : 'contactcobra' , component: ContactcobraComponent},
  {path: 'logins' , loadChildren: () => LoginsModule},
];
  /*{path: 'customer', loadChildren: './customer/customer.module#CustomerModule'},
  {path: 'orders', loadChildren: './orders/orders.module#OrdersModule'},
  {path: '', redirectTo: '', pathMatch:'full' }
];*/
/*const routes: Routes = [
  {
    path: 'customers',
    loadChildren:  () =>  CustomerModule
  },
  {
    path: 'orders',
    loadChildren:  () =>  OrdersModule
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
