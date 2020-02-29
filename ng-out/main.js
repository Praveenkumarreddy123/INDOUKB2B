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

module.exports = "\r\n\r\n<router-outlet></router-outlet>\r\n"

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
        this.title = 'digital-market';
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_opprotunites_opprotunites_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/opprotunites/opprotunites.component */ "./src/app/components/opprotunites/opprotunites.component.ts");
/* harmony import */ var _route_app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./route/app-routing.module */ "./src/app/route/app-routing.module.ts");
/* harmony import */ var _components_create_tender_create_tender_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/create-tender/create-tender.component */ "./src/app/components/create-tender/create-tender.component.ts");
/* harmony import */ var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/dataservice.service */ "./src/app/services/dataservice.service.ts");
/* harmony import */ var _classes_tender__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./classes/tender */ "./src/app/classes/tender.ts");
/* harmony import */ var _pipes_removeTime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/removeTime */ "./src/app/pipes/removeTime.ts");
/* harmony import */ var _pipes_tendersearchbyindustry__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/tendersearchbyindustry */ "./src/app/pipes/tendersearchbyindustry.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_opprotunites_opprotunites_component__WEBPACK_IMPORTED_MODULE_9__["OpprotunitesComponent"],
                _components_create_tender_create_tender_component__WEBPACK_IMPORTED_MODULE_11__["CreateTenderComponent"],
                _pipes_removeTime__WEBPACK_IMPORTED_MODULE_14__["RemoveTime"],
                _pipes_tendersearchbyindustry__WEBPACK_IMPORTED_MODULE_15__["FilterTender"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _route_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["APP_ROUTING"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [_services_dataservice_service__WEBPACK_IMPORTED_MODULE_12__["DataserviceService"], _classes_tender__WEBPACK_IMPORTED_MODULE_13__["Tender"], _classes_tender__WEBPACK_IMPORTED_MODULE_13__["SearchTenderFilter"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"], useValue: '/Projects/Workplace/INDOUKB2B/' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/tender.ts":
/*!***********************************!*\
  !*** ./src/app/classes/tender.ts ***!
  \***********************************/
/*! exports provided: Tender, SearchTenderFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tender", function() { return Tender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTenderFilter", function() { return SearchTenderFilter; });
var Tender = /** @class */ (function () {
    function Tender() {
    }
    return Tender;
}());

var SearchTenderFilter = /** @class */ (function () {
    function SearchTenderFilter() {
    }
    return SearchTenderFilter;
}());



/***/ }),

/***/ "./src/app/components/create-tender/create-tender.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/create-tender/create-tender.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  create-tender works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/create-tender/create-tender.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/create-tender/create-tender.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLXRlbmRlci9jcmVhdGUtdGVuZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/create-tender/create-tender.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/create-tender/create-tender.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateTenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTenderComponent", function() { return CreateTenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreateTenderComponent = /** @class */ (function () {
    function CreateTenderComponent() {
    }
    CreateTenderComponent.prototype.ngOnInit = function () {
    };
    CreateTenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-tender',
            template: __webpack_require__(/*! ./create-tender.component.html */ "./src/app/components/create-tender/create-tender.component.html"),
            styles: [__webpack_require__(/*! ./create-tender.component.scss */ "./src/app/components/create-tender/create-tender.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreateTenderComponent);
    return CreateTenderComponent;
}());



/***/ }),

/***/ "./src/app/components/opprotunites/opprotunites.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/opprotunites/opprotunites.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"primary\" class=\"opprotunites_page\">\r\n    <div class=\"FormContainer box-shadow-none p-0 m-auto\">\r\n       <form name=\"OpprotunitesForm\" action=\"\" method=\"post\" autocomplete=\"off\">\r\n           <div class=\"opprotunites_header\">\r\n               <div class=\"main_block\">\r\n                   <div class=\"row no-gutters align-items-center\">\r\n                       <div class=\"col-md-3\">\r\n                           <h2 class=\"section_card_title mb-0 border-0 p-0 font-weight-bold\">OPPORTUNITIES</h2>\r\n                       </div>\r\n                       <div class=\"col-md-9\">\r\n                           <div class=\"row\">\r\n                               <div class=\"col-md-10 search_container\">\r\n                               <div class=\"form-group mb-0\"> \r\n                                       <div class=\"searchbox\">\r\n                                        <input type=\"text\" class=\"bg-transparent\" name=\"searchtender_input\" [(ngModel)]=\"searchTender\" id=\"searchtender_input\" aria-describedby=\"Email\" placeholder=\"Search by Indutries\">\r\n                                       </div>\r\n                                   </div>\r\n                               </div>\r\n                               <div class=\"col-md-2 postTender_container\">\r\n                               <a href=\"Signup.php\" class=\"btn siteBtn-primary-outline-blue text-uppercase \">+ Post Tender</a>\r\n                               </div>\r\n                           </div>\r\n                       </div>\r\n                   </div>\r\n               </div>\r\n           </div> \r\n           <div class=\"opprotunites_section\">\r\n               <div class=\"main_block\">\r\n                   <div class=\"row\">\r\n                           <div class=\"col-md-3\">\r\n                              <div class=\"filter_container\">\r\n                                   <div class=\"form-group\">\r\n                                       <label for=\"user_email\">Filter Tenders</label>\r\n                                       <input type=\"text\" class=\"\" placeholder=\"Search Tenders by Title\" name=\"login_email\" [(ngModel)]=\"filterObject.Tender_Title\" id=\"login_email\" aria-describedby=\"Email\" [ngModelOptions]=\"{standalone: true}\">\r\n                                   </div>\r\n                                   <div class=\"form-group\">\r\n                                       <label for=\"filter_Industry\">Industry</label>\r\n                                       <select [(ngModel)]=\"filterObject.Industry\" class=\"form-control\" id=\"filter_Industry\" [ngModelOptions]=\"{standalone: true}\">\r\n                                           <option selected value=\"0\">Industry</option>\r\n                                           <option value=\"Computer/Information Technology\">Computer/Information Technology</option>\r\n                                           <option value=\"Accounting/Auditing/Taxation\">Accounting/Auditing/Taxation</option>\r\n                                           <option value=\"Admin/Human Resources\">Admin/Human Resources</option>\r\n                                           <option value=\"Arts/Media and Communications\">Arts/Media and Communications</option>\r\n                                           <option value=\"Events/Promotions\">Events/Promotions</option>\r\n                                           <option value=\"Garments\">Garments</option>\r\n                                           <option value=\"Electronics and Electricals\">Electronics and Electricals</option>\r\n                                           <option value=\"Industrial Suppliers\">Industrial Suppliers</option>\r\n                                           <option value=\"Hotels & Restaurants\">Hotels & Restaurants</option>\r\n                                           <option value=\"Agri Products/Commodities other\">Agri Products/Commodities other</option>\r\n                                       </select>\r\n                                   </div>\r\n                                   <div class=\"form-group\">\r\n                                       <label for=\"filter_date_posted\">Date Posted</label>\r\n                                       <select [(ngModel)]=\"filterObject.Posted_date\" class=\"form-control\" id=\"filter_date_posted\" [ngModelOptions]=\"{standalone: true}\">\r\n                                           <option value=\"0\" selected=\"selected\" >Date Posted</option>\r\n                                           <option value=\"last-24-hours\">Past 24 hours</option>\r\n                                           <option value=\"last-Week\">Past 1 Week</option>\r\n                                           <option value=\"last-Month\">Past 1 Month</option>\r\n                                           <option value=\"last-6-Month\">Past 6 Month</option>\r\n                                       </select>\r\n                                   </div>\r\n                                   <div class=\"form-group\">\r\n                                       <label for=\"filter_tenderValue\">Tender Value</label>\r\n                                       <select [(ngModel)]=\"filterObject.filterByTenderValue\"  class=\"form-control\" id=\"filter_tenderValue\" [ngModelOptions]=\"{standalone: true}\">\r\n                                           <option selected=\"selected\" value=\"0\">Tender Value</option>\r\n                                           <option value=\"below-1-lakh\">Less than 1 lakh</option>\r\n                                           <option value=\"1-lakh-to-5-lakh\">1 lakh to 5 lakh</option>\r\n                                           <option value=\"10-lakh-to-1-core\">10 lakh to 1 core</option>\r\n                                           <option value=\"above-1-core\">Above 1 core</option>\r\n                                       </select>\r\n                                   </div>\r\n                                   <div class=\"text-center\">\r\n                                       <a href=\"javascript:void(0)\" class=\"btn siteBtn-primary-outline-blue text-uppercase d-block \" (click)=\"OnSearchFilter()\">Submit</a>\r\n                                   </div>\r\n                                   <div class=\"text-center pt-3\">\r\n                                       <a href=\"javascript:void(0)\" (click)=\"OnResetSearchFilter()\" class=\"reset\">Reset</a>\r\n                                   </div>\r\n                              </div>\r\n                           </div>\r\n                       <div class=\"col-md-9 opprotunites_card_container\">\r\n                           \r\n                           <div class=\"row\">\r\n                              <div class=\"alert alert-warning\" *ngIf=\"TenderList.length < 1\">No Data Available</div>\r\n                               <div class=\"col-12 col-sm-12 col-md-6 col-lg-6 tender_card\" *ngFor=\"let tender of TenderList | filterTender : searchTender : 'searchFilter'\">\r\n                                   <div class=\"content\">\r\n                                       <div class=\"tender_header\">\r\n                                           <p class=\"m-0\">{{tender.Tender_Title}}</p>\r\n                                           <div clas=\"\">\r\n                                           <span class=\"shortlist_icon\"></span>\r\n                                           </div>\r\n                                       </div>\r\n                                       <div class=\"tender_body\">\r\n                                           <ul class=\"list-unstyled\">\r\n                                               <li><span>Contract Type :</span><span>{{tender.Contract_Type}}</span></li>\r\n                                               <li><span>Industry :</span><span>{{tender.Industry}}</span></li>\r\n                                               <li><span>Tender Value:</span><span>{{tender.Opportunity_Value_Min}} to {{tender.Opportunity_Value_Max}}</span></li>\r\n                                               <li><span>Tender Ref No :</span><span>TED{{tender.Tender_Id}}</span></li>\r\n                                           </ul>\r\n                                           <div class=\"tender_dates\">\r\n                                               <div class=\"postedDate\">\r\n                                                   <p>Posted :<span>{{tender.Posted_date | removeTime}}</span></p>\r\n                                               </div>\r\n                                               <div class=\"cloeddate\">\r\n                                                   <p>Closed :<span>{{tender.Closed_Date | removeTime}}</span></p>\r\n                                               </div>\r\n                                           </div>\r\n                                       </div>\r\n                                       <div class=\"tender_footer\">\r\n                                           <div class=\"text-right\">\r\n                                               <a href=\"Signup.php\" class=\"btn siteBtn-primary-blue text-uppercase  \">Apply</a>\r\n                                           </div>\r\n                                       </div>\r\n                                   </div>\r\n                               </div>\r\n                               <!-- <div class=\"col-12 col-sm-12 col-md-6 col-lg-6 tender_card\">\r\n                                   <div class=\"content\">\r\n                                       <div class=\"tender_header\">\r\n                                           <p class=\"m-0\">Petra Wheel Chair</p>\r\n                                           <div clas=\"\">\r\n                                           <span class=\"shortlist_icon shortlisted\"></span>\r\n                                           </div>\r\n                                       </div>\r\n                                       <div class=\"tender_body\">\r\n                                           <ul class=\"list-unstyled\">\r\n                                               <li><span>Contract Type :</span><span>Project Based</span></li>\r\n                                               <li><span>Industry :</span><span>Computer/Information Technology</span></li>\r\n                                               <li><span>Tender Value:</span><span>$200000 to 400000</span></li>\r\n                                               <li><span>Tender Ref No :</span><span>TED0000001</span></li>\r\n                                           </ul>\r\n                                           <div class=\"tender_dates\">\r\n                                               <div class=\"postedDate\">\r\n                                                   <p>Posted :<span>20/12/2019</span></p>\r\n                                               </div>\r\n                                               <div class=\"cloeddate\">\r\n                                                   <p>Closed :<span>20/12/2019</span></p>\r\n                                               </div>\r\n                                           </div>\r\n                                       </div>\r\n                                       <div class=\"tender_footer\">\r\n                                           <div class=\"text-right\">\r\n                                               <a href=\"Signup.php\" class=\"btn siteBtn-primary-blue text-uppercase  \">Apply</a>\r\n                                           </div>\r\n                                       </div>\r\n                                   </div>\r\n                               </div>\r\n                               <div class=\"col-12 col-sm-12 col-md-6 col-lg-6 tender_card\">\r\n                                   <div class=\"content\">\r\n                                       <div class=\"tender_header\">\r\n                                           <p class=\"m-0\">Petra Wheel Chair</p>\r\n                                           <div clas=\"\">\r\n                                           <span class=\"shortlist_icon\"></span>\r\n                                           </div>\r\n                                       </div>\r\n                                       <div class=\"tender_body\">\r\n                                           <ul class=\"list-unstyled\">\r\n                                               <li><span>Contract Type :</span><span>Project Based</span></li>\r\n                                               <li><span>Industry :</span><span>Computer/Information Technology</span></li>\r\n                                               <li><span>Tender Value:</span><span>$200000 to 400000</span></li>\r\n                                               <li><span>Tender Ref No :</span><span>TED0000001</span></li>\r\n                                           </ul>\r\n                                           <div class=\"tender_dates\">\r\n                                               <div class=\"postedDate\">\r\n                                                   <p>Posted :<span>20/12/2019</span></p>\r\n                                               </div>\r\n                                               <div class=\"cloeddate\">\r\n                                                   <p>Closed :<span>20/12/2019</span></p>\r\n                                               </div>\r\n                                           </div>\r\n                                       </div>\r\n                                       <div class=\"tender_footer\">\r\n                                           <div class=\"text-right\">\r\n                                               <a href=\"Signup.php\" class=\"btn siteBtn-primary-blue text-uppercase  \">Apply</a>\r\n                                           </div>\r\n                                       </div>\r\n                                   </div>\r\n                               </div>\r\n                               <div class=\"col-12 col-sm-12 col-md-6 col-lg-6 tender_card\">\r\n                                   <div class=\"content\">\r\n                                       <div class=\"tender_header\">\r\n                                           <p class=\"m-0\">Petra Wheel Chair</p>\r\n                                           <div clas=\"\">\r\n                                           <span class=\"shortlist_icon\"></span>\r\n                                           </div>\r\n                                       </div>\r\n                                       <div class=\"tender_body\">\r\n                                           <ul class=\"list-unstyled\">\r\n                                               <li><span>Contract Type :</span><span>Project Based</span></li>\r\n                                               <li><span>Industry :</span><span>Computer/Information Technology</span></li>\r\n                                               <li><span>Tender Value:</span><span>$200000 to 400000</span></li>\r\n                                               <li><span>Tender Ref No :</span><span>TED0000001</span></li>\r\n                                           </ul>\r\n                                           <div class=\"tender_dates\">\r\n                                               <div class=\"postedDate\">\r\n                                                   <p>Posted :<span>20/12/2019</span></p>\r\n                                               </div>\r\n                                               <div class=\"cloeddate\">\r\n                                                   <p>Closed :<span>20/12/2019</span></p>\r\n                                               </div>\r\n                                           </div>\r\n                                       </div>\r\n                                       <div class=\"tender_footer\">\r\n                                           <div class=\"text-right\">\r\n                                               <a href=\"Signup.php\" class=\"btn siteBtn-primary-blue text-uppercase  \">Apply</a>\r\n                                           </div>\r\n                                       </div>\r\n                                   </div>\r\n                               </div>  -->\r\n                           </div>\r\n                       </div>\r\n                   </div>\r\n               </div>\r\n           </div>\r\n       </form>\r\n       <p class=\"text-center\"> &copy; \r\n           <script>  document.write(new Date().getFullYear()); </script>   Ind-london2020.com. All rights reserved.</p>\r\n    </div>\r\n</div> "

/***/ }),

/***/ "./src/app/components/opprotunites/opprotunites.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/opprotunites/opprotunites.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3Bwcm90dW5pdGVzL29wcHJvdHVuaXRlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/opprotunites/opprotunites.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/opprotunites/opprotunites.component.ts ***!
  \*******************************************************************/
/*! exports provided: OpprotunitesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpprotunitesComponent", function() { return OpprotunitesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dataservice.service */ "./src/app/services/dataservice.service.ts");
/* harmony import */ var src_app_classes_tender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/tender */ "./src/app/classes/tender.ts");




var OpprotunitesComponent = /** @class */ (function () {
    function OpprotunitesComponent(service, tender, filterObject) {
        this.service = service;
        this.tender = tender;
        this.filterObject = filterObject;
        this.TenderList = [];
        this.TenderList_cpy = [];
        this.people = [];
    }
    OpprotunitesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getTenderDetails().subscribe(function (datas) {
            if (datas) {
                datas.forEach(function (data, index) {
                    data.Opportunity_Value_Max = +data.Opportunity_Value_Max;
                    data.Opportunity_Value_Min = +data.Opportunity_Value_Min;
                    _this.TenderList.push(data);
                    _this.TenderList_cpy = _this.TenderList;
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    OpprotunitesComponent.prototype.OnSearchFilter = function () {
        var _this = this;
        var searchFilter = this.filterObject;
        this.TenderList = this.TenderList_cpy;
        console.log(searchFilter);
        var filterTender = this.TenderList.filter(function (tender, index) {
            return ((searchFilter.hasOwnProperty('Tender_Title') ? tender.Tender_Title.includes(searchFilter.Tender_Title) : true) && (searchFilter.hasOwnProperty('Industry') ? tender.Industry === searchFilter.Industry : true) && _this.AmountFilter(tender, searchFilter) && _this.filterByJoinDate(tender, searchFilter));
        });
        this.TenderList = filterTender;
    };
    OpprotunitesComponent.prototype.OnResetSearchFilter = function () {
        this.filterObject = new src_app_classes_tender__WEBPACK_IMPORTED_MODULE_3__["SearchTenderFilter"]();
        this.TenderList = this.TenderList_cpy;
    };
    OpprotunitesComponent.prototype.AmountFilter = function (tender, fliterObj) {
        return fliterObj.hasOwnProperty('filterByTenderValue') ? this.AmountFormetCostomization(tender, fliterObj) : true;
    };
    OpprotunitesComponent.prototype.filterByJoinDate = function (user, fliterObj) {
        return fliterObj.hasOwnProperty('Posted_date') ? this.DateFormetCustomization(user, fliterObj) : true;
    };
    OpprotunitesComponent.prototype.AmountFormetCostomization = function (tender, fliterObj) {
        switch (fliterObj.filterByTenderValue) {
            case 'below-1-lakh':
                return tender.Opportunity_Value_Max < 100000;
                break;
            case '1-lakh-to-5-lakh':
                return tender.Opportunity_Value_Max >= 100000 && tender.Opportunity_Value_Max <= 500000;
                break;
            case '10-lakh-to-1-core':
                return tender.Opportunity_Value_Max >= 1000000 && tender.Opportunity_Value_Max <= 1000000;
                break;
            case 'above-1-core':
                return tender.Opportunity_Value_Max > 1000000;
                break;
            default:
                return true;
                break;
        }
    };
    OpprotunitesComponent.prototype.DateFormetCustomization = function (tender, fliterObj) {
        var currentDate = new Date();
        switch (fliterObj.Posted_date) {
            case 'last-24-hours':
                return this.getsecoundsDiffbt(new Date().getTime(), new Date(tender.Posted_date).getTime()) === 1 ? true : false;
                break;
            case 'last-Week':
                return this.getsecoundsDiffbt(new Date().getTime(), new Date(tender.Posted_date).getTime()) <= 7 ? true : false;
                break;
            case 'last-Month':
                return this.getsecoundsDiffbt(new Date().getTime(), new Date(tender.Posted_date).getTime()) <= 31 ? true : false;
                break;
            case 'last-6-Month':
                return this.getsecoundsDiffbt(new Date().getTime(), new Date(tender.Posted_date).getTime()) <= (31 * 6) ? true : false;
                break;
            default:
                return true;
                break;
        }
    };
    OpprotunitesComponent.prototype.getsecoundsDiffbt = function (Date1, Date2) {
        var diffsec = Math.abs(Date1 - Date2);
        var diffDays = Math.ceil(diffsec / (1000 * 3600 * 24));
        return diffDays;
    };
    OpprotunitesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-opprotunites',
            template: __webpack_require__(/*! ./opprotunites.component.html */ "./src/app/components/opprotunites/opprotunites.component.html"),
            styles: [__webpack_require__(/*! ./opprotunites.component.scss */ "./src/app/components/opprotunites/opprotunites.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"], src_app_classes_tender__WEBPACK_IMPORTED_MODULE_3__["Tender"], src_app_classes_tender__WEBPACK_IMPORTED_MODULE_3__["SearchTenderFilter"]])
    ], OpprotunitesComponent);
    return OpprotunitesComponent;
}());



/***/ }),

/***/ "./src/app/pipes/removeTime.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/removeTime.ts ***!
  \*************************************/
/*! exports provided: RemoveTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveTime", function() { return RemoveTime; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RemoveTime = /** @class */ (function () {
    function RemoveTime() {
    }
    RemoveTime.prototype.transform = function (date) {
        return date.split(' ')[0];
    };
    RemoveTime = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'removeTime'
        })
    ], RemoveTime);
    return RemoveTime;
}());



/***/ }),

/***/ "./src/app/pipes/tendersearchbyindustry.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/tendersearchbyindustry.ts ***!
  \*************************************************/
/*! exports provided: FilterTender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTender", function() { return FilterTender; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterTender = /** @class */ (function () {
    function FilterTender() {
    }
    FilterTender.prototype.transform = function (value, args, args_1) {
        if (!value) {
            return null;
        }
        if (!args) {
            return value;
        }
        args = args.toLowerCase();
        return value.filter(function (item) {
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    };
    FilterTender = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterTender'
        })
    ], FilterTender);
    return FilterTender;
}());



/***/ }),

/***/ "./src/app/route/app-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/route/app-routing.module.ts ***!
  \*********************************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_opprotunites_opprotunites_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/opprotunites/opprotunites.component */ "./src/app/components/opprotunites/opprotunites.component.ts");
/* harmony import */ var _components_create_tender_create_tender_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/create-tender/create-tender.component */ "./src/app/components/create-tender/create-tender.component.ts");



var MAINMENU_ROUTES = [
    { path: '', redirectTo: 'opprotunites', pathMatch: 'full' },
    { path: '**', redirectTo: '404' },
    { path: 'opprotunites', component: _components_opprotunites_opprotunites_component__WEBPACK_IMPORTED_MODULE_1__["OpprotunitesComponent"], data: { state: 'opprotunites' } },
    { path: 'opprotunites/CreateTender', component: _components_create_tender_create_tender_component__WEBPACK_IMPORTED_MODULE_2__["CreateTenderComponent"], data: { state: 'CreateTender' } },
];
var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(MAINMENU_ROUTES, { useHash: false });


/***/ }),

/***/ "./src/app/services/dataservice.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/dataservice.service.ts ***!
  \*************************************************/
/*! exports provided: DataserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataserviceService", function() { return DataserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var DataserviceService = /** @class */ (function () {
    function DataserviceService(http) {
        this.http = http;
        this.WebServiceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].WebServiceUrl;
    }
    DataserviceService.prototype.listUser = function () {
        return this.http.get(this.WebServiceUrl + '/api/users');
    };
    DataserviceService.prototype.sigleUser = function () {
        return this.http.get(this.WebServiceUrl + '/api/users');
    };
    DataserviceService.prototype.getTenderDetails = function () {
        return this.http.get(this.WebServiceUrl + '/tender/TenderDetails');
    };
    DataserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataserviceService);
    return DataserviceService;
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
var environment = {
    production: false,
    version: 'Dev',
    WebServiceUrl: 'http://localhost/projects/IndoUKB2B-api',
};


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

module.exports = __webpack_require__(/*! C:\xampp\htdocs\Projects\Workplace\INDOUKB2B\ng-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map