(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _lifeguard_lifeguard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lifeguard/lifeguard.component */ "./src/app/lifeguard/lifeguard.component.ts");
/* harmony import */ var _firstaid_firstaid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./firstaid/firstaid.component */ "./src/app/firstaid/firstaid.component.ts");
/* harmony import */ var _sportservice_sportservice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sportservice/sportservice.component */ "./src/app/sportservice/sportservice.component.ts");
/* harmony import */ var _contactcobra_contactcobra_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contactcobra/contactcobra.component */ "./src/app/contactcobra/contactcobra.component.ts");








var routes = [
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
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'lifeguard', component: _lifeguard_lifeguard_component__WEBPACK_IMPORTED_MODULE_4__["LifeguardComponent"] },
    { path: 'firstaid', component: _firstaid_firstaid_component__WEBPACK_IMPORTED_MODULE_5__["FirstaidComponent"] },
    { path: 'sportservice', component: _sportservice_sportservice_component__WEBPACK_IMPORTED_MODULE_6__["SportserviceComponent"] },
    { path: 'contactcobra', component: _contactcobra_contactcobra_component__WEBPACK_IMPORTED_MODULE_7__["ContactcobraComponent"] },
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!----<app-top></app-top>\r\n<app-side></app-side>\r\n<app-bottom></app-bottom>-->\r\n\r\n<!---<app-nameeditor></app-nameeditor>-->\r\n<app-header-cobra></app-header-cobra>\r\n<router-outlet></router-outlet>\r\n<app-footercobra></app-footercobra>\r\n<!----<app-servicesfile></app-servicesfile>-->\r\n<!----<app-servicefiletwo></app-servicefiletwo>-->\r\n<!----<app-servicefilefour></app-servicefilefour>-->\r\n<!----<button type=\"button\" routerLink=\"/customers\">Customer</button>\r\n<button type=\"button\" routerLink=\"/orders\"+>Orders</button>\r\n<button type=\"button\" routerLink=\"/customers/customerdata\">Customer Data</button>\r\n<router-outlet></router-outlet>-->\r\n<!---<app-kotak></app-kotak>-->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _applications_applications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./applications/applications.component */ "./src/app/applications/applications.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _avengers_avengers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./avengers/avengers.component */ "./src/app/avengers/avengers.component.ts");
/* harmony import */ var _endgame_endgame_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./endgame/endgame.component */ "./src/app/endgame/endgame.component.ts");
/* harmony import */ var _headers_headers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./headers/headers.component */ "./src/app/headers/headers.component.ts");
/* harmony import */ var _sidebars_sidebars_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidebars/sidebars.component */ "./src/app/sidebars/sidebars.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _fulldetails_fulldetails_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fulldetails/fulldetails.component */ "./src/app/fulldetails/fulldetails.component.ts");
/* harmony import */ var _dashboard_one_dashboard_one_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard-one/dashboard-one.component */ "./src/app/dashboard-one/dashboard-one.component.ts");
/* harmony import */ var _header_one_header_one_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header-one/header-one.component */ "./src/app/header-one/header-one.component.ts");
/* harmony import */ var _sidebar_one_sidebar_one_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sidebar-one/sidebar-one.component */ "./src/app/sidebar-one/sidebar-one.component.ts");
/* harmony import */ var _userforms_userforms_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./userforms/userforms.component */ "./src/app/userforms/userforms.component.ts");
/* harmony import */ var _footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./footer-one/footer-one.component */ "./src/app/footer-one/footer-one.component.ts");
/* harmony import */ var _explorer_explorer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./explorer/explorer.component */ "./src/app/explorer/explorer.component.ts");
/* harmony import */ var _medical_medical_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./medical/medical.component */ "./src/app/medical/medical.component.ts");
/* harmony import */ var _operations_operations_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./operations/operations.component */ "./src/app/operations/operations.component.ts");
/* harmony import */ var _top_top_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./top/top.component */ "./src/app/top/top.component.ts");
/* harmony import */ var _bottom_bottom_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./bottom/bottom.component */ "./src/app/bottom/bottom.component.ts");
/* harmony import */ var _side_side_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./side/side.component */ "./src/app/side/side.component.ts");
/* harmony import */ var _profiling_profiling_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./profiling/profiling.component */ "./src/app/profiling/profiling.component.ts");
/* harmony import */ var _nameeditor_nameeditor_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./nameeditor/nameeditor.component */ "./src/app/nameeditor/nameeditor.component.ts");
/* harmony import */ var _header_cobra_header_cobra_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./header-cobra/header-cobra.component */ "./src/app/header-cobra/header-cobra.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _lifeguard_lifeguard_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./lifeguard/lifeguard.component */ "./src/app/lifeguard/lifeguard.component.ts");
/* harmony import */ var _firstaid_firstaid_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./firstaid/firstaid.component */ "./src/app/firstaid/firstaid.component.ts");
/* harmony import */ var _sportservice_sportservice_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./sportservice/sportservice.component */ "./src/app/sportservice/sportservice.component.ts");
/* harmony import */ var _contactcobra_contactcobra_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./contactcobra/contactcobra.component */ "./src/app/contactcobra/contactcobra.component.ts");
/* harmony import */ var _footercobra_footercobra_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./footercobra/footercobra.component */ "./src/app/footercobra/footercobra.component.ts");
/* harmony import */ var _sectioncobra_sectioncobra_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./sectioncobra/sectioncobra.component */ "./src/app/sectioncobra/sectioncobra.component.ts");
/* harmony import */ var _indexcobra_indexcobra_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./indexcobra/indexcobra.component */ "./src/app/indexcobra/indexcobra.component.ts");
/* harmony import */ var _servicesfile_servicesfile_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./servicesfile/servicesfile.component */ "./src/app/servicesfile/servicesfile.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _servicefiletwo_servicefiletwo_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./servicefiletwo/servicefiletwo.component */ "./src/app/servicefiletwo/servicefiletwo.component.ts");
/* harmony import */ var _servicefilefour_servicefilefour_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./servicefilefour/servicefilefour.component */ "./src/app/servicefilefour/servicefilefour.component.ts");
/* harmony import */ var _kotak_kotak_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./kotak/kotak.component */ "./src/app/kotak/kotak.component.ts");
/* harmony import */ var _hdfc_hdfc_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./hdfc/hdfc.component */ "./src/app/hdfc/hdfc.component.ts");













































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _forms_forms_component__WEBPACK_IMPORTED_MODULE_7__["FormsComponent"],
                _applications_applications_component__WEBPACK_IMPORTED_MODULE_8__["ApplicationsComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _avengers_avengers_component__WEBPACK_IMPORTED_MODULE_10__["AvengersComponent"],
                _endgame_endgame_component__WEBPACK_IMPORTED_MODULE_11__["EndgameComponent"],
                _headers_headers_component__WEBPACK_IMPORTED_MODULE_12__["HeadersComponent"],
                _sidebars_sidebars_component__WEBPACK_IMPORTED_MODULE_13__["SidebarsComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _fulldetails_fulldetails_component__WEBPACK_IMPORTED_MODULE_15__["FulldetailsComponent"],
                _dashboard_one_dashboard_one_component__WEBPACK_IMPORTED_MODULE_16__["DashboardOneComponent"],
                _header_one_header_one_component__WEBPACK_IMPORTED_MODULE_17__["HeaderOneComponent"],
                _sidebar_one_sidebar_one_component__WEBPACK_IMPORTED_MODULE_18__["SidebarOneComponent"],
                _userforms_userforms_component__WEBPACK_IMPORTED_MODULE_19__["UserformsComponent"],
                _footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_20__["FooterOneComponent"],
                _explorer_explorer_component__WEBPACK_IMPORTED_MODULE_21__["ExplorerComponent"],
                _medical_medical_component__WEBPACK_IMPORTED_MODULE_22__["MedicalComponent"],
                _operations_operations_component__WEBPACK_IMPORTED_MODULE_23__["OperationsComponent"],
                _top_top_component__WEBPACK_IMPORTED_MODULE_24__["TopComponent"],
                _bottom_bottom_component__WEBPACK_IMPORTED_MODULE_25__["BottomComponent"],
                _side_side_component__WEBPACK_IMPORTED_MODULE_26__["SideComponent"],
                _profiling_profiling_component__WEBPACK_IMPORTED_MODULE_27__["ProfilingComponent"],
                _nameeditor_nameeditor_component__WEBPACK_IMPORTED_MODULE_28__["NameeditorComponent"],
                _header_cobra_header_cobra_component__WEBPACK_IMPORTED_MODULE_29__["HeaderCobraComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_30__["HomeComponent"],
                _lifeguard_lifeguard_component__WEBPACK_IMPORTED_MODULE_31__["LifeguardComponent"],
                _firstaid_firstaid_component__WEBPACK_IMPORTED_MODULE_32__["FirstaidComponent"],
                _sportservice_sportservice_component__WEBPACK_IMPORTED_MODULE_33__["SportserviceComponent"],
                _contactcobra_contactcobra_component__WEBPACK_IMPORTED_MODULE_34__["ContactcobraComponent"],
                _footercobra_footercobra_component__WEBPACK_IMPORTED_MODULE_35__["FootercobraComponent"],
                _sectioncobra_sectioncobra_component__WEBPACK_IMPORTED_MODULE_36__["SectioncobraComponent"],
                _indexcobra_indexcobra_component__WEBPACK_IMPORTED_MODULE_37__["IndexcobraComponent"],
                _servicesfile_servicesfile_component__WEBPACK_IMPORTED_MODULE_38__["ServicesfileComponent"],
                _servicefiletwo_servicefiletwo_component__WEBPACK_IMPORTED_MODULE_40__["ServicefiletwoComponent"],
                _servicefilefour_servicefilefour_component__WEBPACK_IMPORTED_MODULE_41__["ServicefilefourComponent"],
                _kotak_kotak_component__WEBPACK_IMPORTED_MODULE_42__["KotakComponent"],
                _hdfc_hdfc_component__WEBPACK_IMPORTED_MODULE_43__["HdfcComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_39__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/applications/Mobile.ts":
/*!****************************************!*\
  !*** ./src/app/applications/Mobile.ts ***!
  \****************************************/
/*! exports provided: UserSecond */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSecond", function() { return UserSecond; });
var UserSecond = [
    { id: 1, name: 'Abdul' },
    { id: 2, name: 'Ganesh' },
    { id: 3, name: 'Dhana' },
    { id: 4, name: 'Maran' },
    { id: 5, name: 'Seshu' },
    { id: 6, name: 'Velu' },
    { id: 7, name: 'Dinesh' },
];


/***/ }),

/***/ "./src/app/applications/applications.component.css":
/*!*********************************************************!*\
  !*** ./src/app/applications/applications.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/applications/applications.component.html":
/*!**********************************************************!*\
  !*** ./src/app/applications/applications.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let cafe of device\">\n    <div>{{cafe.id}}</div>\n    <div>{{cafe.name}}</div>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/applications/applications.component.ts":
/*!********************************************************!*\
  !*** ./src/app/applications/applications.component.ts ***!
  \********************************************************/
/*! exports provided: ApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function() { return ApplicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Mobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mobile */ "./src/app/applications/Mobile.ts");



var ApplicationsComponent = /** @class */ (function () {
    function ApplicationsComponent() {
        this.device = _Mobile__WEBPACK_IMPORTED_MODULE_2__["UserSecond"];
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
    };
    ApplicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-applications',
            template: __webpack_require__(/*! ./applications.component.html */ "./src/app/applications/applications.component.html"),
            styles: [__webpack_require__(/*! ./applications.component.css */ "./src/app/applications/applications.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());



/***/ }),

/***/ "./src/app/avengers/avengers.component.css":
/*!*************************************************!*\
  !*** ./src/app/avengers/avengers.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n    margin-top:3%;\r\n    line-height: 40px;\r\n    margin: 0 auto;\r\n    width: 50%;\r\n   \r\n}\r\ninput{\r\n    width: 80%;\r\n    padding: 12px 20px;\r\n    border-radius: 20px;\r\n    border: 1px solid #737575;\r\n}\r\nbutton{\r\n    background: #f00;\r\n    color:#fff;\r\n    border: 1px solid #f00;\r\n    padding: 10px 25px;\r\n    margin-top: 3%;\r\n    font-weight: bold;\r\n    border: 1px solid #f00;\r\n    border-radius: 10px;\r\n    text-align: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXZlbmdlcnMvYXZlbmdlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsY0FBYztJQUNkLFVBQVU7O0FBRWQ7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hdmVuZ2Vycy9hdmVuZ2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybXtcclxuICAgIG1hcmdpbi10b3A6MyU7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgXHJcbn1cclxuaW5wdXR7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3Mzc1NzU7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDogI2YwMDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjAwO1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/avengers/avengers.component.html":
/*!**************************************************!*\
  !*** ./src/app/avengers/avengers.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\" novalidate>\n<label>First Name</label><br>\n<input type=\"text\" placeholder=\"Enter Your Name\" name=\"userOne\" id=\"userOne\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\"/><br>\n\n<label>Password</label><br>\n<input type=\"password\" placeholder=\"Enter Your Password\" name=\"userTwo\" id=\"userTwo\" [(ngModel)]=\"model.password\" #password=\"ngModel\"/><br>\n\n<button type=\"submit\">Click Me</button>\n</form>"

/***/ }),

/***/ "./src/app/avengers/avengers.component.ts":
/*!************************************************!*\
  !*** ./src/app/avengers/avengers.component.ts ***!
  \************************************************/
/*! exports provided: AvengersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvengersComponent", function() { return AvengersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AvengersComponent = /** @class */ (function () {
    function AvengersComponent() {
    }
    AvengersComponent.prototype.ngOnInit = function () {
    };
    AvengersComponent.prototype.onSubmit = function (data) {
        console.log(data);
    };
    AvengersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-avengers',
            template: __webpack_require__(/*! ./avengers.component.html */ "./src/app/avengers/avengers.component.html"),
            styles: [__webpack_require__(/*! ./avengers.component.css */ "./src/app/avengers/avengers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AvengersComponent);
    return AvengersComponent;
}());



/***/ }),

/***/ "./src/app/bottom/bottom.component.css":
/*!*********************************************!*\
  !*** ./src/app/bottom/bottom.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvdHRvbS9ib3R0b20uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/bottom/bottom.component.html":
/*!**********************************************!*\
  !*** ./src/app/bottom/bottom.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  bottom works!\n</p>\n"

/***/ }),

/***/ "./src/app/bottom/bottom.component.ts":
/*!********************************************!*\
  !*** ./src/app/bottom/bottom.component.ts ***!
  \********************************************/
/*! exports provided: BottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomComponent", function() { return BottomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BottomComponent = /** @class */ (function () {
    function BottomComponent() {
    }
    BottomComponent.prototype.ngOnInit = function () {
    };
    BottomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bottom',
            template: __webpack_require__(/*! ./bottom.component.html */ "./src/app/bottom/bottom.component.html"),
            styles: [__webpack_require__(/*! ./bottom.component.css */ "./src/app/bottom/bottom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BottomComponent);
    return BottomComponent;
}());



/***/ }),

/***/ "./src/app/contactcobra/contactcobra.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contactcobra/contactcobra.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3Rjb2JyYS9jb250YWN0Y29icmEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/contactcobra/contactcobra.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contactcobra/contactcobra.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contactcobra works!\n</p>\n"

/***/ }),

/***/ "./src/app/contactcobra/contactcobra.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contactcobra/contactcobra.component.ts ***!
  \********************************************************/
/*! exports provided: ContactcobraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactcobraComponent", function() { return ContactcobraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactcobraComponent = /** @class */ (function () {
    function ContactcobraComponent() {
    }
    ContactcobraComponent.prototype.ngOnInit = function () {
    };
    ContactcobraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactcobra',
            template: __webpack_require__(/*! ./contactcobra.component.html */ "./src/app/contactcobra/contactcobra.component.html"),
            styles: [__webpack_require__(/*! ./contactcobra.component.css */ "./src/app/contactcobra/contactcobra.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactcobraComponent);
    return ContactcobraComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-one/dashboard-one.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dashboard-one/dashboard-one.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1vbmUvZGFzaGJvYXJkLW9uZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard-one/dashboard-one.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard-one/dashboard-one.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard-one works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard-one/dashboard-one.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard-one/dashboard-one.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardOneComponent", function() { return DashboardOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardOneComponent = /** @class */ (function () {
    function DashboardOneComponent() {
    }
    DashboardOneComponent.prototype.ngOnInit = function () {
    };
    DashboardOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-one',
            template: __webpack_require__(/*! ./dashboard-one.component.html */ "./src/app/dashboard-one/dashboard-one.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-one.component.css */ "./src/app/dashboard-one/dashboard-one.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardOneComponent);
    return DashboardOneComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>Dashboard Page</p>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/endgame/endgame.component.css":
/*!***********************************************!*\
  !*** ./src/app/endgame/endgame.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n    margin-top:3%;\r\n    line-height: 40px;\r\n    margin: 0 auto;\r\n    width: 50%;\r\n   \r\n}\r\ninput{\r\n    width: 80%;\r\n    padding: 12px 20px;\r\n    border-radius: 20px;\r\n    border: 1px solid #737575;\r\n}\r\nbutton{\r\n    background: #f00;\r\n    color:#fff;\r\n    border: 1px solid #f00;\r\n    padding: 10px 25px;\r\n    margin-top: 3%;\r\n    font-weight: bold;\r\n    border: 1px solid #f00;\r\n    border-radius: 10px;\r\n    text-align: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5kZ2FtZS9lbmRnYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxVQUFVOztBQUVkO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZW5kZ2FtZS9lbmRnYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gICAgbWFyZ2luLXRvcDozJTtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICBcclxufVxyXG5pbnB1dHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzczNzU3NTtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjAwO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/endgame/endgame.component.html":
/*!************************************************!*\
  !*** ./src/app/endgame/endgame.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n<label>Second Name</label><br>\n<input type=\"text\" placeholder=\"Enter Your Name\" name=\"userThree\" id=\"userThree\"/><br>\n\n<label>Password</label><br>\n<input type=\"password\" placeholder=\"Enter Your Password\" name=\"userFour\" id=\"userFour\"/><br>\n\n<button type=\"button\">Click Me</button>\n</form>"

/***/ }),

/***/ "./src/app/endgame/endgame.component.ts":
/*!**********************************************!*\
  !*** ./src/app/endgame/endgame.component.ts ***!
  \**********************************************/
/*! exports provided: EndgameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndgameComponent", function() { return EndgameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EndgameComponent = /** @class */ (function () {
    function EndgameComponent() {
    }
    EndgameComponent.prototype.ngOnInit = function () {
    };
    EndgameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-endgame',
            template: __webpack_require__(/*! ./endgame.component.html */ "./src/app/endgame/endgame.component.html"),
            styles: [__webpack_require__(/*! ./endgame.component.css */ "./src/app/endgame/endgame.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EndgameComponent);
    return EndgameComponent;
}());



/***/ }),

/***/ "./src/app/explorer/explorer.component.css":
/*!*************************************************!*\
  !*** ./src/app/explorer/explorer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmVyL2V4cGxvcmVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/explorer/explorer.component.html":
/*!**************************************************!*\
  !*** ./src/app/explorer/explorer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  explorer works!\n</p>\n"

/***/ }),

/***/ "./src/app/explorer/explorer.component.ts":
/*!************************************************!*\
  !*** ./src/app/explorer/explorer.component.ts ***!
  \************************************************/
/*! exports provided: ExplorerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerComponent", function() { return ExplorerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExplorerComponent = /** @class */ (function () {
    function ExplorerComponent() {
    }
    ExplorerComponent.prototype.ngOnInit = function () {
    };
    ExplorerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-explorer',
            template: __webpack_require__(/*! ./explorer.component.html */ "./src/app/explorer/explorer.component.html"),
            styles: [__webpack_require__(/*! ./explorer.component.css */ "./src/app/explorer/explorer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExplorerComponent);
    return ExplorerComponent;
}());



/***/ }),

/***/ "./src/app/firstaid/firstaid.component.css":
/*!*************************************************!*\
  !*** ./src/app/firstaid/firstaid.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcnN0YWlkL2ZpcnN0YWlkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/firstaid/firstaid.component.html":
/*!**************************************************!*\
  !*** ./src/app/firstaid/firstaid.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  firstaid works!\n</p>\n"

/***/ }),

/***/ "./src/app/firstaid/firstaid.component.ts":
/*!************************************************!*\
  !*** ./src/app/firstaid/firstaid.component.ts ***!
  \************************************************/
/*! exports provided: FirstaidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstaidComponent", function() { return FirstaidComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FirstaidComponent = /** @class */ (function () {
    function FirstaidComponent() {
    }
    FirstaidComponent.prototype.ngOnInit = function () {
    };
    FirstaidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-firstaid',
            template: __webpack_require__(/*! ./firstaid.component.html */ "./src/app/firstaid/firstaid.component.html"),
            styles: [__webpack_require__(/*! ./firstaid.component.css */ "./src/app/firstaid/firstaid.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FirstaidComponent);
    return FirstaidComponent;
}());



/***/ }),

/***/ "./src/app/footer-one/footer-one.component.css":
/*!*****************************************************!*\
  !*** ./src/app/footer-one/footer-one.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Heebo:400,500,700,800');\r\n\r\nfooter{\r\n    background: #fff;\r\n    padding: 25px 0px 25px 0px;\r\n}\r\n\r\nfooter ul{\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: left;\r\n    margin-top: 2%;\r\n}\r\n\r\nfooter ul li{\r\n    display: inline;\r\n    padding: 5px;\r\n}\r\n\r\nfooter ul li a{\r\n    text-decoration: none;\r\n    font-family: 'Heebo', sans-serif;\r\n    font-size: 15px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyLW9uZS9mb290ZXItb25lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQTRFOztBQUU1RTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyxlQUFlOztBQUVuQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci1vbmUvZm9vdGVyLW9uZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1IZWVibzo0MDAsNTAwLDcwMCw4MDAnKTtcclxuXHJcbmZvb3RlcntcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDBweCAyNXB4IDBweDtcclxufVxyXG5mb290ZXIgdWx7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcbmZvb3RlciB1bCBsaXtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5mb290ZXIgdWwgbGkgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVlYm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer-one/footer-one.component.html":
/*!******************************************************!*\
  !*** ./src/app/footer-one/footer-one.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n    <div>\n      <ul>\n        <li><a href=\"#\">Sign Up</a></li>\n        <li><a href=\"#\">Log In</a></li>\n        <li><a href=\"#\">Messenger</a></li>\n        <li><a href=\"#\">Facebook Lite</a></li>\n        <li><a href=\"#\">Find Friends</a></li>\n        <li><a href=\"#\">People</a></li>\n        <li><a href=\"#\">Profile</a></li>\n        <li><a href=\"#\">Pages</a></li>\n        <li><a href=\"#\">Page Cateogries</a></li>\n        <li><a href=\"#\">Places</a></li>\n        <li><a href=\"#\">Games</a></li>\n        <li><a href=\"#\">Location</a></li>\n        <li><a href=\"#\">Market PLace</a></li>\n        <li><a href=\"#\">Market PLace</a></li>\n      </ul>\n\n      <ul>\n        <li><a href=\"#\">Instagram</a></li>\n        <li><a href=\"#\">Local</a></li>\n        <li><a href=\"#\">Fundraiser</a></li>\n        <li><a href=\"#\">About</a></li>\n        <li><a href=\"#\">Create Ad</a></li>\n        <li><a href=\"#\">Create Page</a></li>\n        <li><a href=\"#\">Developers</a></li>\n        <li><a href=\"#\">carrers</a></li>\n        <li><a href=\"#\">Privacy</a></li>\n        <li><a href=\"#\">Places</a></li>\n        <li><a href=\"#\">Cookies</a></li>\n        <li><a href=\"#\">Ad Choices</a></li>\n        <li><a href=\"#\">Terms</a></li>\n        <li><a href=\"#\">Account Secuirty</a></li>\n      </ul>\n      <ul>\n        <li><a href=\"\">Login Help</a></li>\n        <li><a href=\"\">Help</a></li>\n      </ul>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer-one/footer-one.component.ts":
/*!****************************************************!*\
  !*** ./src/app/footer-one/footer-one.component.ts ***!
  \****************************************************/
/*! exports provided: FooterOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterOneComponent", function() { return FooterOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterOneComponent = /** @class */ (function () {
    function FooterOneComponent() {
    }
    FooterOneComponent.prototype.ngOnInit = function () {
    };
    FooterOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer-one',
            template: __webpack_require__(/*! ./footer-one.component.html */ "./src/app/footer-one/footer-one.component.html"),
            styles: [__webpack_require__(/*! ./footer-one.component.css */ "./src/app/footer-one/footer-one.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterOneComponent);
    return FooterOneComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <p>Footer</p>\n  </footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/footercobra/footercobra.component.css":
/*!*******************************************************!*\
  !*** ./src/app/footercobra/footercobra.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3RlcmNvYnJhL2Zvb3RlcmNvYnJhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/footercobra/footercobra.component.html":
/*!********************************************************!*\
  !*** ./src/app/footercobra/footercobra.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footercobra works!\n</p>\n"

/***/ }),

/***/ "./src/app/footercobra/footercobra.component.ts":
/*!******************************************************!*\
  !*** ./src/app/footercobra/footercobra.component.ts ***!
  \******************************************************/
/*! exports provided: FootercobraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootercobraComponent", function() { return FootercobraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FootercobraComponent = /** @class */ (function () {
    function FootercobraComponent() {
    }
    FootercobraComponent.prototype.ngOnInit = function () {
    };
    FootercobraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footercobra',
            template: __webpack_require__(/*! ./footercobra.component.html */ "./src/app/footercobra/footercobra.component.html"),
            styles: [__webpack_require__(/*! ./footercobra.component.css */ "./src/app/footercobra/footercobra.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FootercobraComponent);
    return FootercobraComponent;
}());



/***/ }),

/***/ "./src/app/forms/forms.component.css":
/*!*******************************************!*\
  !*** ./src/app/forms/forms.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2Zvcm1zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/forms/forms.component.html":
/*!********************************************!*\
  !*** ./src/app/forms/forms.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>{{table.id}}</div>\n  <div>{{table.name}}</div>\n</div>\n<div>\n  <label>name:\n    <input [(ngModel)]=\"table.name\" placeholder=\"name\"/>\n  </label>\n</div>"

/***/ }),

/***/ "./src/app/forms/forms.component.ts":
/*!******************************************!*\
  !*** ./src/app/forms/forms.component.ts ***!
  \******************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
        this.table = {
            id: 1,
            name: 'abdul'
        };
    }
    FormsComponent.prototype.ngOnInit = function () {
    };
    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! ./forms.component.html */ "./src/app/forms/forms.component.html"),
            styles: [__webpack_require__(/*! ./forms.component.css */ "./src/app/forms/forms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/fulldetails/computer.ts":
/*!*****************************************!*\
  !*** ./src/app/fulldetails/computer.ts ***!
  \*****************************************/
/*! exports provided: userTwo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userTwo", function() { return userTwo; });
var userTwo = [
    { empid: 1, name: 'Abdul', Firstname: 'Rahman', Secondname: 'Raziq', email: 'abdul.raziq@gmail.com' },
    { empid: 2, name: 'Kumar', Firstname: 'Jagdeesh', Secondname: 'kumar', email: 'kumar@gmail.com' },
    { empid: 3, name: 'Ezhil', Firstname: 'puzal', Secondname: 'maran', email: 'ezhilmaran@gmail.com' },
    { empid: 4, name: 'Ezhil', Firstname: 'thangavelu', Secondname: 'velu', email: 'ezhilvelu@gmail.com' },
    { empid: 5, name: 'dinesh', Firstname: 'vishwananth', Secondname: 'naidu', email: 'dinesh@gmail.com' },
    { empid: 6, name: 'vishnu', Firstname: 'kumar', Secondname: 'naidu', email: 'vishnu@gmail.com' },
    { empid: 7, name: 'Dilip', Firstname: 'Ramesh', Secondname: 'kumar', email: 'dilip@gmail.com' },
];


/***/ }),

/***/ "./src/app/fulldetails/fulldetails.component.css":
/*!*******************************************************!*\
  !*** ./src/app/fulldetails/fulldetails.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    margin: 0 auto;\r\n    width: 100%;\r\n}\r\ntr{\r\n    text-align: center;\r\n    \r\n}\r\ntd{\r\n    text-align: center;\r\n    line-height: 35px;\r\n    border: 1px solid #000;\r\n}\r\nth{\r\n    background: #f00;\r\n    color: #fff;\r\n    padding: 10px;\r\n    border:1px solid #f00;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVsbGRldGFpbHMvZnVsbGRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9mdWxsZGV0YWlscy9mdWxsZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbnRye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbn1cclxudGR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbn1cclxudGh7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZjAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/fulldetails/fulldetails.component.html":
/*!********************************************************!*\
  !*** ./src/app/fulldetails/fulldetails.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n  <tr>\n    <th>Emp ID</th>\n    <th>Name</th>\n    <th>First Name</th>\n    <th>Second Name</th>\n    <th>Email</th>\n  </tr>\n  <tr *ngFor=\"let device of form\">\n   <td>{{device.empid}}</td>\n   <td>{{device.name}}</td>\n   <td>{{device.Firstname}}</td>\n   <td>{{device.Secondname}}</td>\n   <td>{{device.email}}</td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/fulldetails/fulldetails.component.ts":
/*!******************************************************!*\
  !*** ./src/app/fulldetails/fulldetails.component.ts ***!
  \******************************************************/
/*! exports provided: FulldetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FulldetailsComponent", function() { return FulldetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computer */ "./src/app/fulldetails/computer.ts");



var FulldetailsComponent = /** @class */ (function () {
    function FulldetailsComponent() {
        this.form = _computer__WEBPACK_IMPORTED_MODULE_2__["userTwo"];
    }
    FulldetailsComponent.prototype.ngOnInit = function () {
    };
    FulldetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fulldetails',
            template: __webpack_require__(/*! ./fulldetails.component.html */ "./src/app/fulldetails/fulldetails.component.html"),
            styles: [__webpack_require__(/*! ./fulldetails.component.css */ "./src/app/fulldetails/fulldetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FulldetailsComponent);
    return FulldetailsComponent;
}());



/***/ }),

/***/ "./src/app/hdfc/hdfc.component.css":
/*!*****************************************!*\
  !*** ./src/app/hdfc/hdfc.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hkZmMvaGRmYy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/hdfc/hdfc.component.html":
/*!******************************************!*\
  !*** ./src/app/hdfc/hdfc.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hero\">\n  <div>{{hero.id}}</div>\n  <div>{{hero.name}}</div>\n</div>"

/***/ }),

/***/ "./src/app/hdfc/hdfc.component.ts":
/*!****************************************!*\
  !*** ./src/app/hdfc/hdfc.component.ts ***!
  \****************************************/
/*! exports provided: HdfcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HdfcComponent", function() { return HdfcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kotak_bank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kotak/bank */ "./src/app/kotak/bank.ts");



var HdfcComponent = /** @class */ (function () {
    function HdfcComponent() {
    }
    HdfcComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _kotak_bank__WEBPACK_IMPORTED_MODULE_2__["deviceone"])
    ], HdfcComponent.prototype, "hero", void 0);
    HdfcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hdfc',
            template: __webpack_require__(/*! ./hdfc.component.html */ "./src/app/hdfc/hdfc.component.html"),
            styles: [__webpack_require__(/*! ./hdfc.component.css */ "./src/app/hdfc/hdfc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HdfcComponent);
    return HdfcComponent;
}());



/***/ }),

/***/ "./src/app/header-cobra/header-cobra.component.css":
/*!*********************************************************!*\
  !*** ./src/app/header-cobra/header-cobra.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".resp_logo {\r\n    width: 220px;\r\n}\r\n.user_navbar {\r\n    background: #066075!important;\r\n    box-shadow: 1px 1px 0px #000;\r\n    \r\n}\r\n.respbrand {\r\n    width: 20%;\r\n}\r\n.respnavul li a {\r\n    color: #fff!important;\r\n    font-weight:bold;\r\n    padding:5px 25px!important;\r\n    border: 2px solid #066075;\r\n}\r\n.respnavul li a:hover{\r\n    background: #677b29;\r\n    border: 2px solid #fff;\r\n    border-radius: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyLWNvYnJhL2hlYWRlci1jb2JyYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLDRCQUE0Qjs7QUFFaEM7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci1jb2JyYS9oZWFkZXItY29icmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNwX2xvZ28ge1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG59XHJcbi51c2VyX25hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDY2MDc1IWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMHB4ICMwMDA7XHJcbiAgICBcclxufVxyXG4ucmVzcGJyYW5kIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuLnJlc3BuYXZ1bCBsaSBhIHtcclxuICAgIGNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBwYWRkaW5nOjVweCAyNXB4IWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwNjYwNzU7XHJcbn1cclxuLnJlc3BuYXZ1bCBsaSBhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogIzY3N2IyOTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/header-cobra/header-cobra.component.html":
/*!**********************************************************!*\
  !*** ./src/app/header-cobra/header-cobra.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!----<nav class=\"navbar navbar-expand-md bg-dark navbar-dark user_navbar\">\n<div class=\"container\">\n  <a class=\"navbar-brand respbrand\" href=\"#\">\n    <img src=\"assets/image/Logo.png\" class=\"resp_logo\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav respnavul\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/lifeguard\">Lifeguard</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">First Aid</a>\n      </li>   \n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Sport Service</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Contact Us</a>\n      </li> \n    </ul>\n  </div>\n</div>  \n</nav>-->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark user_navbar\">\n  <div class=\"container\">\n  <a class=\"navbar-brand\" href=\"#\">\n      <img src=\"assets/image/Logo.png\" class=\"resp_logo\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav respnavul\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/lifeguard\">Lifeguard</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">First Aid</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Sport Service</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Contact Us</a>\n      </li>\n    </ul>\n  </div>\n</div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header-cobra/header-cobra.component.ts":
/*!********************************************************!*\
  !*** ./src/app/header-cobra/header-cobra.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderCobraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderCobraComponent", function() { return HeaderCobraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderCobraComponent = /** @class */ (function () {
    function HeaderCobraComponent() {
    }
    HeaderCobraComponent.prototype.ngOnInit = function () {
    };
    HeaderCobraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-cobra',
            template: __webpack_require__(/*! ./header-cobra.component.html */ "./src/app/header-cobra/header-cobra.component.html"),
            styles: [__webpack_require__(/*! ./header-cobra.component.css */ "./src/app/header-cobra/header-cobra.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderCobraComponent);
    return HeaderCobraComponent;
}());



/***/ }),

/***/ "./src/app/header-one/header-one.component.css":
/*!*****************************************************!*\
  !*** ./src/app/header-one/header-one.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\r\n    width: 100%;\r\n    background: #3b5998;\r\n    height: 100px;\r\n    top: 0;\r\n    left:0;\r\n}\r\n.headerss{\r\n    width: 90%;\r\n    margin: 0 auto;\r\n    margin-left: 10%;\r\n}\r\n.userText{\r\n    width: 5%;\r\n    float: left;\r\n}\r\n.userText p{\r\n    text-align: center;\r\n    color: #fff;\r\n    font-size: 28px;\r\n}\r\nform{\r\n    width: 58%;\r\n    float: left;\r\n    margin-left: 37%;\r\n}\r\n.headings{\r\n    width: 25%;\r\n    float: left;\r\n    color: #fff;\r\n    margin-top: 20px;\r\n    font-size: 15px;\r\n}\r\n.headingsOne{\r\n    width: 25%;\r\n    float: left;\r\n    color: #fff;\r\n    margin-top: 19px;\r\n    font-size: 15px;\r\n    margin-left: 16px;\r\n}\r\n#userOne{\r\n   \r\n    float: left;\r\n}\r\n#userTwo{\r\n    \r\n    float: left;\r\n}\r\n.buttons{\r\n    margin-top:34px; \r\n}\r\n.submit{\r\n    background: #4267b2;\r\n    border-color: #29487d;\r\n    color: #fff;\r\n    padding: 5px 15px;\r\n    text-transform: capitalize;\r\n    margin-left: 22px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyLW9uZS9oZWFkZXItb25lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixNQUFNO0lBQ04sTUFBTTtBQUNWO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksU0FBUztJQUNULFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksV0FBVztBQUNmO0FBQ0E7O0lBRUksV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci1vbmUvaGVhZGVyLW9uZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6MDtcclxufVxyXG4uaGVhZGVyc3N7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcbi51c2VyVGV4dHtcclxuICAgIHdpZHRoOiA1JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi51c2VyVGV4dCBwe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbn1cclxuZm9ybXtcclxuICAgIHdpZHRoOiA1OCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNyU7XHJcbn1cclxuLmhlYWRpbmdze1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5oZWFkaW5nc09uZXtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogMTlweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG59XHJcbiN1c2VyT25le1xyXG4gICBcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbiN1c2VyVHdve1xyXG4gICAgXHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uYnV0dG9uc3tcclxuICAgIG1hcmdpbi10b3A6MzRweDsgXHJcbn1cclxuLnN1Ym1pdHtcclxuICAgIGJhY2tncm91bmQ6ICM0MjY3YjI7XHJcbiAgICBib3JkZXItY29sb3I6ICMyOTQ4N2Q7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjJweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header-one/header-one.component.html":
/*!******************************************************!*\
  !*** ./src/app/header-one/header-one.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <div class=\"headerss\">\n      <div class=\"userText\">\n        <p>Facebook</p>\n      </div>\n      <form>\n        <div class=\"headings\">Email or Phone<br>\n          <input type=\"text\" id=\"userOne\" name=\"userOne\">\n        </div>\n        <div class=\"headingsOne\">Password<br>\n          <input type=\"password\" id=\"userTwo\" name=\"userTwo\"><br>\n          Forgetten Account?\n        </div>\n        <div class=\"buttons\">\n          <input type=\"submit\" class=\"submit\" value=\"log In\">\n        </div>  \n    </form>\n  </div>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/header-one/header-one.component.ts":
/*!****************************************************!*\
  !*** ./src/app/header-one/header-one.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderOneComponent", function() { return HeaderOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderOneComponent = /** @class */ (function () {
    function HeaderOneComponent() {
    }
    HeaderOneComponent.prototype.ngOnInit = function () {
    };
    HeaderOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-one',
            template: __webpack_require__(/*! ./header-one.component.html */ "./src/app/header-one/header-one.component.html"),
            styles: [__webpack_require__(/*! ./header-one.component.css */ "./src/app/header-one/header-one.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderOneComponent);
    return HeaderOneComponent;
}());



/***/ }),

/***/ "./src/app/headers/headers.component.css":
/*!***********************************************!*\
  !*** ./src/app/headers/headers.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header p{\r\n    float:left;\r\n    margin: 0px;\r\n}\r\nheader ul{\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nheader ul li{\r\n    display: inline;\r\n}\r\nheader ul li a{\r\n    color:#fff;\r\n    text-decoration: none;\r\n    padding: 10px;\r\n    font-size: 15px;\r\n    float: right;\r\n    padding: 10px 25px;\r\n}\r\nheader ul li a:hover{\r\n    background:#fff;\r\n    color:#494949;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVycy9oZWFkZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsU0FBUztJQUNULFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVycy9oZWFkZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIgcHtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5oZWFkZXIgdWx7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbmhlYWRlciB1bCBsaXtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5oZWFkZXIgdWwgbGkgYXtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG59XHJcbmhlYWRlciB1bCBsaSBhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgY29sb3I6IzQ5NDk0OTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/headers/headers.component.html":
/*!************************************************!*\
  !*** ./src/app/headers/headers.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <p>Beasant Technology</p>\n<ul>\n  <li><a routerLink=\"/avengers\">Sign In</a></li>\n  <li><a routerLink=\"/endgame\">Sign Up</a></li>\n</ul>    \n</header>"

/***/ }),

/***/ "./src/app/headers/headers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/headers/headers.component.ts ***!
  \**********************************************/
/*! exports provided: HeadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadersComponent", function() { return HeadersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeadersComponent = /** @class */ (function () {
    function HeadersComponent() {
    }
    HeadersComponent.prototype.ngOnInit = function () {
    };
    HeadersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-headers',
            template: __webpack_require__(/*! ./headers.component.html */ "./src/app/headers/headers.component.html"),
            styles: [__webpack_require__(/*! ./headers.component.css */ "./src/app/headers/headers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeadersComponent);
    return HeadersComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#BodySection1{\r\n    padding: 45px 0px 45px 0px;\r\n    background: url('bg.png')no-repeat;\r\n    background-size: cover;\r\n\r\n}\r\n#BodySection1 h1{\r\n    text-align: center;\r\n    color: #356F87;\r\n}\r\n#BodySection1 p{\r\n    color: #333;\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    font-family: 'Heebo', sans-serif;\r\n    line-height: 27px;\r\n}\r\n#BodySection1 p{\r\n    text-align: center;\r\n}\r\n#BodySection1 a{\r\n    color: #356f87;\r\n    font-size: 14px;\r\n    border: 2px solid #356f87;\r\n    padding: 5px 15px;\r\n    border-radius: 20px;\r\n    text-decoration: none;\r\n    text-align: center;\r\n}\r\n#BodySection1 a:hover{\r\nbackground: #356f87;\r\ncolor: #fff;\r\n}\r\n.users_back1 {\r\n    background: #e8e8e896;\r\n    border-radius: 10px;\r\n    box-shadow: 2px 2px 2px #968484b5;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsa0NBQW1EO0lBQ25ELHNCQUFzQjs7QUFFMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLFdBQVc7QUFDWDtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNCb2R5U2VjdGlvbjF7XHJcbiAgICBwYWRkaW5nOiA0NXB4IDBweCA0NXB4IDBweDtcclxuICAgIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvaW1hZ2UvYmcucG5nXCIpbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbn1cclxuI0JvZHlTZWN0aW9uMSBoMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMzU2Rjg3O1xyXG59XHJcbiNCb2R5U2VjdGlvbjEgcHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0hlZWJvJywgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG59XHJcbiNCb2R5U2VjdGlvbjEgcHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jQm9keVNlY3Rpb24xIGF7XHJcbiAgICBjb2xvcjogIzM1NmY4NztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzNTZmODc7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI0JvZHlTZWN0aW9uMSBhOmhvdmVye1xyXG5iYWNrZ3JvdW5kOiAjMzU2Zjg3O1xyXG5jb2xvcjogI2ZmZjtcclxufVxyXG4udXNlcnNfYmFjazEge1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZThlODk2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4ICM5Njg0ODRiNTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\"assets/image/s1_1.jpg\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"assets/image/s2.jpg\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"assets/image/s3_1.jpg\" alt=\"Third slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"assets/image/s4.jpg\" alt=\"Third slide\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<section id=\"BodySection1\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h1>WHY CHOOSE COBRA TRAINING ?</h1>\n      </div>\n      <div class=\"col-sm mt-3 ml-2 p-3 users_back1\">\n        <h3 class=\"text-center\">ABOUT US</h3>\n        <p class=\"text-center\">At cobra sports services, we believe that the greatest benefit a person can offer to a human being is in saving the most precious thing that they possess, their life!</p>\n        <p><a routerLink=\"#\">Read More</a></p>\n      </div>\n      <div class=\"col-sm mt-3 ml-2 p-3 users_back1\">\n        <h3 class=\"text-center\">OUR PASSION</h3>\n        <p class=\"text-center\">As a result we are passionate in equipping others with emergency life saving knowledge via our extensive course such as first aid and lifeguard at our state of the art training centre.</p>\n        <p><a routerLink=\"#\">Read More</a></p>\n      </div>\n      <div class=\"col-sm mt-3 ml-2 p-3 users_back1\">\n        <h3 class=\"text-center\">WE DELIVER</h3>\n        <p class=\"text-center\">We deliver qualifications with specific standards and assessment procedures established by awarding organisations. with Dubai Accreditation Department (DAC)..</p>\n        <p><a routerLink=\"#\">Read More</a></p>\n      </div>\n      <div class=\"w-100\"></div>\n\n      <div class=\"col-sm mt-3 ml-2 p-3 users_back1\">\n        <h3 class=\"text-center\">WE GUIDE</h3>\n        <p class=\"text-center\">We help businesses and individuals plan for their future with personalized, high quality training. We offer a range of sports services from football..</p>\n        <p><a routerLink=\"#\">Read More</a></p>\n      </div>\n      <div class=\"col-sm mt-3 ml-2 p-3 users_back1\">\n        <h3 class=\"text-center\">OUR SPORTS</h3>\n        <p class=\"text-center\">In addition we believe that playing sports can make you stronger and healthier, contributing to lower obesity rates as well as imparting character values.</p>\n        <p><a routerLink=\"#\">Read More</a></p>\n      </div>\n      <div class=\"col-sm mt-3 ml-2 p-3 users_back1\">\n        <h3 class=\"text-center\">CONTACT US</h3>\n        <p class=\"text-center\">Please make a general form and use the address as shown: Office No.12, P.O. BOX:80882, Al Aweer 1,<br> Dubai - U.A.E</p>\n        <p><a routerLink=\"#\">Read More</a></p>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/indexcobra/indexcobra.component.css":
/*!*****************************************************!*\
  !*** ./src/app/indexcobra/indexcobra.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4Y29icmEvaW5kZXhjb2JyYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/indexcobra/indexcobra.component.html":
/*!******************************************************!*\
  !*** ./src/app/indexcobra/indexcobra.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  indexcobra works!\n</p>\n"

/***/ }),

/***/ "./src/app/indexcobra/indexcobra.component.ts":
/*!****************************************************!*\
  !*** ./src/app/indexcobra/indexcobra.component.ts ***!
  \****************************************************/
/*! exports provided: IndexcobraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexcobraComponent", function() { return IndexcobraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexcobraComponent = /** @class */ (function () {
    function IndexcobraComponent() {
    }
    IndexcobraComponent.prototype.ngOnInit = function () {
    };
    IndexcobraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-indexcobra',
            template: __webpack_require__(/*! ./indexcobra.component.html */ "./src/app/indexcobra/indexcobra.component.html"),
            styles: [__webpack_require__(/*! ./indexcobra.component.css */ "./src/app/indexcobra/indexcobra.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexcobraComponent);
    return IndexcobraComponent;
}());



/***/ }),

/***/ "./src/app/kotak/bank.ts":
/*!*******************************!*\
  !*** ./src/app/kotak/bank.ts ***!
  \*******************************/
/*! exports provided: deviceone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceone", function() { return deviceone; });
var deviceone = /** @class */ (function () {
    function deviceone() {
    }
    return deviceone;
}());



/***/ }),

/***/ "./src/app/kotak/insurance.ts":
/*!************************************!*\
  !*** ./src/app/kotak/insurance.ts ***!
  \************************************/
/*! exports provided: devicetwo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devicetwo", function() { return devicetwo; });
var devicetwo = [
    { id: 1, name: 'Abdul' },
    { id: 2, name: 'Kumar' },
    { id: 3, name: 'Sathish' }
];


/***/ }),

/***/ "./src/app/kotak/kotak.component.css":
/*!*******************************************!*\
  !*** ./src/app/kotak/kotak.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected {\r\n    background-color: rgb(255, 0, 0) !important;\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva290YWsva290YWsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJDQUEyQztJQUMzQyxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9rb3Rhay9rb3Rhay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/kotak/kotak.component.html":
/*!********************************************!*\
  !*** ./src/app/kotak/kotak.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor= \"let hero of device\"\n  [class.selected]=\"hero === computer\"\n  (click)=\"myfunction(hero)\">\n    <div>{{hero.id}}</div>\n    <div>{{hero.name}}</div>\n  </li>\n</ul>\n<div *ngIf=\"computer\">\n  {{computer.id}}\n  {{computer.name}}\n</div>\n<app-hdfc [hero] = \"computer\"></app-hdfc>"

/***/ }),

/***/ "./src/app/kotak/kotak.component.ts":
/*!******************************************!*\
  !*** ./src/app/kotak/kotak.component.ts ***!
  \******************************************/
/*! exports provided: KotakComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KotakComponent", function() { return KotakComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _insurance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insurance */ "./src/app/kotak/insurance.ts");



var KotakComponent = /** @class */ (function () {
    function KotakComponent() {
        this.device = _insurance__WEBPACK_IMPORTED_MODULE_2__["devicetwo"];
    }
    KotakComponent.prototype.ngOnInit = function () {
    };
    KotakComponent.prototype.myfunction = function (hero) {
        this.computer = hero;
    };
    KotakComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kotak',
            template: __webpack_require__(/*! ./kotak.component.html */ "./src/app/kotak/kotak.component.html"),
            styles: [__webpack_require__(/*! ./kotak.component.css */ "./src/app/kotak/kotak.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KotakComponent);
    return KotakComponent;
}());



/***/ }),

/***/ "./src/app/lifeguard/lifeguard.component.css":
/*!***************************************************!*\
  !*** ./src/app/lifeguard/lifeguard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpZmVndWFyZC9saWZlZ3VhcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/lifeguard/lifeguard.component.html":
/*!****************************************************!*\
  !*** ./src/app/lifeguard/lifeguard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  lifeguard works!\n</p>\n"

/***/ }),

/***/ "./src/app/lifeguard/lifeguard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/lifeguard/lifeguard.component.ts ***!
  \**************************************************/
/*! exports provided: LifeguardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeguardComponent", function() { return LifeguardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LifeguardComponent = /** @class */ (function () {
    function LifeguardComponent() {
    }
    LifeguardComponent.prototype.ngOnInit = function () {
    };
    LifeguardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lifeguard',
            template: __webpack_require__(/*! ./lifeguard.component.html */ "./src/app/lifeguard/lifeguard.component.html"),
            styles: [__webpack_require__(/*! ./lifeguard.component.css */ "./src/app/lifeguard/lifeguard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LifeguardComponent);
    return LifeguardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected {\r\n    background-color: rgb(255, 0, 0) !important;\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJDQUEyQztJQUMzQyxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let computer of device\"\n  [class.selected]=\"computer === form\"\n  (click)=\"onSelect(computer)\">\n    <div>{{computer.id}}</div>\n    <div>{{computer.name}}</div>\n  </li>\n</ul>\n<div *ngIf=\"form\">\n  <div>{{form.id}}</div>\n  <div>{{form.name}}</div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _userTwo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userTwo */ "./src/app/login/userTwo.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.device = _userTwo__WEBPACK_IMPORTED_MODULE_2__["register"];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSelect = function (computer) {
        this.form = computer;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/userTwo.ts":
/*!**********************************!*\
  !*** ./src/app/login/userTwo.ts ***!
  \**********************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
var register = [
    { id: 1, name: 'Abdul' },
    { id: 2, name: 'Rahima' },
    { id: 3, name: 'Aysha' },
    { id: 4, name: 'usama' },
    { id: 5, name: 'Arshad' },
    { id: 6, name: 'raseen' },
    { id: 7, name: 'iyash' },
];


/***/ }),

/***/ "./src/app/medical/medical.component.css":
/*!***********************************************!*\
  !*** ./src/app/medical/medical.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userformstwo{\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n    padding: 7px;\r\n    width: 500px;\r\n    border: 1px solid #000;\r\n    border-radius: 20px;\r\n}\r\n\r\n    .formusersOne{\r\n        margin-top:15px;\r\n        margin-bottom: 15px;\r\n        padding: 7px;\r\n        width: 500px;\r\n        border: 1px solid #000;\r\n        border-radius: 20px;\r\n      }\r\n\r\n    .invalid-feedback{\r\n          color: #f00;\r\n          margin-bottom: 20px;\r\n          font-weight: bold;\r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWNhbC9tZWRpY2FsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7SUFFSTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsbUJBQW1CO01BQ3JCOztJQUNBO1VBQ0ksV0FBVztVQUNYLG1CQUFtQjtVQUNuQixpQkFBaUI7TUFDckIiLCJmaWxlIjoic3JjL2FwcC9tZWRpY2FsL21lZGljYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyZm9ybXN0d297XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4gICAgLmZvcm11c2Vyc09uZXtcclxuICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAuaW52YWxpZC1mZWVkYmFja3tcclxuICAgICAgICAgIGNvbG9yOiAjZjAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9Il19 */"

/***/ }),

/***/ "./src/app/medical/medical.component.html":
/*!************************************************!*\
  !*** ./src/app/medical/medical.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"form\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n  <label>First Name</label><br>\n  <input type=\"text\" placeholder=\"Enter Your Name\" class=\"userformstwo\" required name=\"firstName\" placeholder=\"First Name\" [(ngModel)]=\"model.firstName\"\n  #firstName=\"ngModel\"><br>\n  <div *ngIf=\"f.submitted || (firstName.dirty || firstName.touched)\" class=\"invalid-feedback\">\n    <div *ngIf=\"firstName.errors.required\">First Name is required</div>\n  </div>\n  <label>Password</label><br>\n  <input type=\"password\" placeholder=\"Enter Your Password\" class=\"formusersOne\" required minlength=\"10\" name=\"password\" placeholder=\"password\" [(ngModel)]=\"model.password\"\n  #password=\"ngModel\"><br>\n  <div *ngIf=\"f.submitted || (password.dirty || password.touched)\" class=\"invalid-feedback\">\n      <div *ngIf=\"password.errors.required\">Password Name is required</div>\n    <div *ngIf=\"password.errors.minlength\">password is required with 10 characters</div>\n  </div>\n  <button type=\"submit\">Sign Up</button>\n</form>\n"

/***/ }),

/***/ "./src/app/medical/medical.component.ts":
/*!**********************************************!*\
  !*** ./src/app/medical/medical.component.ts ***!
  \**********************************************/
/*! exports provided: MedicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalComponent", function() { return MedicalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MedicalComponent = /** @class */ (function () {
    function MedicalComponent() {
        this.model = { firstName: "", password: "" };
    }
    MedicalComponent.prototype.onSubmit = function () {
    };
    MedicalComponent.prototype.ngOnInit = function () {
    };
    MedicalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medical',
            template: __webpack_require__(/*! ./medical.component.html */ "./src/app/medical/medical.component.html"),
            styles: [__webpack_require__(/*! ./medical.component.css */ "./src/app/medical/medical.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MedicalComponent);
    return MedicalComponent;
}());



/***/ }),

/***/ "./src/app/nameeditor/nameeditor.component.css":
/*!*****************************************************!*\
  !*** ./src/app/nameeditor/nameeditor.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hbWVlZGl0b3IvbmFtZWVkaXRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/nameeditor/nameeditor.component.html":
/*!******************************************************!*\
  !*** ./src/app/nameeditor/nameeditor.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <label>Name:</label><br>\n  <input type=\"text\" [formControl]=\"name\">\n  <p>\n    value:{{ name.value }}\n  </p>\n  <button (click)=\"updateName()\">Update Name</button>\n</form>"

/***/ }),

/***/ "./src/app/nameeditor/nameeditor.component.ts":
/*!****************************************************!*\
  !*** ./src/app/nameeditor/nameeditor.component.ts ***!
  \****************************************************/
/*! exports provided: NameeditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameeditorComponent", function() { return NameeditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var NameeditorComponent = /** @class */ (function () {
    function NameeditorComponent() {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    NameeditorComponent.prototype.updateName = function () {
        this.name.setValue("Abdul");
    };
    NameeditorComponent.prototype.ngOnInit = function () {
    };
    NameeditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nameeditor',
            template: __webpack_require__(/*! ./nameeditor.component.html */ "./src/app/nameeditor/nameeditor.component.html"),
            styles: [__webpack_require__(/*! ./nameeditor.component.css */ "./src/app/nameeditor/nameeditor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NameeditorComponent);
    return NameeditorComponent;
}());



/***/ }),

/***/ "./src/app/operations/operations.component.css":
/*!*****************************************************!*\
  !*** ./src/app/operations/operations.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".formusersOne{\r\n  margin-top:15px;\r\n  margin-bottom: 15px;\r\n  padding: 7px;\r\n  width: 500px;\r\n  border: 1px solid #000;\r\n  border-radius: 20px;\r\n}\r\n.invalid-feedback{\r\n  color:#f00;\r\n  margin-bottom: 15px;\r\n  font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3BlcmF0aW9ucy9vcGVyYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9vcGVyYXRpb25zL29wZXJhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtdXNlcnNPbmV7XHJcbiAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLmludmFsaWQtZmVlZGJhY2t7XHJcbiAgY29sb3I6I2YwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/operations/operations.component.html":
/*!******************************************************!*\
  !*** ./src/app/operations/operations.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"form\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n  <label>Last Name</label><br>\n  <input type=\"text\" placeholder=\"Enter Your Name\"  class=\"formusersOne\" required name=\"LastName\" placeholder=\"Last Name\" [(ngModel)]=\"model.LastName\"\n  #LastName=\"ngModel\"><br>\n  <div *ngIf=\"f.submitted || (LastName.dirty || LastName.touched)\" class=\"invalid-feedback\">\n    <div *ngIf=\"LastName.errors.required\">Last Name is required</div>\n  </div>\n  <label>Password</label><br>\n  <input type=\"password\" placeholder=\"Enter Your Password\" class=\"formusersOne\" required minlength=\"10\" name=\"password\" placeholder=\"password\" [(ngModel)]=\"model.password\"\n  #password=\"ngModel\"><br>\n  <div *ngIf=\"f.submitted || (password.dirty || password.touched)\" class=\"invalid-feedback\">\n    <div *ngIf=\"password.errors.required\">Password Name is required</div>\n  <div *ngIf=\"password.errors.minlength\">password is required with 10 characters</div>\n</div>\n  <button type=\"submit\">Sign In</button>\n</form>\n"

/***/ }),

/***/ "./src/app/operations/operations.component.ts":
/*!****************************************************!*\
  !*** ./src/app/operations/operations.component.ts ***!
  \****************************************************/
/*! exports provided: OperationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsComponent", function() { return OperationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OperationsComponent = /** @class */ (function () {
    function OperationsComponent() {
        this.model = { LastName: "", password: "" };
    }
    OperationsComponent.prototype.onSubmit = function () {
    };
    OperationsComponent.prototype.ngOnInit = function () {
    };
    OperationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-operations',
            template: __webpack_require__(/*! ./operations.component.html */ "./src/app/operations/operations.component.html"),
            styles: [__webpack_require__(/*! ./operations.component.css */ "./src/app/operations/operations.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OperationsComponent);
    return OperationsComponent;
}());



/***/ }),

/***/ "./src/app/profiling/mobile.ts":
/*!*************************************!*\
  !*** ./src/app/profiling/mobile.ts ***!
  \*************************************/
/*! exports provided: userprofileTwo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userprofileTwo", function() { return userprofileTwo; });
var userprofileTwo = [
    { empid: 1, name: 'Abdul', Firstname: 'Rahman', Secondname: 'Raziq', email: 'abdul.raziq@gmail.com' },
    { empid: 2, name: 'Kumar', Firstname: 'Jagdeesh', Secondname: 'kumar', email: 'kumar@gmail.com' },
    { empid: 3, name: 'Ezhil', Firstname: 'puzal', Secondname: 'maran', email: 'ezhilmaran@gmail.com' },
    { empid: 4, name: 'Ezhil', Firstname: 'thangavelu', Secondname: 'velu', email: 'ezhilvelu@gmail.com' },
    { empid: 5, name: 'dinesh', Firstname: 'vishwananth', Secondname: 'naidu', email: 'dinesh@gmail.com' },
    { empid: 6, name: 'vishnu', Firstname: 'kumar', Secondname: 'naidu', email: 'vishnu@gmail.com' },
    { empid: 7, name: 'Dilip', Firstname: 'Ramesh', Secondname: 'kumar', email: 'dilip@gmail.com' },
];


/***/ }),

/***/ "./src/app/profiling/profiling.component.css":
/*!***************************************************!*\
  !*** ./src/app/profiling/profiling.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    margin: 0 auto;\r\n    width: 100%;\r\n}\r\ntr{\r\n    text-align: center;\r\n    \r\n}\r\ntd{\r\n    text-align: center;\r\n    line-height: 35px;\r\n    border: 1px solid #000;\r\n}\r\nth{\r\n    background: #2582a1;\r\n    color: #fff;\r\n    padding: 10px;\r\n    border:1px solid #2582a1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsaW5nL3Byb2ZpbGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGluZy9wcm9maWxpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG50cntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbnRke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG59XHJcbnRoe1xyXG4gICAgYmFja2dyb3VuZDogIzI1ODJhMTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzI1ODJhMTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/profiling/profiling.component.html":
/*!****************************************************!*\
  !*** ./src/app/profiling/profiling.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<table>\n  <tr>\n    <th>Emp ID</th>\n    <th>Name</th>\n    <th>First Name</th>\n    <th>Second Name</th>\n    <th>Email</th>\n  </tr>\n  <tr *ngFor=\"let devices of loginuser\">\n   <td>{{devices.empid}}</td>\n   <td>{{devices.name}}</td>\n   <td>{{devices.Firstname}}</td>\n   <td>{{devices.Secondname}}</td>\n   <td>{{devices.email}}</td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/profiling/profiling.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profiling/profiling.component.ts ***!
  \**************************************************/
/*! exports provided: ProfilingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilingComponent", function() { return ProfilingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile */ "./src/app/profiling/mobile.ts");



var ProfilingComponent = /** @class */ (function () {
    function ProfilingComponent() {
        this.loginuser = _mobile__WEBPACK_IMPORTED_MODULE_2__["userprofileTwo"];
    }
    ProfilingComponent.prototype.ngOnInit = function () {
    };
    ProfilingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profiling',
            template: __webpack_require__(/*! ./profiling.component.html */ "./src/app/profiling/profiling.component.html"),
            styles: [__webpack_require__(/*! ./profiling.component.css */ "./src/app/profiling/profiling.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfilingComponent);
    return ProfilingComponent;
}());



/***/ }),

/***/ "./src/app/sectioncobra/sectioncobra.component.css":
/*!*********************************************************!*\
  !*** ./src/app/sectioncobra/sectioncobra.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25jb2JyYS9zZWN0aW9uY29icmEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sectioncobra/sectioncobra.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sectioncobra/sectioncobra.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sectioncobra works!\n</p>\n"

/***/ }),

/***/ "./src/app/sectioncobra/sectioncobra.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sectioncobra/sectioncobra.component.ts ***!
  \********************************************************/
/*! exports provided: SectioncobraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectioncobraComponent", function() { return SectioncobraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SectioncobraComponent = /** @class */ (function () {
    function SectioncobraComponent() {
    }
    SectioncobraComponent.prototype.ngOnInit = function () {
    };
    SectioncobraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sectioncobra',
            template: __webpack_require__(/*! ./sectioncobra.component.html */ "./src/app/sectioncobra/sectioncobra.component.html"),
            styles: [__webpack_require__(/*! ./sectioncobra.component.css */ "./src/app/sectioncobra/sectioncobra.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SectioncobraComponent);
    return SectioncobraComponent;
}());



/***/ }),

/***/ "./src/app/servicefilefour/servicefilefour.component.css":
/*!***************************************************************!*\
  !*** ./src/app/servicefilefour/servicefilefour.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VmaWxlZm91ci9zZXJ2aWNlZmlsZWZvdXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/servicefilefour/servicefilefour.component.html":
/*!****************************************************************!*\
  !*** ./src/app/servicefilefour/servicefilefour.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" (click)=\"getData()\">Services</button>\n<ul *ngFor=\"let hero of books\">\n<li>\n      <input [(ngModel)]=\"hero.id\" placeholder=\"name\"/>\n      {{hero.title}}\n    </li>\n    <button type=\"button\" (click)=\"getData2(hero)\">Submit</button>\n    <!----<button type=\"button\" (click)=\"getdata3(hero.title)\">Submit</button>-->\n  </ul>\n  "

/***/ }),

/***/ "./src/app/servicefilefour/servicefilefour.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/servicefilefour/servicefilefour.component.ts ***!
  \**************************************************************/
/*! exports provided: ServicefilefourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicefilefourComponent", function() { return ServicefilefourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicefilefour_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicefilefour.service */ "./src/app/servicefilefour/servicefilefour.service.ts");



var ServicefilefourComponent = /** @class */ (function () {
    function ServicefilefourComponent(api) {
        this.api = api;
    }
    ServicefilefourComponent.prototype.ngOnInit = function () {
    };
    ServicefilefourComponent.prototype.getData = function () {
        var _this = this;
        this.api.getBooks()
            .subscribe(function (res) {
            console.log(res);
            _this.books = res;
        }, function (err) {
            console.log(err);
        });
    };
    ServicefilefourComponent.prototype.getData2 = function (id) {
        //console.log(id);
        console.log(id.id, id.title);
        //console.log(id.userId);
    };
    ServicefilefourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicefilefour',
            template: __webpack_require__(/*! ./servicefilefour.component.html */ "./src/app/servicefilefour/servicefilefour.component.html"),
            styles: [__webpack_require__(/*! ./servicefilefour.component.css */ "./src/app/servicefilefour/servicefilefour.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicefilefour_service__WEBPACK_IMPORTED_MODULE_2__["ServicefilefourService"]])
    ], ServicefilefourComponent);
    return ServicefilefourComponent;
}());



/***/ }),

/***/ "./src/app/servicefilefour/servicefilefour.service.ts":
/*!************************************************************!*\
  !*** ./src/app/servicefilefour/servicefilefour.service.ts ***!
  \************************************************************/
/*! exports provided: ServicefilefourService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicefilefourService", function() { return ServicefilefourService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ServicefilefourService = /** @class */ (function () {
    function ServicefilefourService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.apiUrl = "https://jsonplaceholder.typicode.com/posts";
    }
    ServicefilefourService.prototype.getBooks = function () {
        return this.http.get(this.apiUrl, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicefilefourService.prototype.getBook = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicefilefourService.prototype.postBook = function (data) {
        return this.http.post(this.apiUrl, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicefilefourService.prototype.updateBook = function (data) {
        return this.http.put(this.apiUrl, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicefilefourService.prototype.deleteBook = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http.delete(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicefilefourService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    ServicefilefourService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ServicefilefourService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ServicefilefourService);
    return ServicefilefourService;
}());



/***/ }),

/***/ "./src/app/servicefiletwo/servicefiletwo.component.css":
/*!*************************************************************!*\
  !*** ./src/app/servicefiletwo/servicefiletwo.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VmaWxldHdvL3NlcnZpY2VmaWxldHdvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/servicefiletwo/servicefiletwo.component.html":
/*!**************************************************************!*\
  !*** ./src/app/servicefiletwo/servicefiletwo.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" (click)=\"getData()\">Services</button>\r\n<ul *ngFor=\"let hero of books\">\r\n<li>\r\n      <input [(ngModel)]=\"hero.id\" placeholder=\"name\"/>\r\n      {{hero.title}}\r\n    </li>\r\n    <button type=\"button\" (click)=\"getData2(hero)\">Submit</button>\r\n    <!----<button type=\"button\" (click)=\"getdata3(hero.title)\">Submit</button>-->\r\n  </ul>\r\n  "

/***/ }),

/***/ "./src/app/servicefiletwo/servicefiletwo.component.ts":
/*!************************************************************!*\
  !*** ./src/app/servicefiletwo/servicefiletwo.component.ts ***!
  \************************************************************/
/*! exports provided: ServicefiletwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicefiletwoComponent", function() { return ServicefiletwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicefiletwo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicefiletwo.service */ "./src/app/servicefiletwo/servicefiletwo.service.ts");



var ServicefiletwoComponent = /** @class */ (function () {
    function ServicefiletwoComponent(api) {
        this.api = api;
    }
    ServicefiletwoComponent.prototype.ngOnInit = function () {
    };
    ServicefiletwoComponent.prototype.getData = function () {
        var _this = this;
        this.api.getBooks()
            .subscribe(function (res) {
            console.log(res);
            _this.books = res;
        }, function (err) {
            console.log(err);
        });
    };
    ServicefiletwoComponent.prototype.getData2 = function (id) {
        console.log(id);
        //console.log(id.id, id.title);
        //console.log(id.userId);
    };
    ServicefiletwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicefiletwo',
            template: __webpack_require__(/*! ./servicefiletwo.component.html */ "./src/app/servicefiletwo/servicefiletwo.component.html"),
            styles: [__webpack_require__(/*! ./servicefiletwo.component.css */ "./src/app/servicefiletwo/servicefiletwo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicefiletwo_service__WEBPACK_IMPORTED_MODULE_2__["ServicefiletwoService"]])
    ], ServicefiletwoComponent);
    return ServicefiletwoComponent;
}());



/***/ }),

/***/ "./src/app/servicefiletwo/servicefiletwo.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/servicefiletwo/servicefiletwo.service.ts ***!
  \**********************************************************/
/*! exports provided: ServicefiletwoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicefiletwoService", function() { return ServicefiletwoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ServicefiletwoService = /** @class */ (function () {
    function ServicefiletwoService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.apiUrl = "https://jsonplaceholder.typicode.com/posts";
    }
    ServicefiletwoService.prototype.getBooks = function () {
        return this.http.get(this.apiUrl, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicefiletwoService.prototype.getBook = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicefiletwoService.prototype.postBook = function (data) {
        return this.http.post(this.apiUrl, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicefiletwoService.prototype.updateBook = function (data) {
        return this.http.put(this.apiUrl, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicefiletwoService.prototype.deleteBook = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http.delete(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicefiletwoService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    ServicefiletwoService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ServicefiletwoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ServicefiletwoService);
    return ServicefiletwoService;
}());



/***/ }),

/***/ "./src/app/servicesfile/servicesfile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/servicesfile/servicesfile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzZmlsZS9zZXJ2aWNlc2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/servicesfile/servicesfile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/servicesfile/servicesfile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" (click)=\"getData()\">Services</button>\n<ul *ngFor=\"let hero of books\">\n<li>\n  <input [(ngModel)]=\"hero.id\" placeholder=\"name\"/>\n  {{hero.title}}\n</li>\n</ul>"

/***/ }),

/***/ "./src/app/servicesfile/servicesfile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/servicesfile/servicesfile.component.ts ***!
  \********************************************************/
/*! exports provided: ServicesfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesfileComponent", function() { return ServicesfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicesfile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicesfile.service */ "./src/app/servicesfile/servicesfile.service.ts");



var ServicesfileComponent = /** @class */ (function () {
    function ServicesfileComponent(api) {
        this.api = api;
    }
    ServicesfileComponent.prototype.ngOnInit = function () {
    };
    ServicesfileComponent.prototype.getData = function () {
        var _this = this;
        this.api.getBooks()
            .subscribe(function (res) {
            console.log(res);
            _this.books = res;
        }, function (err) {
            console.log(err);
        });
    };
    ServicesfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicesfile',
            template: __webpack_require__(/*! ./servicesfile.component.html */ "./src/app/servicesfile/servicesfile.component.html"),
            styles: [__webpack_require__(/*! ./servicesfile.component.css */ "./src/app/servicesfile/servicesfile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicesfile_service__WEBPACK_IMPORTED_MODULE_2__["ServicesfileService"]])
    ], ServicesfileComponent);
    return ServicesfileComponent;
}());



/***/ }),

/***/ "./src/app/servicesfile/servicesfile.service.ts":
/*!******************************************************!*\
  !*** ./src/app/servicesfile/servicesfile.service.ts ***!
  \******************************************************/
/*! exports provided: ServicesfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesfileService", function() { return ServicesfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ServicesfileService = /** @class */ (function () {
    function ServicesfileService(http) {
        this.http = http;
        this.apiUrl = "https://jsonplaceholder.typicode.com/posts";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    ServicesfileService.prototype.getBooks = function () {
        return this.http.get(this.apiUrl, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesfileService.prototype.getBook = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesfileService.prototype.postBook = function (data) {
        return this.http.post(this.apiUrl, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesfileService.prototype.updateBook = function (data) {
        return this.http.put(this.apiUrl, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesfileService.prototype.deleteBook = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http.delete(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesfileService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    ServicesfileService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ServicesfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ServicesfileService);
    return ServicesfileService;
}());



/***/ }),

/***/ "./src/app/side/side.component.css":
/*!*****************************************!*\
  !*** ./src/app/side/side.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGUvc2lkZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/side/side.component.html":
/*!******************************************!*\
  !*** ./src/app/side/side.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n        <nav>\r\n          <ul>\r\n            <li><a routerLink=\"/medical\">Medical</a></li>\r\n            <li><a routerLink=\"/operations\">operations</a></li>\r\n            <li><a routerLink=\"/profiling\">profile</a></li>\r\n          </ul>\r\n        </nav>\r\n        \r\n        <article>\r\n          <router-outlet></router-outlet>\r\n        </article>\r\n      </section>"

/***/ }),

/***/ "./src/app/side/side.component.ts":
/*!****************************************!*\
  !*** ./src/app/side/side.component.ts ***!
  \****************************************/
/*! exports provided: SideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideComponent", function() { return SideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideComponent = /** @class */ (function () {
    function SideComponent() {
    }
    SideComponent.prototype.ngOnInit = function () {
    };
    SideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side',
            template: __webpack_require__(/*! ./side.component.html */ "./src/app/side/side.component.html"),
            styles: [__webpack_require__(/*! ./side.component.css */ "./src/app/side/side.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideComponent);
    return SideComponent;
}());



/***/ }),

/***/ "./src/app/sidebar-one/sidebar-one.component.css":
/*!*******************************************************!*\
  !*** ./src/app/sidebar-one/sidebar-one.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section p{\r\n    color:#000;\r\n    font-weight:bold;\r\n    text-align: left;\r\n    margin-top: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci1vbmUvc2lkZWJhci1vbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXItb25lL3NpZGViYXItb25lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHB7XHJcbiAgICBjb2xvcjojMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/sidebar-one/sidebar-one.component.html":
/*!********************************************************!*\
  !*** ./src/app/sidebar-one/sidebar-one.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"sectionOne\">\n    <p>Facebook helps you connect and share with the <br>people in your life.</p>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/sidebar-one/sidebar-one.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sidebar-one/sidebar-one.component.ts ***!
  \******************************************************/
/*! exports provided: SidebarOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarOneComponent", function() { return SidebarOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarOneComponent = /** @class */ (function () {
    function SidebarOneComponent() {
    }
    SidebarOneComponent.prototype.ngOnInit = function () {
    };
    SidebarOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar-one',
            template: __webpack_require__(/*! ./sidebar-one.component.html */ "./src/app/sidebar-one/sidebar-one.component.html"),
            styles: [__webpack_require__(/*! ./sidebar-one.component.css */ "./src/app/sidebar-one/sidebar-one.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarOneComponent);
    return SidebarOneComponent;
}());



/***/ }),

/***/ "./src/app/sidebars/sidebars.component.css":
/*!*************************************************!*\
  !*** ./src/app/sidebars/sidebars.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n    text-align: center;\r\n    line-height: 35px;\r\n   \r\n}\r\nnav ul{\r\n    margin-top: 25%;\r\n}\r\nnav ul li a{\r\n    text-decoration: none;\r\n    color:#fff;\r\n    font-size: 17px;\r\n    padding: 10px 25px;\r\n}\r\nnav ul li a:hover{\r\n    background: #fff;\r\n    color: #1E1E1E;\r\n    border:1px solid #fff;\r\n    border-radius: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhcnMvc2lkZWJhcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXJzL3NpZGViYXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgXHJcbn1cclxubmF2IHVse1xyXG4gICAgbWFyZ2luLXRvcDogMjUlO1xyXG59XHJcbm5hdiB1bCBsaSBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxufVxyXG5uYXYgdWwgbGkgYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzFFMUUxRTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sidebars/sidebars.component.html":
/*!**************************************************!*\
  !*** ./src/app/sidebars/sidebars.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <ul>\n        <li><a routerLink=\"/avengers\">Sign In</a></li>\n        <li><a routerLink=\"/endgame\">Sign Up</a></li>\n        <li><a routerLink=\"/fulldetails\">Profile</a></li>\n    </ul>\n  </nav>"

/***/ }),

/***/ "./src/app/sidebars/sidebars.component.ts":
/*!************************************************!*\
  !*** ./src/app/sidebars/sidebars.component.ts ***!
  \************************************************/
/*! exports provided: SidebarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarsComponent", function() { return SidebarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarsComponent = /** @class */ (function () {
    function SidebarsComponent() {
    }
    SidebarsComponent.prototype.ngOnInit = function () {
    };
    SidebarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebars',
            template: __webpack_require__(/*! ./sidebars.component.html */ "./src/app/sidebars/sidebars.component.html"),
            styles: [__webpack_require__(/*! ./sidebars.component.css */ "./src/app/sidebars/sidebars.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarsComponent);
    return SidebarsComponent;
}());



/***/ }),

/***/ "./src/app/sportservice/sportservice.component.css":
/*!*********************************************************!*\
  !*** ./src/app/sportservice/sportservice.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nwb3J0c2VydmljZS9zcG9ydHNlcnZpY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sportservice/sportservice.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sportservice/sportservice.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sportservice works!\n</p>\n"

/***/ }),

/***/ "./src/app/sportservice/sportservice.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sportservice/sportservice.component.ts ***!
  \********************************************************/
/*! exports provided: SportserviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportserviceComponent", function() { return SportserviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SportserviceComponent = /** @class */ (function () {
    function SportserviceComponent() {
    }
    SportserviceComponent.prototype.ngOnInit = function () {
    };
    SportserviceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sportservice',
            template: __webpack_require__(/*! ./sportservice.component.html */ "./src/app/sportservice/sportservice.component.html"),
            styles: [__webpack_require__(/*! ./sportservice.component.css */ "./src/app/sportservice/sportservice.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SportserviceComponent);
    return SportserviceComponent;
}());



/***/ }),

/***/ "./src/app/top/top.component.css":
/*!***************************************!*\
  !*** ./src/app/top/top.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    list-style-type: none;\r\n    width:70%;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\nul li{\r\n    display: inline;\r\n}\r\nul li a{\r\n    color: #fff;\r\n    text-decoration: none;\r\n    padding: 10px;\r\n}\r\n.logo{\r\n    width: 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wL3RvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsU0FBUztJQUNULFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdG9wL3RvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWx7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHdpZHRoOjcwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG59XHJcbnVsIGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbnVsIGxpIGF7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmxvZ297XHJcbiAgICB3aWR0aDogMzAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/top/top.component.html":
/*!****************************************!*\
  !*** ./src/app/top/top.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"logo\">\n    <p>Apollo Hospital</p>\n  </div>  \n  <ul>\n    <li><a routerLink=\"/medical\">Medical</a></li>\n    <li><a routerLink=\"/operations\">operations</a></li>\n    <li><a routerLink=\"/profiling\">profile</a></li>\n  </ul>    \n  </header>\n "

/***/ }),

/***/ "./src/app/top/top.component.ts":
/*!**************************************!*\
  !*** ./src/app/top/top.component.ts ***!
  \**************************************/
/*! exports provided: TopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopComponent", function() { return TopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopComponent = /** @class */ (function () {
    function TopComponent() {
    }
    TopComponent.prototype.ngOnInit = function () {
    };
    TopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top',
            template: __webpack_require__(/*! ./top.component.html */ "./src/app/top/top.component.html"),
            styles: [__webpack_require__(/*! ./top.component.css */ "./src/app/top/top.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopComponent);
    return TopComponent;
}());



/***/ }),

/***/ "./src/app/userforms/userforms.component.css":
/*!***************************************************!*\
  !*** ./src/app/userforms/userforms.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text1{\r\n    width: 50%;\r\n    float: left;\r\n    margin: 0 auto;\r\n}\r\n.text1 p{\r\n    text-align: center;\r\n    font-family: 'Heebo', sans-serif;\r\n    font-weight: bold;\r\n    color: #3b5998;\r\n    font-size: 18px;\r\n\r\n}\r\nform{\r\n    width: 50%;\r\n    float:left;\r\n}\r\n#usrerfive{\r\n    width: 57%;\r\n    margin-top: 2%;\r\n}\r\n#usrersix{\r\n    width: 57%;\r\n    margin-top: 2%;\r\n}\r\ninput{\r\n    padding: 10px;\r\n    border-radius: 4px;\r\n    border: 1px solid #000;\r\n\r\n}\r\ninput#userFour {\r\n    margin-left: 1%;\r\n}\r\nform h3{\r\n    font-family: 'Heebo', sans-serif;\r\n    color: #000;\r\n    font-size: 30px;\r\n    margin-bottom: 0px;\r\n}\r\nform p{\r\n    font-family: 'Heebo', sans-serif;\r\n    color: #000;\r\n    font-size: 17px;\r\n    font-weight: bold;\r\n}\r\nselect{\r\n    padding: 5px 15px;\r\n}\r\na{\r\n    color:#3b5998;\r\n    font-size: 12px;\r\n    font-family: 'Heebo', sans-serif;\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n}\r\na:hover{\r\n    text-decoration: underline;\r\n\r\n}\r\n.check{\r\n    margin-top: 2%;\r\n}\r\nspan{\r\n    font-size: 12px;\r\n    color:#000;\r\n    font-family: 'Heebo', sans-serif;\r\n\r\n}\r\nbutton{\r\n    padding: 10px 30px;\r\n    margin-top:12px;\r\n    background: linear-gradient(#67ae55, #578843);\r\n    box-shadow: inset 0 1px 1px #a4e388;\r\n    border-color: #3b6e22 #3b6e22 #2c5115;\r\n    color: #fff;\r\n}\r\n.invalid-feedback{\r\n    color: #f00 ;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmZvcm1zL3VzZXJmb3Jtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTs7QUFFbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztBQUNsQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7O0FBRTFCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMEJBQTBCOztBQUU5QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixnQ0FBZ0M7O0FBRXBDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDZDQUE2QztJQUM3QyxtQ0FBbUM7SUFDbkMscUNBQXFDO0lBQ3JDLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3VzZXJmb3Jtcy91c2VyZm9ybXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0MXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi50ZXh0MSBwe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdIZWVibycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjM2I1OTk4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxufVxyXG5mb3Jte1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbiN1c3JlcmZpdmV7XHJcbiAgICB3aWR0aDogNTclO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuI3VzcmVyc2l4e1xyXG4gICAgd2lkdGg6IDU3JTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG5cclxufVxyXG5pbnB1dCN1c2VyRm91ciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbn1cclxuZm9ybSBoM3tcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVlYm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuZm9ybSBwe1xyXG4gICAgZm9udC1mYW1pbHk6ICdIZWVibycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbnNlbGVjdHtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG59XHJcbmF7XHJcbiAgICBjb2xvcjojM2I1OTk4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdIZWVibycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5hOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblxyXG59XHJcbi5jaGVja3tcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcbnNwYW57XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjojMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdIZWVibycsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcbmJ1dHRvbntcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgIG1hcmdpbi10b3A6MTJweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNjdhZTU1LCAjNTc4ODQzKTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCAjYTRlMzg4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2I2ZTIyICMzYjZlMjIgIzJjNTExNTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5pbnZhbGlkLWZlZWRiYWNre1xyXG4gICAgY29sb3I6ICNmMDAgO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/userforms/userforms.component.html":
/*!****************************************************!*\
  !*** ./src/app/userforms/userforms.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"text1\">\n    <p>Facebook helps you connect and share with the<br> people in your life.\n    </p>\n    <img src=\"assets/images/7XdR1KwCifL.png\">\n  </div>\n  <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n    <h3>Create an account</h3>\n    <p>It's free and always will be.</p>\n\n    <input type=\"text\" id=\"userthree\" required name=\"firstName\" placeholder=\"First Name\" [(ngModel)]=\"model.firstName\"\n      #firstName=\"ngModel\">\n    <div *ngIf=\"f.invalid && (firstName.dirty || firstName.touched)\" class=\"invalid-feedback\">\n      <div *ngIf=\"firstName.errors.required\">First Name is required</div>\n    </div>\n\n    <input type=\"text\" id=\"userFour\" required minlength=\"4\" name=\"lastName\" placeholder=\"Surname\" [(ngModel)]=\"model.lastName\"\n      #lastName=\"ngModel\"><br>\n    <div *ngIf=\"f.invalid && (lastName.dirty || lastName.touched)\" class=\"invalid-feedback\">\n      <div *ngIf=\"lastName.errors.required\">last Name must 4 character</div>\n    </div>\n\n    <input type=\"email\" id=\"usrerfive\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" name=\"email\" placeholder=\"Mobile Number Or Email Address\"\n      [(ngModel)]=\"model.email\" #email=\"ngModel\"><br>\n    <div *ngIf=\"f.invalid && (email.dirty || email.touched)\" class=\"invalid-feedback\">\n      <div *ngIf=\"email.errors.required\">Email pattern required</div>\n    </div>\n\n    <input type=\"password\" id=\"usrersix\" required minlength=\"10\" name=\"password\" placeholder=\"password\" [(ngModel)]=\"model.password\"\n      #password=\"ngModel\"><br>\n    <div *ngIf=\"f.invalid && (password.dirty || password.touched)\" class=\"invalid-feedback\">\n      <div *ngIf=\"password.errors.minlength\">password is required with 10 characters</div>\n    </div>\n    <!---<p>Birthday</p>\n  <select>\n      <option value=\"volvo\">1</option>\n      <option value=\"volvo\">2</option>\n      <option value=\"volvo\">3</option>\n      <option value=\"volvo\">4</option>\n      <option value=\"volvo\">5</option>\n      <option value=\"volvo\">6</option>\n      <option value=\"volvo\">7</option>\n      <option value=\"volvo\">8</option>\n      <option value=\"volvo\">9</option>\n      <option value=\"volvo\">10</option>\n      <option value=\"volvo\">11</option>\n      <option value=\"volvo\">12</option>\n      <option value=\"volvo\">13</option>\n      <option value=\"volvo\">14</option>\n      <option value=\"volvo\">15</option>\n      <option value=\"volvo\">16</option>\n      <option value=\"volvo\">17</option>\n      <option value=\"volvo\">18</option>\n      <option value=\"volvo\">19</option>\n      <option value=\"volvo\">20</option>\n      <option value=\"volvo\">21</option>\n      <option value=\"volvo\">22</option>\n      <option value=\"volvo\">23</option>\n      <option value=\"volvo\">24</option>\n      <option value=\"volvo\">25</option>\n      <option value=\"volvo\">26</option>\n      <option value=\"volvo\">27</option>\n      <option value=\"volvo\">28</option>\n      <option value=\"volvo\">29</option>\n      <option value=\"volvo\">30</option>\n    </select>\n    <select>\n        <option value=\"volvo\">Jan</option>\n        <option value=\"saab\">Feb</option>\n        <option value=\"opel\">Mar</option>\n        <option value=\"audi\">Apr</option>\n        <option value=\"audi\">Apr</option>\n        <option value=\"audi\">May</option>\n        <option value=\"audi\">June</option>\n        <option value=\"audi\">July</option>\n        <option value=\"audi\">Aug</option>\n        <option value=\"audi\">Sept</option>\n        <option value=\"audi\">Oct</option>\n        <option value=\"audi\">Nov</option>\n        <option value=\"audi\">Dec</option>\n      </select>\n      <select>\n          <option value=\"volvo\">2001</option>\n          <option value=\"volvo\">2002</option>\n          <option value=\"volvo\">2003</option>\n          <option value=\"volvo\">2004</option>\n          <option value=\"volvo\">2005</option>\n          <option value=\"volvo\">2006</option>\n          <option value=\"volvo\">2007</option>\n          <option value=\"volvo\">2008</option>\n          <option value=\"volvo\">2009</option>\n          <option value=\"volvo\">2010</option>\n         \n        </select>\n        <span><a>Why do I need to provide my date of birth?</a></span><br>\n        <div class=\"check\">\n          <input type=\"checkbox\" name=\"female\" value=\"Female\" class=\"checkfemale\">Female\n          <input type=\"checkbox\" name=\"male\" value=\"male\" class=\"male\">Male\n        </div>\n        <span>By clicking Sign Up, you agree to our Terms, Data Policy and<br> Cookie Policy. You may receive SMS notifications from us and <br>can opt out at any time.</span><br>-->\n    <button type=\"submit\" class=\"btn\">Sign Up</button><br>\n    <!--<a>Create a page for celebrity, band or business</a>-->\n  </form>\n\n  <div>{{device.firstName}}</div>\n  <div>{{device.lastName}}</div>\n  <div>{{device.email}}</div>\n  <div>{{device.password}}</div>\n\n\n\n</section>"

/***/ }),

/***/ "./src/app/userforms/userforms.component.ts":
/*!**************************************************!*\
  !*** ./src/app/userforms/userforms.component.ts ***!
  \**************************************************/
/*! exports provided: UserformsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserformsComponent", function() { return UserformsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _userforms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userforms.service */ "./src/app/userforms/userforms.service.ts");



var UserformsComponent = /** @class */ (function () {
    function UserformsComponent(api) {
        this.api = api;
        this.model = { firstName: "", lastName: "", email: "", password: "" };
    }
    UserformsComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    UserformsComponent.prototype.onSubmit = function (data) {
        console.log(data);
        this.device = data;
    };
    UserformsComponent.prototype.getData = function () {
        this.api.getBooks()
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    UserformsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userforms',
            template: __webpack_require__(/*! ./userforms.component.html */ "./src/app/userforms/userforms.component.html"),
            styles: [__webpack_require__(/*! ./userforms.component.css */ "./src/app/userforms/userforms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_userforms_service__WEBPACK_IMPORTED_MODULE_2__["UserformsService"]])
    ], UserformsComponent);
    return UserformsComponent;
}());



/***/ }),

/***/ "./src/app/userforms/userforms.service.ts":
/*!************************************************!*\
  !*** ./src/app/userforms/userforms.service.ts ***!
  \************************************************/
/*! exports provided: UserformsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserformsService", function() { return UserformsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var UserformsService = /** @class */ (function () {
    function UserformsService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.apiUrl = "https://jsonplaceholder.typicode.com/posts";
    }
    UserformsService.prototype.getBooks = function () {
        return this.http.get(this.apiUrl, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    /*getBook(id: string): Observable<any> {
      const url = `${apiUrl}/${id}`;
      return this.http.get(url, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
    }
    
    postBook(data): Observable<any> {
      return this.http.post(apiUrl, data, httpOptions)
        .pipe(
          catchError(this.handleError)
        );
    }
    
    updateBook(data): Observable<any> {
      return this.http.put(apiUrl, data, httpOptions)
        .pipe(
          catchError(this.handleError)
        );
    }
    
    deleteBook(id: string): Observable<{}> {
      const url = `${apiUrl}/${id}`;
      return this.http.delete(url, httpOptions)
        .pipe(
          catchError(this.handleError)
        );
    }*/
    UserformsService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    UserformsService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    UserformsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserformsService);
    return UserformsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\admin\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map