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
            providers: [_services_dataservice_service__WEBPACK_IMPORTED_MODULE_12__["DataserviceService"], _classes_tender__WEBPACK_IMPORTED_MODULE_13__["Tender"], _classes_tender__WEBPACK_IMPORTED_MODULE_13__["SearchTenderFilter"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"], useValue: '/Projects/IndoUKB2B/' }],
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

module.exports = "<div id=\"primary\" class=\"opprotunites_page\">\n    <div class=\"FormContainer box-shadow-none p-0 m-auto\">\n       <form name=\"OpprotunitesForm\" action=\"\" method=\"post\" autocomplete=\"off\">\n           <div class=\"opprotunites_header\">\n               <div class=\"main_block\">\n                   <div class=\"row no-gutters align-items-center\">\n                       <div class=\"col-md-3\">\n                           <h2 class=\"section_card_title mb-0 border-0 p-0 font-weight-bold\">OPPORTUNITIES</h2>\n                       </div>\n                       <div class=\"col-md-9\">\n                           <div class=\"row\">\n                               <div class=\"col-md-10 search_container\">\n                               <div class=\"form-group mb-0\"> \n                                       <div class=\"searchbox\">\n                                        <input type=\"text\" class=\"bg-transparent\" name=\"searchtender_input\" [(ngModel)]=\"searchTender\" id=\"searchtender_input\" aria-describedby=\"Email\" placeholder=\"Search by Indutries\">\n                                       </div>\n                                   </div>\n                               </div>\n                               <div class=\"col-md-2 postTender_container\">\n                               <a href=\"Signup.php\" class=\"btn siteBtn-primary-outline-blue text-uppercase \">+ Post Tender</a>\n                               </div>\n                           </div>\n                       </div>\n                   </div>\n               </div>\n           </div> \n           <div class=\"opprotunites_section\">\n               <div class=\"main_block\">\n                   <div class=\"row\">\n                           <div class=\"col-md-3\">\n                              <div class=\"filter_container\">\n                                   <div class=\"form-group\">\n                                       <label for=\"user_email\">Filter Tenders</label>\n                                       <input type=\"text\" class=\"\" placeholder=\"Search Tenders by Title\" name=\"login_email\" [(ngModel)]=\"filterObject.Tender_Title\" id=\"login_email\" aria-describedby=\"Email\" [ngModelOptions]=\"{standalone: true}\">\n                                   </div>\n                                   <div class=\"form-group\">\n                                       <label for=\"filter_Industry\">Industry</label>\n                                       <select [(ngModel)]=\"filterObject.Industry\" class=\"form-control\" id=\"filter_Industry\" [ngModelOptions]=\"{standalone: true}\">\n                                           <option selected value=\"0\">Industry</option>\n                                           <option value=\"Computer/Information Technology\">Computer/Information Technology</option>\n                                           <option value=\"Accounting/Auditing/Taxation\">Accounting/Auditing/Taxation</option>\n                                           <option value=\"Admin/Human Resources\">Admin/Human Resources</option>\n                                           <option value=\"Arts/Media and Communications\">Arts/Media and Communications</option>\n                                           <option value=\"Events/Promotions\">Events/Promotions</option>\n                                           <option value=\"Garments\">Garments</option>\n                                           <option value=\"Electronics and Electricals\">Electronics and Electricals</option>\n                                           <option value=\"Industrial Suppliers\">Industrial Suppliers</option>\n                                           <option value=\"Hotels & Restaurants\">Hotels & Restaurants</option>\n                                           <option value=\"Agri Products/Commodities other\">Agri Products/Commodities other</option>\n                                       </select>\n                                   </div>\n                                   <div class=\"form-group\">\n                                       <label for=\"filter_date_posted\">Date Posted</label>\n                                       <select [(ngModel)]=\"filterObject.Posted_date\" class=\"form-control\" id=\"filter_date_posted\" [ngModelOptions]=\"{standalone: true}\">\n                                           <option value=\"0\">Date Posted</option>\n                                           <option value=\"1\">Past 24 hours</option>\n                                           <option value=\"2\">Past 1 Week</option>\n                                           <option selected=\"selected\" value=\"3\">Past 1 Month</option>\n                                           <option value=\"4\">Past 6 Month</option>\n                                       </select>\n                                   </div>\n                                   <div class=\"form-group\">\n                                       <label for=\"filter_tenderValue\">Tender Value</label>\n                                       <select [(ngModel)]=\"filterObject.filterByTenderValue\"  class=\"form-control\" id=\"filter_tenderValue\" [ngModelOptions]=\"{standalone: true}\">\n                                           <option selected=\"selected\" value=\"0\">Tender Value</option>\n                                           <option value=\"1\">Less than 10 lakh</option>\n                                           <option value=\"2\">10 lakh - 1 crore</option>\n                                           <option value=\"3\">Above 1 crore</option>\n                                       </select>\n                                   </div>\n                                   <div class=\"text-center\">\n                                       <a href=\"javascript:void(0)\" class=\"btn siteBtn-primary-outline-blue text-uppercase d-block \" (click)=\"OnSearchFilter()\">Submit</a>\n                                   </div>\n                                   <div class=\"text-center pt-3\">\n                                       <a href=\"javascript:void(0)\" (click)=\"OnResetSearchFilter()\" class=\"reset\">Reset</a>\n                                   </div>\n                              </div>\n                           </div>\n                       <div class=\"col-md-9 opprotunites_card_container\">\n                           \n                           <div class=\"row\">\n                              <div class=\"alert alert-warning\" *ngIf=\"TenderList.length < 1\">No Data Available</div>\n                               <div class=\"col-12 col-sm-12 col-md-6 col-lg-6 tender_card\" *ngFor=\"let tender of TenderList | filterTender : searchTender : 'searchFilter'\">\n                                   <div class=\"content\">\n                                       <div class=\"tender_header\">\n                                           <p class=\"m-0\">{{tender.Tender_Title}}</p>\n                                           <div clas=\"\">\n                                           <span class=\"shortlist_icon\"></span>\n                                           </div>\n                                       </div>\n                                       <div class=\"tender_body\">\n                                           <ul class=\"list-unstyled\">\n                                               <li><span>Contract Type :</span><span>{{tender.Contract_Type}}</span></li>\n                                               <li><span>Industry :</span><span>{{tender.Industry}}</span></li>\n                                               <li><span>Tender Value:</span><span>{{tender.Opportunity_Value_Min}} to {{tender.Opportunity_Value_Max}}</span></li>\n                                               <li><span>Tender Ref No :</span><span>TED{{tender.Tender_Id}}</span></li>\n                                           </ul>\n                                           <div class=\"tender_dates\">\n                                               <div class=\"postedDate\">\n                                                   <p>Posted :<span>{{tender.Posted_date | removeTime}}</span></p>\n                                               </div>\n                                               <div class=\"cloeddate\">\n                                                   <p>Closed :<span>{{tender.Closed_Date | removeTime}}</span></p>\n                                               </div>\n                                           </div>\n                                       </div>\n                                       <div class=\"tender_footer\">\n                                           <div class=\"text-right\">\n                                               <a href=\"Signup.php\" class=\"btn siteBtn-primary-blue text-uppercase  \">Apply</a>\n                                           </div>\n                                       </div>\n                                   </div>\n                               </div>\n                               <!-- <div class=\"col-12 col-sm-12 col-md-6 col-lg-6 tender_card\">\n                                   <div class=\"content\">\n                                       <div class=\"tender_header\">\n                                           <p class=\"m-0\">Petra Wheel Chair</p>\n                                           <div clas=\"\">\n                                           <span class=\"shortlist_icon shortlisted\"></span>\n                                           </div>\n                                       </div>\n                                       <div class=\"tender_body\">\n                                           <ul class=\"list-unstyled\">\n                                               <li><span>Contract Type :</span><span>Project Based</span></li>\n                                               <li><span>Industry :</span><span>Computer/Information Technology</span></li>\n                                               <li><span>Tender Value:</span><span>$200000 to 400000</span></li>\n                                               <li><span>Tender Ref No :</span><span>TED0000001</span></li>\n                                           </ul>\n                                           <div class=\"tender_dates\">\n                                               <div class=\"postedDate\">\n                                                   <p>Posted :<span>20/12/2019</span></p>\n                                               </div>\n                                               <div class=\"cloeddate\">\n                                                   <p>Closed :<span>20/12/2019</span></p>\n                                               </div>\n                                           </div>\n                                       </div>\n                                       <div class=\"tender_footer\">\n                                           <div class=\"text-right\">\n                                               <a href=\"Signup.php\" class=\"btn siteBtn-primary-blue text-uppercase  \">Apply</a>\n                                           </div>\n                                       </div>\n                                   </div>\n                               </div>\n                               <div class=\"col-12 col-sm-12 col-md-6 col-lg-6 tender_card\">\n                                   <div class=\"content\">\n                                       <div class=\"tender_header\">\n                                           <p class=\"m-0\">Petra Wheel Chair</p>\n                                           <div clas=\"\">\n                                           <span class=\"shortlist_icon\"></span>\n                                           </div>\n                                       </div>\n                                       <div class=\"tender_body\">\n                                           <ul class=\"list-unstyled\">\n                                               <li><span>Contract Type :</span><span>Project Based</span></li>\n                                               <li><span>Industry :</span><span>Computer/Information Technology</span></li>\n                                               <li><span>Tender Value:</span><span>$200000 to 400000</span></li>\n                                               <li><span>Tender Ref No :</span><span>TED0000001</span></li>\n                                           </ul>\n                                           <div class=\"tender_dates\">\n                                               <div class=\"postedDate\">\n                                                   <p>Posted :<span>20/12/2019</span></p>\n                                               </div>\n                                               <div class=\"cloeddate\">\n                                                   <p>Closed :<span>20/12/2019</span></p>\n                                               </div>\n                                           </div>\n                                       </div>\n                                       <div class=\"tender_footer\">\n                                           <div class=\"text-right\">\n                                               <a href=\"Signup.php\" class=\"btn siteBtn-primary-blue text-uppercase  \">Apply</a>\n                                           </div>\n                                       </div>\n                                   </div>\n                               </div>\n                               <div class=\"col-12 col-sm-12 col-md-6 col-lg-6 tender_card\">\n                                   <div class=\"content\">\n                                       <div class=\"tender_header\">\n                                           <p class=\"m-0\">Petra Wheel Chair</p>\n                                           <div clas=\"\">\n                                           <span class=\"shortlist_icon\"></span>\n                                           </div>\n                                       </div>\n                                       <div class=\"tender_body\">\n                                           <ul class=\"list-unstyled\">\n                                               <li><span>Contract Type :</span><span>Project Based</span></li>\n                                               <li><span>Industry :</span><span>Computer/Information Technology</span></li>\n                                               <li><span>Tender Value:</span><span>$200000 to 400000</span></li>\n                                               <li><span>Tender Ref No :</span><span>TED0000001</span></li>\n                                           </ul>\n                                           <div class=\"tender_dates\">\n                                               <div class=\"postedDate\">\n                                                   <p>Posted :<span>20/12/2019</span></p>\n                                               </div>\n                                               <div class=\"cloeddate\">\n                                                   <p>Closed :<span>20/12/2019</span></p>\n                                               </div>\n                                           </div>\n                                       </div>\n                                       <div class=\"tender_footer\">\n                                           <div class=\"text-right\">\n                                               <a href=\"Signup.php\" class=\"btn siteBtn-primary-blue text-uppercase  \">Apply</a>\n                                           </div>\n                                       </div>\n                                   </div>\n                               </div>  -->\n                           </div>\n                       </div>\n                   </div>\n               </div>\n           </div>\n       </form>\n       <p class=\"text-center\"> &copy; \n           <script>  document.write(new Date().getFullYear()); </script>   Ind-london2020.com. All rights reserved.</p>\n    </div>\n</div> "

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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var OpprotunitesComponent = /** @class */ (function () {
    function OpprotunitesComponent(service, tender, filterObject) {
        this.service = service;
        this.tender = tender;
        this.filterObject = filterObject;
        this.TenderList = [];
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
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    OpprotunitesComponent.prototype.OnSearchFilter = function () {
        var searchFilter = this.filterObject;
        var filter = lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](this.TenderList, function (o) {
            return ((searchFilter.hasOwnProperty('Tender_Title') ? o.Tender_Title.includes(searchFilter.Tender_Title) : true) && (searchFilter.hasOwnProperty('Industry') ? o.Industry === searchFilter.Industry : true));
        });
        console.log(filter);
    };
    OpprotunitesComponent.prototype.OnResetSearchFilter = function () {
        this.filterObject = new src_app_classes_tender__WEBPACK_IMPORTED_MODULE_3__["SearchTenderFilter"]();
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
    // WebServiceUrl : 'http://localhost/projects/IndoUKB2B-api',
    WebServiceUrl: 'https://betaindukpraveenfreelancer.000webhostapp.com/IndoUKB2B-api/IndoUKB2B-api/'
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

module.exports = __webpack_require__(/*! C:\xampp\htdocs\Projects\IndoUKB2B\ng-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map