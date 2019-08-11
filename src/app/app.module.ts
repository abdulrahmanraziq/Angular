import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsComponent } from './forms/forms.component';
import { ApplicationsComponent } from './applications/applications.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AvengersComponent } from './avengers/avengers.component';
import { EndgameComponent } from './endgame/endgame.component';
import { HeadersComponent } from './headers/headers.component';
import { SidebarsComponent } from './sidebars/sidebars.component';
import { FooterComponent } from './footer/footer.component';
import { FulldetailsComponent } from './fulldetails/fulldetails.component';
import { DashboardOneComponent } from './dashboard-one/dashboard-one.component';
import { HeaderOneComponent } from './header-one/header-one.component';
import { SidebarOneComponent } from './sidebar-one/sidebar-one.component';
import { UserformsComponent } from './userforms/userforms.component';
import { FooterOneComponent } from './footer-one/footer-one.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { MedicalComponent } from './medical/medical.component';
import { OperationsComponent } from './operations/operations.component';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { SideComponent } from './side/side.component';
import { ProfilingComponent } from './profiling/profiling.component';
import { NameeditorComponent } from './nameeditor/nameeditor.component';
import { HeaderCobraComponent } from './header-cobra/header-cobra.component';
import { HomeComponent } from './home/home.component';
import { LifeguardComponent } from './lifeguard/lifeguard.component';
import { FirstaidComponent } from './firstaid/firstaid.component';
import { SportserviceComponent } from './sportservice/sportservice.component';
import { ContactcobraComponent } from './contactcobra/contactcobra.component';
import { FootercobraComponent } from './footercobra/footercobra.component';
import { SectioncobraComponent } from './sectioncobra/sectioncobra.component';
import { IndexcobraComponent } from './indexcobra/indexcobra.component';
import { ServicesfileComponent } from './servicesfile/servicesfile.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicefiletwoComponent } from './servicefiletwo/servicefiletwo.component';
import { ServicefilefourComponent } from './servicefilefour/servicefilefour.component';
import { KotakComponent } from './kotak/kotak.component';
import { HdfcComponent } from './hdfc/hdfc.component';
import { LoadingComponent } from './loading/loading.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormsComponent,
    ApplicationsComponent,
    DashboardComponent,
    AvengersComponent,
    EndgameComponent,
    HeadersComponent,
    SidebarsComponent,
    FooterComponent,
    FulldetailsComponent,
    DashboardOneComponent,
    HeaderOneComponent,
    SidebarOneComponent,
    UserformsComponent,
    FooterOneComponent,
    ExplorerComponent,
    MedicalComponent,
    OperationsComponent,
    TopComponent,
    BottomComponent,
    SideComponent,
    ProfilingComponent,
    NameeditorComponent,
    HeaderCobraComponent,
    HomeComponent,
    LifeguardComponent,
    FirstaidComponent,
    SportserviceComponent,
    ContactcobraComponent,
    FootercobraComponent,
    SectioncobraComponent,
    IndexcobraComponent,
    ServicesfileComponent,
    ServicefiletwoComponent,
    ServicefilefourComponent,
    KotakComponent,
    HdfcComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
