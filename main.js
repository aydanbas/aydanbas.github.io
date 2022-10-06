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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_aydan_aydan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/aydan/aydan */ "./src/app/components/aydan/aydan.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/aydan', pathMatch: 'full' },
    // { path: 'onat',  component: OnatComponent },
    //  { path: 'onat2',  component: Onat2Component },
    { path: 'aydan', component: _components_aydan_aydan__WEBPACK_IMPORTED_MODULE_2__["AydanComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "@page {size: A3;}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_all_work_all_work_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/all-work/all-work.component */ "./src/app/components/all-work/all-work.component.ts");
/* harmony import */ var _components_all_work_work_work__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/all-work/work/work */ "./src/app/components/all-work/work/work.ts");
/* harmony import */ var _components_all_hobbies_all_hobbies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/all-hobbies/all-hobbies.component */ "./src/app/components/all-hobbies/all-hobbies.component.ts");
/* harmony import */ var _components_all_hobbies_interest_interest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/all-hobbies/interest/interest */ "./src/app/components/all-hobbies/interest/interest.ts");
/* harmony import */ var _components_all_skill_all_skill_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/all-skill/all-skill.component */ "./src/app/components/all-skill/all-skill.component.ts");
/* harmony import */ var _components_all_skill_skill_skill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/all-skill/skill/skill */ "./src/app/components/all-skill/skill/skill.ts");
/* harmony import */ var _components_all_education_all_education_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/all-education/all-education.component */ "./src/app/components/all-education/all-education.component.ts");
/* harmony import */ var _components_description_description__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/description/description */ "./src/app/components/description/description.ts");
/* harmony import */ var _components_contact_contact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/contact/contact */ "./src/app/components/contact/contact.ts");
/* harmony import */ var _components_highlight_highlight__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/highlight/highlight */ "./src/app/components/highlight/highlight.ts");
/* harmony import */ var _components_shared_header_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/shared/header/header */ "./src/app/components/shared/header/header.ts");
/* harmony import */ var _components_deprecated_badge_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/deprecated/badge/badge */ "./src/app/components/deprecated/badge/badge.ts");
/* harmony import */ var _components_note_note__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/note/note */ "./src/app/components/note/note.ts");
/* harmony import */ var _components_onat_onat__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/onat/onat */ "./src/app/components/onat/onat.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_aydan_aydan__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/aydan/aydan */ "./src/app/components/aydan/aydan.ts");
/* harmony import */ var _components_eylul_eylul__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/eylul/eylul */ "./src/app/components/eylul/eylul.ts");
/* harmony import */ var _components_onat_onat2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/onat/onat2 */ "./src/app/components/onat/onat2.ts");
/* harmony import */ var _components_onat_onat_ge__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/onat/onat-ge */ "./src/app/components/onat/onat-ge.ts");
/* harmony import */ var _components_charts_charts_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/charts/charts.component */ "./src/app/components/charts/charts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Miscellaneous



//Work


//Hobbies


//Skills


//Education

//Other and shared






// Individual CVs







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_all_work_all_work_component__WEBPACK_IMPORTED_MODULE_3__["AllWorkComponent"],
                _components_all_skill_all_skill_component__WEBPACK_IMPORTED_MODULE_7__["AllSkillComponent"],
                _components_all_education_all_education_component__WEBPACK_IMPORTED_MODULE_9__["AllEducationComponent"],
                _components_all_hobbies_all_hobbies_component__WEBPACK_IMPORTED_MODULE_5__["AllHobbiesComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_description_description__WEBPACK_IMPORTED_MODULE_10__["DescriptionComponent"],
                _components_contact_contact__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _components_all_work_work_work__WEBPACK_IMPORTED_MODULE_4__["WorkComponent"],
                _components_all_skill_skill_skill__WEBPACK_IMPORTED_MODULE_8__["SkillComponent"],
                _components_all_hobbies_interest_interest__WEBPACK_IMPORTED_MODULE_6__["InterestComponent"],
                _components_highlight_highlight__WEBPACK_IMPORTED_MODULE_12__["HighlightComponent"],
                _components_shared_header_header__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _components_deprecated_badge_badge__WEBPACK_IMPORTED_MODULE_14__["BadgeComponent"],
                _components_note_note__WEBPACK_IMPORTED_MODULE_15__["NoteComponent"],
                _components_onat_onat__WEBPACK_IMPORTED_MODULE_16__["OnatComponent"],
                _components_aydan_aydan__WEBPACK_IMPORTED_MODULE_18__["AydanComponent"],
                _components_eylul_eylul__WEBPACK_IMPORTED_MODULE_19__["EylulComponent"],
                _components_onat_onat2__WEBPACK_IMPORTED_MODULE_20__["Onat2Component"],
                _components_onat_onat_ge__WEBPACK_IMPORTED_MODULE_21__["OnatGEComponent"],
                _components_charts_charts_component__WEBPACK_IMPORTED_MODULE_22__["AllChartsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/all-education/all-education.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/all-education/all-education.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/all-education/all-education.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/all-education/all-education.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <header header=\"Education\"></header>\r\n    <div class=\"work\">\r\n        <work *ngFor=\"let school of schools\" [data]=\"school\"></work>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/components/all-education/all-education.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/all-education/all-education.component.ts ***!
  \*********************************************************************/
/*! exports provided: AllEducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllEducationComponent", function() { return AllEducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AllEducationComponent = /** @class */ (function () {
    function AllEducationComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AllEducationComponent.prototype, "schools", void 0);
    AllEducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'all-education',
            template: __webpack_require__(/*! ./all-education.component.html */ "./src/app/components/all-education/all-education.component.html"),
            styles: [__webpack_require__(/*! ./all-education.component.css */ "./src/app/components/all-education/all-education.component.css")]
        })
    ], AllEducationComponent);
    return AllEducationComponent;
}());



/***/ }),

/***/ "./src/app/components/all-hobbies/all-hobbies.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/all-hobbies/all-hobbies.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#interests{\r\n    width: 100%;\r\n    text-align: center;\r\n    vertical-align: top;\r\n}\r\n\r\n#interestList{\r\n    margin-top: 10px;\r\n}\r\n\r\n.interest{\r\n    display: inline-block;\r\n    line-height: 0.5em;\r\n}"

/***/ }),

/***/ "./src/app/components/all-hobbies/all-hobbies.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/all-hobbies/all-hobbies.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"interests\">\r\n    <header header=\"{{title}}\"></header>\r\n    <div id=\"interestList\">\r\n        <interest class=\"interest\" *ngFor=\"let interest of interests\" [interest]=\"interest\"></interest>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/all-hobbies/all-hobbies.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/all-hobbies/all-hobbies.component.ts ***!
  \*****************************************************************/
/*! exports provided: AllHobbiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllHobbiesComponent", function() { return AllHobbiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AllHobbiesComponent = /** @class */ (function () {
    function AllHobbiesComponent() {
        this.title = "Hobbies";
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AllHobbiesComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AllHobbiesComponent.prototype, "interests", void 0);
    AllHobbiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'all-hobbies',
            template: __webpack_require__(/*! ./all-hobbies.component.html */ "./src/app/components/all-hobbies/all-hobbies.component.html"),
            styles: [__webpack_require__(/*! ./all-hobbies.component.css */ "./src/app/components/all-hobbies/all-hobbies.component.css")]
        })
    ], AllHobbiesComponent);
    return AllHobbiesComponent;
}());



/***/ }),

/***/ "./src/app/components/all-hobbies/interest/interest.css":
/*!**************************************************************!*\
  !*** ./src/app/components/all-hobbies/interest/interest.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span{\r\n    text-transform: capitalize;\r\n    border-radius: 3px;\r\n    bordder: 1px solid #FAA122;\r\n    padding: 6px 12px 1px 12px;\r\n    word-break: keep-all;\r\n    display: inline-block;\r\n    dcolor: #FAA122;\r\n    font-family: 'Times New Roman';\r\n    font-size: 18px;\r\n    font-weight: 100;\r\n    margin: 3px;\r\n    margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/components/all-hobbies/interest/interest.html":
/*!***************************************************************!*\
  !*** ./src/app/components/all-hobbies/interest/interest.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>{{interest}}</span>"

/***/ }),

/***/ "./src/app/components/all-hobbies/interest/interest.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/all-hobbies/interest/interest.ts ***!
  \*************************************************************/
/*! exports provided: InterestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestComponent", function() { return InterestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InterestComponent = /** @class */ (function () {
    function InterestComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InterestComponent.prototype, "interest", void 0);
    InterestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'interest',
            template: __webpack_require__(/*! ./interest.html */ "./src/app/components/all-hobbies/interest/interest.html"),
            styles: [__webpack_require__(/*! ./interest.css */ "./src/app/components/all-hobbies/interest/interest.css")]
        })
    ], InterestComponent);
    return InterestComponent;
}());



/***/ }),

/***/ "./src/app/components/all-skill/all-skill.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/all-skill/all-skill.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.skills{\r\n    margin: auto;\r\n    width: 100%;\r\n    text-align: center;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.main{\r\n    width: 100%;\r\n}\r\n\r\n.main td{\r\n    vertical-align: top;\r\n}\r\n\r\n.skill{\r\n    width: 150px;\r\n    display: inline-table;\r\n    text-align: left;\r\n}\r\n\r\n.skill::before{\r\n    content: '\\25CF';\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/all-skill/all-skill.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/all-skill/all-skill.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n            <header header=\"{{title}}\"></header>\r\n            <table class=\"skills\">\r\n                <tr>\r\n                    <td>\r\n                            <skill class=\"skill\" *ngFor=\"let skill of skills\" [skill]=\"skill\"></skill>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>"

/***/ }),

/***/ "./src/app/components/all-skill/all-skill.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/all-skill/all-skill.component.ts ***!
  \*************************************************************/
/*! exports provided: AllSkillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllSkillComponent", function() { return AllSkillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AllSkillComponent = /** @class */ (function () {
    function AllSkillComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AllSkillComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AllSkillComponent.prototype, "skills", void 0);
    AllSkillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'all-skill',
            template: __webpack_require__(/*! ./all-skill.component.html */ "./src/app/components/all-skill/all-skill.component.html"),
            styles: [__webpack_require__(/*! ./all-skill.component.css */ "./src/app/components/all-skill/all-skill.component.css")]
        })
    ], AllSkillComponent);
    return AllSkillComponent;
}());



/***/ }),

/***/ "./src/app/components/all-skill/skill/skill.css":
/*!******************************************************!*\
  !*** ./src/app/components/all-skill/skill/skill.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    padding-left: 10px;\r\n    font-family: 'Times New Roman';\r\n    font-weight: 100px;\r\n    font-size: 18px;\r\n    word-break: keep-all;\r\n    width: 80%;\r\n    display: table-cell;\r\n    border: 0px solid red;\r\n}"

/***/ }),

/***/ "./src/app/components/all-skill/skill/skill.html":
/*!*******************************************************!*\
  !*** ./src/app/components/all-skill/skill/skill.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<span>{{skill}}</span>\r\n-->\r\n\r\n<input value=\"{{skill}}\" />\r\n"

/***/ }),

/***/ "./src/app/components/all-skill/skill/skill.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/all-skill/skill/skill.ts ***!
  \*****************************************************/
/*! exports provided: SkillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillComponent", function() { return SkillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillComponent = /** @class */ (function () {
    function SkillComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SkillComponent.prototype, "skill", void 0);
    SkillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'skill',
            template: __webpack_require__(/*! ./skill.html */ "./src/app/components/all-skill/skill/skill.html"),
            styles: [__webpack_require__(/*! ./skill.css */ "./src/app/components/all-skill/skill/skill.css")]
        })
    ], SkillComponent);
    return SkillComponent;
}());



/***/ }),

/***/ "./src/app/components/all-work/all-work.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/all-work/all-work.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".work{\r\n    margin: 10px;\r\n    margin-bottom: -10px;\r\n}\r\n\r\n.secondary{\r\n    width: 48%;\r\n    display: inline-block;\r\n}\r\n\r\n.main *{\r\n    vertical-align: top;\r\n}"

/***/ }),

/***/ "./src/app/components/all-work/all-work.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/all-work/all-work.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header header=\"Work History\"></header>\r\n<div class=\"main\">\r\n  <div class=\"work\" *ngFor=\"let data of works\">\r\n      <work [data]=\"data\"></work>\r\n  </div>\r\n\r\n  <div class=\"work secondary\" *ngFor=\"let data of works2\">\r\n      <work [data]=\"data\" small=\"true\" ></work>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/all-work/all-work.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/all-work/all-work.component.ts ***!
  \***********************************************************/
/*! exports provided: AllWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllWorkComponent", function() { return AllWorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AllWorkComponent = /** @class */ (function () {
    function AllWorkComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AllWorkComponent.prototype, "works", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AllWorkComponent.prototype, "works2", void 0);
    AllWorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'all-work',
            template: __webpack_require__(/*! ./all-work.component.html */ "./src/app/components/all-work/all-work.component.html"),
            styles: [__webpack_require__(/*! ./all-work.component.css */ "./src/app/components/all-work/all-work.component.css")]
        })
    ], AllWorkComponent);
    return AllWorkComponent;
}());



/***/ }),

/***/ "./src/app/components/all-work/work/work.css":
/*!***************************************************!*\
  !*** ./src/app/components/all-work/work/work.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title{\r\n    width: 40%;\r\n    display: table-cell;\r\n}\r\n\r\n#company{\r\n    width: 15%;\r\n}\r\n\r\ntable{\r\n    width: 100%;\r\n}\r\n\r\na{\r\n    border-bottom: 1px dashed black;\r\n    text-decoration: none;\r\n}\r\n\r\n.date{\r\n    top: 0px;\r\n}\r\n\r\n.upside{\r\n    border-bottom: 1px dashed #505050;\r\n}\r\n\r\n.location{\r\n    margin-left: 5px;\r\n    margin-right: 0px !important;\r\n}\r\n\r\n.link>*{\r\n    font-style: italic;\r\n    color: #303030;\r\n    margin-bottom: 6px;\r\n}\r\n\r\n.link{\r\n    float: right;\r\n    margin: -5px;\r\n    margin-right: -15px;\r\n    vertical-align: top;\r\n    text-align: right;\r\n    height: 100%;\r\n    max-width: 50%;\r\n    border: 0px solid blue;\r\n}\r\n\r\n.descriptions td{\r\n    padding-top: 10px;\r\n    vertical-align: top;\r\n}\r\n\r\n#things{\r\n}\r\n\r\n*{\r\n    font-family: 'Times New Roman';\r\n    margin: 0px;\r\n    font-weight: 100;\r\n    color: #303030;\r\n}\r\n\r\nh3{\r\n    font-weight: lighter;\r\n}\r\n\r\nimg{\r\n    max-width: 26px;\r\n    max-height: 26px;\r\n}\r\n\r\n.linkimg{\r\n    margin-right: 3px;\r\n    max-width: 10px;\r\n    position: relative;\r\n    top: 1px;\r\n\r\n}\r\n\r\n.descriptions td{\r\n    width: 50%;\r\n}\r\n\r\n.othertd{\r\n    width: 10%;\r\n}\r\n\r\n.othertd2{\r\n    text-align: right;\r\n    width: 20%;\r\n}\r\n\r\n.things,.things *{\r\n    font-family: 'Times New Roman', 'Al bayan';\r\n    color: #454545;\r\n}\r\n\r\n.things{\r\n    color: #454545;\r\n}\r\n\r\n.thing{\r\n    min-width: 80%;\r\n    line-height: 1.5em;\r\n    border: 0px solid red;\r\n\r\n\r\n}\r\n\r\n#main{\r\n    margin-bottom: 20px;\r\n    vertical-align: top;\r\n}\r\n\r\n.descriptions{\r\n    width: 100%;\r\n}\r\n\r\n.descriptions td:first-child{\r\n    min-width: 50%;\r\n}\r\n\r\n.jobhighlight{\r\n    margin-top: 10px;\r\n    text-indent: 1em;\r\n    font-style: italic;\r\n}\r\n\r\n.thesis{\r\n    font-style: italic;\r\n}\r\n\r\n.no-visible{\r\n    width: 0px !important;\r\n    display: none;\r\n}\r\n\r\n.big-visible{\r\n    width: 100% !important;\r\n}\r\n\r\n.descriptionheader{\r\n    margin-top: 20px;\r\n    margin-bottom: 8px;\r\n}"

/***/ }),

/***/ "./src/app/components/all-work/work/work.html":
/*!****************************************************!*\
  !*** ./src/app/components/all-work/work/work.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\r\n    <table class=\"upside\">\r\n        <tr>\r\n            <td id=\"title\">\r\n                <h2>{{data.title}}</h2>\r\n            </td>\r\n            <td *ngIf=\"data.begin\" id=\"company\">\r\n                <h3>{{data.company}}</h3>\r\n            </td>\r\n            <td *ngIf=\"!data.begin\" id=\"company\">\r\n                <h3 style=\"width: 200%;\">{{data.company}}</h3>\r\n            </td>\r\n\r\n            <td class=\"othertd\">\r\n                <!-- <img src=\"assets/calendar.png\"> -->\r\n                <span class=\"other date\" *ngIf=\"data.end\"> {{data.begin}} - {{data.end}}</span>\r\n                <span class=\"other date\" *ngIf=\"!data.end\"> {{data.begin}}</span>\r\n            </td>\r\n            <td class=\"othertd2\" *ngIf=\"data.location\">\r\n                <img *ngIf=\"! data.disableLocIcon\" src=\"assets/location.png\">\r\n                <span class=\"other location\">{{data.location}}</span>\r\n\r\n            </td>\r\n        </tr>\r\n    </table>\r\n\r\n    <div class=\"descriptions\">\r\n\r\n        <p class=\"jobhighlight\" *ngIf=\"data.description\">{{data.description}}</p>\r\n\r\n        <table>\r\n            <tr>\r\n                <td [ngClass]=\"{'no-visible': renderSingle === true}\">\r\n                    <div id=\"things\">\r\n                        <li class=\"thing\" *ngFor=\"let field of fields\">{{field}}</li>\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <div class=\"link\">\r\n                        <div *ngFor=\"let link of data.link\">\r\n                            <img class=\"linkimg\" src=\"assets/link.png\" /><a [href]=\"link.link\">{{link.name}}</a>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div id=\"things\" [ngClass]=\"{'big-visible': renderSingle === true}\" >\r\n                        <span class=\"thing\"  *ngFor=\"let field of fields2\">\r\n                            <li *ngIf=\"0>field.indexOf('###')\">{{field}}</li>\r\n                            <h2 class=\"descriptionheader\" *ngIf=\"field.indexOf('###')>-1\">{{field.substr(3,999)}}</h2>\r\n                        </span>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"thesis\" *ngIf=\"data.thesis\">{{data.thesis}}</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/all-work/work/work.ts":
/*!**************************************************!*\
  !*** ./src/app/components/all-work/work/work.ts ***!
  \**************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Data = /** @class */ (function () {
    function Data() {
    }
    return Data;
}());
var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
        this.small = false;
        this.renderSingle = false;
        this.fields = [];
        this.fields2 = [];
    }
    WorkComponent.prototype.ngOnInit = function () {
        if (this.data['fields']) {
            this.fields = this.data['fields'].filter(function (element, index, array) { return index % 2 == 0; });
            this.fields2 = this.data['fields'].filter(function (element, index, array) { return index % 2 == 1; });
        }
        if (this.small || this.data['small']) {
            this.fields2 = this.data['fields'];
            this.renderSingle = true;
        }
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Data)
    ], WorkComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], WorkComponent.prototype, "small", void 0);
    WorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'work',
            template: __webpack_require__(/*! ./work.html */ "./src/app/components/all-work/work/work.html"),
            styles: [__webpack_require__(/*! ./work.css */ "./src/app/components/all-work/work/work.css")]
        })
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/app/components/aydan/aydan.css":
/*!********************************************!*\
  !*** ./src/app/components/aydan/aydan.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ntd{\r\n\tvertical-align: top;\r\n\twidth: 100%;\r\n}\r\ntable{\r\n\twidth: 100%;\r\n}\r\n.edu{\r\n\twidth: 40%;\r\n}\r\n.lan{\r\n\twidth: 40%;\r\n}\r\n.ski{\r\n\twidth: 40%;\r\n}\r\n.tec{\r\n\twidth: 75%;\r\n}\r\n.wor{\r\n\twidth: 50%;\r\n}\r\n@media print {\r\n\t#main {page-break-after: always;}\r\n  }\r\n"

/***/ }),

/***/ "./src/app/components/aydan/aydan.html":
/*!*********************************************!*\
  !*** ./src/app/components/aydan/aydan.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\r\n\t<description [name]=\"name\" [title]=\"title\"></description>\r\n\t<contact [stuff]=\"contact\"></contact>\r\n\t<highlight [content]=\"highlight\"></highlight>\r\n\t\r\n\r\n\r\n\t<all-work [works]=\"works\" [works2]=\"works2\"></all-work>\r\n\t\r\n\t<all-education [schools]=\"schools\"></all-education>\r\n\t\r\n\r\n</div>\r\n\r\n<all-hobbies title=\"Skills\" [interests]=\"skills\"></all-hobbies>\r\n\t<table>\r\n\t\t<tr>\r\n\t\t\t<td class=\"wor\">\r\n\t\t\t\t<table>\r\n\t\t\t\t\t<tr>\r\n\r\n\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t<header header=\"References\"></header>\r\n\t\t\t\t\t<div *ngFor=\"let data of references\">\r\n\t\t\t\t\t\t<work [data]=\"data\"></work>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<all-hobbies title=\"Languages\" [interests]=\"languages\"></all-hobbies>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\r\n\t\t\t</td>\r\n\t\t\t\r\n\t\t\t<td class=\"lan\">\r\n\t\t\t\t<table>\r\n\r\n\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t<charts  [percentageVisible]=\"percentageVisible\" title=\"Tools\" [charts]=\"tools\"></charts>\r\n\r\n\t\t\t\t</table>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\r\n\t</table>\r\n\r\n\r\n\r\n\r\n\t<header header=\"Certifications\"></header>\r\n\t<div class=\"work\" *ngFor=\"let data of badges\">\r\n\t\t<work [data]=\"data\"></work>\r\n\t</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/aydan/aydan.ts":
/*!*******************************************!*\
  !*** ./src/app/components/aydan/aydan.ts ***!
  \*******************************************/
/*! exports provided: AydanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AydanComponent", function() { return AydanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AydanComponent = /** @class */ (function () {
    function AydanComponent() {
        this.name = "Aydan Bas";
        this.title = "Quality Assurance & Product Verification Specialist";
        this.message = "Canadian permanent resident, willing to travel and relocate for the right opportunity.";
        this.highlight = "An experienced product verification specialist utilizing past mission-critical digital product experience and expertise in quality assurance. Passionate about developing strong business acumen and increasing efficacy of products working with cross-functional teams.";
        this.contact = [
            { "text": "aydan.altiparmak@gmail.com", "disabled---image": "assets/mail.png" },
            { "text": "+1 (343) 202-3946", "image": "assets/phone.png" },
            //         {"text": "maksatiyidir", "image": "assets/twitter.png"},
            //{ "text": "onatbas", "image": "assets/linkedin.png", "link": "https://linkedin.com/in/onatbas" },
            { "text": "Nepean", "image": "assets/location.png" },
        ];
        this.percentageVisible = false;
        this.tools = [
            { text: "Postman", percentage: 75 },
            { text: "HTTP", percentage: 75 },
            { text: "API Testing", percentage: 70 },
            { text: "Manual Testing", percentage: 90 },
            { text: "Automation", percentage: 70 },
            { text: "JavaScript", percentage: 50 },
            { text: "Azure Devops", percentage: 90 },
            { text: "SQL", percentage: 50 },
            //{text: "Office", percentage: 90},
            { text: "PV/QA", percentage: 100 },
        ];
        this.skills = [
            "Requirements",
            "Project Management",
            "Manual Testing",
            "Localization",
            "Project Design",
            "Product Ownership",
            "Customer Relations",
            "Scrum",
            "Agile",
            "Product Development",
        ];
        this.tech = [];
        this.languages = [
            "Turkish", "English"
        ];
        this.interests = [
            ""
        ];
        this.works = [
            {
                company: "Women in Tech",
                title: "Business Analyst & QA Tester",
                begin: 2022,
                end: "...",
                location: "Ottawa, ON",
                small: true,
                //disableLocIcon: true,
                link: [
                    { name: "WITT", link: "https://wittjobs.ca" },
                    { name: "Valencia Risk", link: "https://valenciarisk.com/" },
                    { name: "Kids First", linkw: "https://valenciarisk.com/" },
                ],
                fields: [
                    "### Kids First",
                    "Design and guide the implementation if \"Kids First\", an application to assist seperated parents put their kids first.",
                    "Guide and design the development of the web application according to customer requirements.",
                    "Create and use a comprehensive test plan to do product verification.",
                    "### Incident Response & Playbooks Project",
                    "Design a web application to assist Valencia help their customers with security incident responses and quick decision making.",
                    "Worked with customers to analyse their needs and document their requirements",
                    "Document user stories and workflows, demo to customers to validate design.",
                    "Provide continuous guidance, and mentorship to developers and other junior members.",
                ]
            },
            {
                company: "A&T Bank",
                title: "Business Analyst & QA Tester",
                begin: "2015",
                end: "2021",
                location: "Istanbul, TR",
                small: true,
                //disableLocIcon: true,
                link: [
                    { name: "A&T Bank Internet Branch", link: "https://www.atbank.com.tr/" },
                ],
                fields: [
                    "### Mobile Banking",
                    "Provide requirements to multiple teams such as Engineering, QA, UX from concept",
                    "Defined requirements in accordance with most up-to-date legal regulations and industry trends.",
                    "Delivered mobile banking channel working as the sole business analyst.",
                    "Responsible for end-to-end delivery of products, conducting reviews, UATs.",
                    "Analyse use cases, test cases, workflows and designs to ensure consistent delivery",
                    "### Internet Banking",
                    "Worked as a business analyst, defining new features in our banks online branch.",
                    "Defining and executing marketing campaigns of internet banking branch to increase revenue",
                    "Act as a product owner, testing and tracking issues, coordinating relevant teams.",
                    "Providing reports and answering to legal queries from the Banks Assocation of Turkey",
                    "### Tax and Bill Payment Systems",
                    "Coordinated efforts of multiple teams such as Legal, IT, Software, Fraud",
                    "Project management of implementations such as billing products and regulatory features.",
                    "Long term product ownership of mission critical systems, ensuring undisturbed operation.",
                ]
            }
        ];
        this.works2 = [];
        this.badges = [
            {
                company: "Certification",
                title: "Certificate of Business Analysis Methodology",
                begin: "2016",
                location: "Istanbul Institute",
                disableLocIcon: true,
                small: true,
                fields: [
                    "Modeling techniques and software test management"
                ]
            },
            {
                company: "Certification",
                title: "Enterprise Project Management",
                begin: "2016",
                location: "The Banks Assocation of Turkey",
                small: true,
                disableLocIcon: true,
                fields: []
            },
            {
                company: "Certification",
                small: true,
                title: "Scrum Master.",
                begin: "2016",
                location: "The Banks Assocation of Turkey",
                disableLocIcon: true,
                fields: [
                    "Agile Product Development and Project Management using Scrum."
                ]
            },
            {
                company: "Certification",
                title: "Project Management on Scale",
                small: true,
                begin: "2019",
                location: "The Banks Assocation of Turkey",
                disableLocIcon: true,
                fields: [
                    "Managing multiple interconnected project teams using the frameworks of multiple project management methodologies."
                ]
            },
        ];
        this.schools = [
            {
                company: "Yıldız Technical University",
                title: "BSc, Economics",
                begin: "2008",
                end: "2013",
                //  location: "Istanbul, TR",
                disableLocIcon: true,
                "thesis": "Thesis: A through review of broadband internet market in Turkey."
            },
            {
                company: "Stafford House School of English",
                title: "Language School",
                begin: "2014",
                end: "2015",
                disableLocIcon: true,
            }
        ];
        this.references = [
            {
                title: "Juliette Smith",
                location: "Ottawa",
                disableLocIcon: true,
                small: true,
                company: "Women in Tech",
                fields: [
                    "Project Manager",
                    "juliette.smith@in-tac.ca",
                    "613-235-4875 x.143 (office)",
                    "613-710-2969 (cell)"
                ]
            },
            {
                title: "Onat Bas",
                location: "Ottawa",
                small: true,
                company: "Ross Video",
                disableLocIcon: true,
                fields: [
                    "Technical Product Manager",
                    "343-202-3941",
                    "obas@rossvideo.com"
                ]
            },
        ];
    }
    AydanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aydan',
            template: __webpack_require__(/*! ./aydan.html */ "./src/app/components/aydan/aydan.html"),
            styles: [__webpack_require__(/*! ./aydan.css */ "./src/app/components/aydan/aydan.css")]
        })
    ], AydanComponent);
    return AydanComponent;
}());



/***/ }),

/***/ "./src/app/components/charts/charts.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/charts/charts.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n}\r\n\r\n.ground{\r\n\tdisplay: inline-block;\r\n\tbackground-color: rgb(139, 139, 139);\r\n\theight: 20px;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.background{\r\n\ttext-align: left;\r\n\twidth: 40%;\r\n\tposition: relative;\r\n\ttop: 3px;\r\n}\r\n\r\n.colored{\r\n\tdisplay: inline-block;\r\n\tbackground-color: rgb(53, 53, 53) !important;\r\n}\r\n\r\n#chartsList{\r\n\tmargin-top: 10px;\r\n}\r\n\r\nspan{\r\n\tmargin-bottom: 3px;\r\n\r\n    text-transform: capitalize;\r\n    border-radius: 3px;\r\n    word-break: keep-all;\r\n    display: inline-block;\r\n    font-family: 'Times New Roman';\r\n    font-size: 18px;\r\n    font-weight: 100;\r\n\tpadding-right: 15px;\r\n}\r\n\r\n.percentage{\r\n\twidth: 10%;\r\n\tmargin-left: 10px;\r\n}"

/***/ }),

/***/ "./src/app/components/charts/charts.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/charts/charts.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header header=\"{{title}}\"></header>\r\n<div id=\"charts\">\r\n    <div id=\"chartsList\">\r\n\r\n\t\t<div *ngFor=\"let chart of charts\" style=\"text-align: right; padding-right: 20px;\">\r\n\t\t\t<span>{{chart.text}}</span>\r\n\r\n\t\t\t<div class=\"ground background\"> \r\n\t\t\t\t<div class=\"ground colored\" [style.width.%]=\"chart.percentage\" >\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<span *ngIf=\"percentageVisible\" class=\"percentage\">{{chart.percentage}}%</span>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/charts/charts.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/charts/charts.component.ts ***!
  \*******************************************************/
/*! exports provided: AllChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllChartsComponent", function() { return AllChartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AllChartsComponent = /** @class */ (function () {
    function AllChartsComponent() {
        this.title = "Charts";
        this.percentageVisible = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AllChartsComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AllChartsComponent.prototype, "percentageVisible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AllChartsComponent.prototype, "charts", void 0);
    AllChartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'charts',
            template: __webpack_require__(/*! ./charts.component.html */ "./src/app/components/charts/charts.component.html"),
            styles: [__webpack_require__(/*! ./charts.component.css */ "./src/app/components/charts/charts.component.css")]
        })
    ], AllChartsComponent);
    return AllChartsComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.css":
/*!************************************************!*\
  !*** ./src/app/components/contact/contact.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    max-width: 15px;\r\n    max-height: 15px;\r\n}\r\n\r\n*{\r\n    font-family: 'Times New Roman';\r\n    text-align: right;\r\n}\r\n\r\n.imagecont{\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    text-align: center;\r\n    padding: 0px;\r\n}\r\n\r\ntr>*{\r\n    display: inline;\r\n}\r\n\r\ninput, a{\r\n    font-family: 'Times New Roman';\r\n    text-align: left;\r\n    position: relative;\r\n    right: -4px;\r\n    top: -2px;\r\n\tborder:0px solid red;\r\n    font-size: 16px;\r\n    width: 80%;\r\n}\r\n\r\na{\r\n    color: black;\r\n    border-bottom: 1px dashed black;\r\n    text-decoration: none;\r\n}\r\n\r\ntr{\r\n    font-size: 20px;\r\n}\r\n\r\n.item{\r\n    display: inline-block;\r\n    text-align: center;\r\n    margin: 15px 35px 5px 35px;\r\n}\r\n\r\n#main{\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/contact/contact.html":
/*!*************************************************!*\
  !*** ./src/app/components/contact/contact.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\r\n        <div class=\"item\" *ngFor=\"let data of stuff\">\r\n                <div *ngIf=\"data.image\" class=\"imagecont\"><img [src]=\"data.image\" /></div>\r\n                <span *ngIf=\"!data.link\">{{data.text}}</span>\r\n                <a *ngIf=\"data.link\" href=\"{{data.link}}\">{{data.text}}</a>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/contact/contact.ts":
/*!***********************************************!*\
  !*** ./src/app/components/contact/contact.ts ***!
  \***********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ContactComponent.prototype, "stuff", void 0);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact',
            template: __webpack_require__(/*! ./contact.html */ "./src/app/components/contact/contact.html"),
            styles: [__webpack_require__(/*! ./contact.css */ "./src/app/components/contact/contact.css")]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/deprecated/badge/badge.css":
/*!*******************************************************!*\
  !*** ./src/app/components/deprecated/badge/badge.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ntable{\r\n    width: 100%;\r\n}\r\n\r\ntable td{\r\n\r\n        text-transform: capitalize;\r\n        border-radius: 3px;\r\n        padding: 6px 12px 1px 12px;\r\n        word-break: keep-all;\r\n        display: inline-block;\r\n        margin: 3px;\r\n        margin-bottom: 5px;\r\n        font-family: 'Times New Roman';\r\n        font-weight: 100;\r\n        font-size: 18px;\r\n}\r\n\r\n.type{\r\n\r\n}\r\n\r\n.title{\r\n    text-align: right;\r\n}\r\n\r\n.source{\r\n    text-align: left;\r\n}"

/***/ }),

/***/ "./src/app/components/deprecated/badge/badge.html":
/*!********************************************************!*\
  !*** ./src/app/components/deprecated/badge/badge.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <table>\r\n        <tr>\r\n            <td class=\"type\">{{badge.type}}</td>\r\n            <td class=\"title\">{{badge.title}}</td>\r\n            <td class=\"source\">{{badge.source}}</td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n\r\n                <!--\r\n                <div class=\"sep\"></div>\r\n                <span></span>\r\n                <div class=\"sep\"></div>\r\n        -->\r\n        "

/***/ }),

/***/ "./src/app/components/deprecated/badge/badge.ts":
/*!******************************************************!*\
  !*** ./src/app/components/deprecated/badge/badge.ts ***!
  \******************************************************/
/*! exports provided: BadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeComponent", function() { return BadgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BadgeComponent = /** @class */ (function () {
    function BadgeComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BadgeComponent.prototype, "badge", void 0);
    BadgeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'badge',
            template: __webpack_require__(/*! ./badge.html */ "./src/app/components/deprecated/badge/badge.html"),
            styles: [__webpack_require__(/*! ./badge.css */ "./src/app/components/deprecated/badge/badge.css")]
        })
    ], BadgeComponent);
    return BadgeComponent;
}());



/***/ }),

/***/ "./src/app/components/description/description.css":
/*!********************************************************!*\
  !*** ./src/app/components/description/description.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main{\r\n    border-bottom: 1px solid #000;\r\n    border-top: 1px solid #000;\r\n\r\n    font-family: \"Times New Roman\";\r\n    text-transform: uppercase;\r\n    padding: 20px;\r\n\r\n}\r\n\r\ninput, input:focus{\r\n    font-size: 12px;\r\n    font-family: \"Times New Roman\";\r\n    text-transform: uppercase;\r\n  width: 100%;;\r\nborder-width:0px;\r\nborder:none;\r\n}\r\n\r\ndiv{\r\n    margin-top: 2px;\r\n    border-bottom: 2px solid #000;\r\n\r\n}\r\n\r\n*{\r\n    margin: 0px;\r\n    text-align: center;\r\n    font-weight: 100;\r\n\r\n}\r\n\r\n*::first-letter{\r\n    font-size: 1.3em;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/description/description.html":
/*!*********************************************************!*\
  !*** ./src/app/components/description/description.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\r\n<h2>{{name}}</h2>\r\n<input type=\"text\" value=\"{{title}}\">\r\n</div>\r\n<div></div>\r\n"

/***/ }),

/***/ "./src/app/components/description/description.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/description/description.ts ***!
  \*******************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DescriptionComponent = /** @class */ (function () {
    function DescriptionComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DescriptionComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DescriptionComponent.prototype, "title", void 0);
    DescriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'description',
            template: __webpack_require__(/*! ./description.html */ "./src/app/components/description/description.html"),
            styles: [__webpack_require__(/*! ./description.css */ "./src/app/components/description/description.css")]
        })
    ], DescriptionComponent);
    return DescriptionComponent;
}());



/***/ }),

/***/ "./src/app/components/eylul/eylul.css":
/*!********************************************!*\
  !*** ./src/app/components/eylul/eylul.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ntd{\r\n\tvertical-align: top;\r\n\twidth: 100%;\r\n}\r\ntable{\r\n\twidth: 100%;\r\n}\r\n.edu{\r\n\twidth: 70%;\r\n}\r\n.lan{\r\n\twidth: 30%;\r\n}\r\n.ski{\r\n\twidth: 35%;\r\n}\r\n.tec{\r\n\twidth: 65%;\r\n}\r\n.wor{\r\n\twidth: 100%;\r\n}\r\n@media print {\r\n\t#xxxmain {page-break-after: always;}\r\n  }"

/***/ }),

/***/ "./src/app/components/eylul/eylul.html":
/*!*********************************************!*\
  !*** ./src/app/components/eylul/eylul.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\r\n\t<description [name]=\"name\" [title]=\"title\"></description>\r\n\t<contact [stuff]=\"contact\"></contact>\r\n\t<highlight [content]=\"highlight\"></highlight>\r\n\r\n\t<table>\r\n\t\t<tr>\r\n\r\n\t\t\t<td class=\"tec\">\r\n\t\t\t\t<all-skill title=\"Technologies\" [skills]=\"tech\"></all-skill>\r\n\t\t\t</td>\r\n\t\t\t<td class=\"ski\">\r\n\t\t\t\t<all-skill title=\"Skills\" [skills]=\"skills\"></all-skill>\r\n\t\t\t</td>\r\n\r\n\t\t</tr>\r\n\t</table>\r\n\r\n\t<table>\r\n\t\t<tr>\r\n\t\t\t<td class=\"wor\">\r\n\t\t\t\t<all-work [works]=\"works\" [works2]=\"works2\"></all-work>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</table>\r\n\r\n\t<table>\r\n\t\t<tr>\r\n\t\t\t<table>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"edu\">\r\n\t\t\t\t\t\t<all-education [schools]=\"schools\"></all-education>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<td class=\"lan\">\r\n\t\t\t\t<table>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<all-hobbies title=\"Languages\" [interests]=\"languages\"></all-hobbies>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<!--<note [message]=\"message\"></note>-->\r\n\t\t\t\t\t\t<all-hobbies title=\"Hobbies\" [interests]=\"interests\"></all-hobbies>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</table>\r\n</div>\r\n\r\n<div id=\"main\">\r\n\t<header header=\"Selected Publications & Certifications\"></header>\r\n\t<div class=\"work\" *ngFor=\"let data of badges\">\r\n\t\t<work [data]=\"data\"></work>\r\n\t</div>\r\n<br><!--\r\n\t<header header=\"References\"></header>\r\n\t<div class=\"work\" *ngFor=\"let data of references\">\r\n\t\t<work [data]=\"data\"></work>\r\n\t</div>-->\r\n</div>"

/***/ }),

/***/ "./src/app/components/eylul/eylul.ts":
/*!*******************************************!*\
  !*** ./src/app/components/eylul/eylul.ts ***!
  \*******************************************/
/*! exports provided: EylulComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EylulComponent", function() { return EylulComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EylulComponent = /** @class */ (function () {
    function EylulComponent() {
        this.name = "Eylül Akar";
        this.title = "Quality Assurance Engineer";
        this.message = "";
        this.highlight = "";
        this.contact = [
            { "text": "eylul.idk@gmail.com", "disabled---image": "assets/mail.png" },
            { "text": "+1123456", "image": "assets/phone.png" },
            //         {"text": "maksatiyidir", "image": "assets/twitter.png"},
            //{ "text": "onatbas", "image": "assets/linkedin.png", "link": "https://linkedin.com/in/onatbas" },
            { "text": "Kadıköy", "image": "assets/location.png" },
        ];
        this.skills = [
            "AA", "BB",
        ];
        this.tech = [
            "CC", "DD", "EE", "FF"
        ];
        this.languages = [
            "Turkish", "English"
        ];
        this.interests = [
            ""
        ];
        this.works = [
            {
                company: "Company Name",
                title: "Title at Company",
                begin: "MM/YYYY",
                end: "MM/YYYY",
                location: "Istanbul",
                link: [
                    { name: "Some Link", link: "https://play.google.com/store/apps/details?id=com.youdagames.stratego&hl=en" },
                ],
                fields: [
                    "Lorem ipsum dolor sit amet.",
                ]
            }
        ];
        this.works2 = [
            {
                company: "Company Name",
                title: "Title at Company",
                begin: "MM/YYYY",
                end: "MM/YYYY",
                location: "Istanbul",
                link: [
                    { name: "Some Link", link: "https://play.google.com/store/apps/details?id=com.youdagames.stratego&hl=en" },
                ],
                fields: [
                    "Lorem ipsum dolor sit amet.",
                ]
            },
            {
                company: "Company Name",
                title: "Title at Company",
                begin: "MM/YYYY",
                end: "MM/YYYY",
                location: "Istanbul",
                link: [
                    { name: "Some Link", link: "https://play.google.com/store/apps/details?id=com.youdagames.stratego&hl=en" },
                ],
                fields: [
                    "Lorem ipsum dolor sit amet.",
                ]
            }
        ];
        this.badges = [
            {
                company: "Certification #1",
                title: "Certification title",
                begin: "YYYY",
                location: "Company or Location",
                disableLocIcon: true,
                fields: []
            },
        ];
        this.schools = [
            {
                company: "Yıldız Technical University",
                title: "BSc, Economics",
                begin: "2009",
                end: "2013",
                location: "Istanbul",
                "thesis": "Thesis: Designing heat exchangers using genetic algorithms."
            }
        ];
        this.references = [
            {
                title: "References are disabled, don't add stuff here",
                company: "Principal Software Engineer at GE Gas Power",
                location: "Istanbul",
                fields: [
                    "Phone: +90 (538) 545 0000"
                ]
            }
        ];
    }
    EylulComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'eylul',
            template: __webpack_require__(/*! ./eylul.html */ "./src/app/components/eylul/eylul.html"),
            styles: [__webpack_require__(/*! ./eylul.css */ "./src/app/components/eylul/eylul.css")]
        })
    ], EylulComponent);
    return EylulComponent;
}());



/***/ }),

/***/ "./src/app/components/highlight/highlight.css":
/*!****************************************************!*\
  !*** ./src/app/components/highlight/highlight.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text{\r\n    border-radius: 3px;\r\n    padding: 6px 12px 1px 12px;\r\n    word-break: keep-all;\r\n    display: inline-block;\r\n    color: rgb(25, 17, 6);\r\n    font-family: 'Gill Sans';\r\n    margin: 3px;\r\n    margin-top: 10px;\r\n    font-size: 18px;\r\n    font-style: italic;\r\n    font-weight: 300;\r\n    text-indent: 2em;\r\n    line-height: 1.2em;\r\n    width: 100%;\r\n    border: 0px solid red;\r\n    height: 55px;\r\n}"

/***/ }),

/***/ "./src/app/components/highlight/highlight.html":
/*!*****************************************************!*\
  !*** ./src/app/components/highlight/highlight.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header header=\"Professional Summary\"></header>\r\n<p class=\"text\">\" {{content}} \"</p>"

/***/ }),

/***/ "./src/app/components/highlight/highlight.ts":
/*!***************************************************!*\
  !*** ./src/app/components/highlight/highlight.ts ***!
  \***************************************************/
/*! exports provided: HighlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightComponent", function() { return HighlightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightComponent = /** @class */ (function () {
    function HighlightComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HighlightComponent.prototype, "content", void 0);
    HighlightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'highlight',
            template: __webpack_require__(/*! ./highlight.html */ "./src/app/components/highlight/highlight.html"),
            styles: [__webpack_require__(/*! ./highlight.css */ "./src/app/components/highlight/highlight.css")]
        })
    ], HighlightComponent);
    return HighlightComponent;
}());



/***/ }),

/***/ "./src/app/components/note/note.css":
/*!******************************************!*\
  !*** ./src/app/components/note/note.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    vertical-align: center;\r\n    text-align: center;\r\n    border: 1px dotted black;\r\n    padding: 20px;\r\n    margin: 20px;\r\n    margin-top: -10px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\nspan{\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-style: italic;\r\n}"

/***/ }),

/***/ "./src/app/components/note/note.html":
/*!*******************************************!*\
  !*** ./src/app/components/note/note.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <span>{{message}}</span>\r\n</div>"

/***/ }),

/***/ "./src/app/components/note/note.ts":
/*!*****************************************!*\
  !*** ./src/app/components/note/note.ts ***!
  \*****************************************/
/*! exports provided: NoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteComponent", function() { return NoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoteComponent = /** @class */ (function () {
    function NoteComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NoteComponent.prototype, "message", void 0);
    NoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'note',
            template: __webpack_require__(/*! ./note.html */ "./src/app/components/note/note.html"),
            styles: [__webpack_require__(/*! ./note.css */ "./src/app/components/note/note.css")]
        })
    ], NoteComponent);
    return NoteComponent;
}());



/***/ }),

/***/ "./src/app/components/onat/onat-ge.html":
/*!**********************************************!*\
  !*** ./src/app/components/onat/onat-ge.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\r\n\t<description [name]=\"name\" [title]=\"title\"></description>\r\n\t<contact [stuff]=\"contact\"></contact>\r\n\t<highlight [content]=\"highlight\"></highlight>\r\n\r\n\t<table>\r\n\t\t<tr>\r\n\r\n\t\t\t<td class=\"tec\">\r\n\t\t\t\t<all-skill title=\"Technologies\" [skills]=\"tech\"></all-skill>\r\n\t\t\t</td>\r\n\t\t\t<td class=\"ski\">\r\n\t\t\t\t<all-skill title=\"Skills\" [skills]=\"skills\"></all-skill>\r\n\t\t\t</td>\r\n\r\n\t\t</tr>\r\n\t</table>\r\n\r\n\t<table>\r\n\t\t<tr>\r\n\t\t\t<td class=\"wor\">\r\n\t\t\t\t<all-work [works]=\"works\" [works2]=\"works2\"></all-work>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</table>\r\n\r\n\t<table>\r\n\t\t<tr>\r\n\t\t\t<table>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"edu\">\r\n\t\t\t\t\t\t<all-education [schools]=\"schools\"></all-education>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<td class=\"lan\">\r\n\t\t\t\t<table>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<all-hobbies title=\"Languages\" [interests]=\"languages\"></all-hobbies>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<note [message]=\"message\"></note>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</table>\r\n\t<all-hobbies id=\"hobbies\" title=\"Hobbies\" [interests]=\"interests\"></all-hobbies>\r\n</div>\r\n\r\n<div id=\"main\">\r\n\t<header header=\"Selected Publications & Certifications\"></header>\r\n\t<div class=\"work\" *ngFor=\"let data of badges\">\r\n\t\t<work [data]=\"data\"></work>\r\n\t</div>\r\n\t<br>\r\n\t<header header=\"References\"></header>\r\n\t<div class=\"work\" *ngFor=\"let data of references\">\r\n\t\t<work [data]=\"data\"></work>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/onat/onat-ge.ts":
/*!********************************************!*\
  !*** ./src/app/components/onat/onat-ge.ts ***!
  \********************************************/
/*! exports provided: OnatGEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnatGEComponent", function() { return OnatGEComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _onat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onat */ "./src/app/components/onat/onat.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OnatGEComponent = /** @class */ (function () {
    function OnatGEComponent() {
        this.tpm = new _onat__WEBPACK_IMPORTED_MODULE_1__["OnatComponent"]();
        this.name = this.tpm.name;
        this.title = this.tpm.title;
        this.message = this.tpm.message;
        this.highlight = this.tpm.highlight;
        this.languages = this.tpm.languages;
        this.interests = this.tpm.interests;
        this.badges = this.tpm.badges;
        this.schools = this.tpm.schools;
        this.references = this.tpm.references;
        this.works = this.tpm.works;
        this.works2 = this.tpm.works2;
        this.tech = this.tpm.tech;
        this.skills = this.tpm.skills;
        this.contact = [
            { "text": "onat.bas@ge.com", "disabled---image": "assets/mail.png" },
            { "text": "+1 647 797-0297 (CA)", "image": "assets/phone.png" },
            { "text": "+90 541 730-4804 (TR)", "image": "assets/phone.png" },
            { "text": "onatbas", "image": "assets/linkedin.png", "link": "https://linkedin.com/in/onatbas" },
            { "text": "onatbas", "image": "assets/github.png", "link": "https://github.build.ge.com/onatbas" },
            { "text": "TTC", "image": "assets/location.png" },
        ];
        this.works[0].fields[0] = this.works[0].fields[0].replace('17', '7');
    }
    OnatGEComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'onat-ge',
            template: __webpack_require__(/*! ./onat-ge.html */ "./src/app/components/onat/onat-ge.html"),
            styles: [__webpack_require__(/*! ./onat.css */ "./src/app/components/onat/onat.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OnatGEComponent);
    return OnatGEComponent;
}());



/***/ }),

/***/ "./src/app/components/onat/onat.css":
/*!******************************************!*\
  !*** ./src/app/components/onat/onat.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ntd{\r\n\tvertical-align: top;\r\n\twidth: 100%;\r\n}\r\ntable{\r\n\twidth: 100%;\r\n}\r\n.edu{\r\n\twidth: 70%;\r\n}\r\n.lan{\r\n\twidth: 30%;\r\n\tposition: relative;\r\n\ttop: -37px;\r\n}\r\n.ski{\r\n\twidth: 30%;\r\n}\r\n.tec{\r\n\twidth: 50%;;\r\n}\r\n.wor{\r\n\twidth: 100%;\r\n}\r\n@media print {\r\n\t#main {page-break-after: always;}\r\n}\r\n#hobbies{\r\n\tposition: relative;\r\n\ttop: -35px;\r\n}\r\n.hobbies{\r\n\twidth: 70%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/onat/onat.html":
/*!*******************************************!*\
  !*** ./src/app/components/onat/onat.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\r\n\t<description [name]=\"name\" [title]=\"title\"></description>\r\n\t<contact [stuff]=\"contact\"></contact>\r\n\t<highlight [content]=\"highlight\"></highlight>\r\n\r\n\r\n\r\n\t<all-work [works]=\"works\" [works2]=\"works2\"></all-work>\r\n\r\n\t<all-education [schools]=\"schools\"></all-education>\r\n\r\n</div><div id=\"main\">\r\n\r\n\t<table>\r\n\t\t<tr>\r\n\r\n\t\t\t<td class=\"tec\">\r\n\t\t\t\t<all-skill title=\"Technologies\" [skills]=\"tech\"></all-skill>\r\n\t\t\t</td>\r\n\t\t\t<td class=\"ski\">\r\n\t\t\t\t<all-skill title=\"Skills\" [skills]=\"skills\"></all-skill>\r\n\t\t\t</td>\r\n\r\n\r\n\t\t</tr>\r\n\t</table>\r\n\r\n\t<header header=\"Selected Publications & Certifications\"></header>\r\n\t<div class=\"work\" *ngFor=\"let data of badges\">\r\n\t\t<work [data]=\"data\"></work>\r\n\t</div>\r\n\t<br>\r\n\t<!--\r\n\t<header header=\"References\"></header>\r\n\t<div class=\"work\" *ngFor=\"let data of references\">\r\n\t\t<work [data]=\"data\"></work>\r\n\t</div>-->\r\n\r\n\t<table>\r\n\t\t<tr>\r\n\t\t\t<td class=\"hobbies\">\r\n\r\n\t<all-hobbies id=\"hobbies\" title=\"Hobbies\" [interests]=\"interests\"></all-hobbies>\r\n\t\t\t</td>\r\n\r\n\t\t\t<td class=\"lan\">\r\n\t\t\t\t<table>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t<all-hobbies title=\"Languages\" [interests]=\"languages\"></all-hobbies>\r\n\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<note [message]=\"message\"></note>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</table>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/onat/onat.ts":
/*!*****************************************!*\
  !*** ./src/app/components/onat/onat.ts ***!
  \*****************************************/
/*! exports provided: OnatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnatComponent", function() { return OnatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OnatComponent = /** @class */ (function () {
    function OnatComponent() {
        this.name = "Onat Bas";
        this.title = "Technical Product Manager";
        //  message = "Permanent resident, willing to relocate for the right opportunity.";
        this.message = "References available upon request.";
        this.highlight = "A technical product manager with extensive experience in developing mission-critical digital and hardware solutions. Leveraging expertise in product development, from concept to release, utilizing analytical and problem-solving skills to increase efficacy in working with and influencing cross-functional teams.";
        this.contact = [
            { "text": "git@onat.me", "disabled---image": "assets/mail.png" },
            { "text": "343-202-3941", "image": "assets/phone.png" },
            //         {"text": "maksatiyidir", "image": "assets/twitter.png"},
            { "text": "onatbas", "image": "assets/linkedin.png", "link": "https://linkedin.com/in/onatbas" },
            { "text": "onatbas", "image": "assets/github.png", "link": "https://github.com/onatbas" },
            { "text": "Ottawa, ON", "image": "assets/location.png" },
        ];
        this.tech = [
            "C/C++", "Java", "Ruby", "Go", "JS/TS/Node", "Python",
            "Mean",
            "CMake", "Docker", "Kubernetes", "Swarm",
            "Blockchain", "Git", "C#/.NET",
            "TDD", "robotframework", "Selenium", "Appium",
            "Angular", "CLIPS", "Boost", "Sinatra",
            "HTML/CSS",
            "PostgreSQL", "NoSQL", "Graph DBs",
            "AWS", "Azure", "Predix",
            "REST", "AMQP", "MQTT",
        ];
        this.skills = [
            "AI ",
            "Agile",
            "Algorithms",
            "B2B/SaaS",
            "CI/CD",
            "Debugging",
            "Expert Systems",
            "Lean Startup",
            "OOD/SOLID",
            "Product Vision",
            "Prototyping",
            "Requirements",
            "Research",
            "TDD",
            "UX Design",
            "XP"
        ];
        this.languages = [
            "Turkish", "English"
        ];
        this.interests = [
            "Software", "Parachuting", "VFX", "Skiing", "YouTube Videomaking", "Visual Storytelling", "Aviation", "\"Home automation\""
        ];
        this.works = [
            {
                company: "Ross Video",
                title: "Technical Product Manager",
                begin: "04/2021",
                end: "...",
                disableLocIcon: true,
                link: [
                    { name: "Carbonite Ultra", link: "https://www.rossvideo.com/products-services/acquisition-production/production-switchers/carbonite-ultra/" },
                    { name: "Ultrix Carbonite", link: "https://www.rossvideo.com/products-services/acquisition-production/production-switchers/ultrix-carbonite/" },
                    { name: "TouchDrive Panels", link: "https://www.rossvideo.com/products-services/acquisition-production/production-switchers/touchdrive-production-switcher/" },
                ],
                description: "Manager of the Carbonite product line and responsible for all Carbonite products, including NPI, tech support, hardware, software and manufacturing, My team includes 25+ software engineers, hardware designers, team leaders, and more.",
                fields: [
                    "NPI of new switcher products, such as \"Ultrix Carbonite\".",
                    "Work with suppliers to solve supply chain shortages for both NPI and existing products.",
                    "Plan and maintain 5 year roadmap for Carbonite group with Marketing.",
                    "Performing cost analysis, decision making on future of products.",
                    "Align team goals with the overall organizational vision.",
                    "Identify gaps in the industry and conceptualize new products.",
                    "Assist tech support with support tickets, commissioning vice versa.",
                    "Work with the factory to keep products shippping, address design issues.",
                    "Collaborate with Operations and plan changes, releases, phase-ins."
                ]
            },
            {
                company: "GE Gas Power",
                title: "Sr Technical Product Manager",
                begin: "06/2020",
                end: "04/2021",
                disableLocIcon: true,
                location: "",
                link: [],
                description: "Post shipment lifing and reliability data analysis for all GE Gas Power assets, extending part life, streamlining maintenance, analytics and monitoring.",
                fields: [
                    "TPM for managing teams of 17 software engineers total.",
                    "Managing 'Product Lifing' suite consisting of 16 products.",
                    "Solving engineering problems coming directly from engineers.",
                    "Design and planning of engineered solutions simultaneously.",
                    "Managing fast-paced releases for products (1-2 months max.)",
                    "Coordinating a fully remote global team located in US,TR,SW,IN."
                ]
            },
            {
                company: "GE Aviation",
                title: "Sr Technical Product Manager",
                begin: "03/2017",
                end: "06/2020",
                description: "Airline irregular operation management minimizing the impact of disruptions, reducing delays and cancellations and improving passenger experience.",
                disableLocIcon: true,
                location: "",
                link: [{ name: "Operations Insights", link: "https://www.geaviation.com/sites/default/files/digital-networkops-cloud-insights-datasheet.pdf" },
                    { name: "Crew Optimization", link: "https://www.geaviation.com/sites/default/files/digital-network-operations-cloud-crew-optimization-one-pager.pdf" },
                    { name: "Network Operations", link: "https://geaviation.com/digital/network-operations-management" }],
                fields: [
                    "Delivered B2B IROPS management products for Airlines.",
                    "Worked as a PM in MENAT region, full ownership of products.",
                    "Delivered products from concept to GA with $MM+ deals.",
                    "Delivered 3 SaaS solutions to multiple airlines.",
                    "Managing customer relations/account managers from EMEA,APAC,NA.",
                    "Collaborated with Marketing, Sales, Finance, UX, Engineering.",
                    "Worked in US/TR, managing multiple teams in US,PH,IN.",
                ]
            },
            {
                company: "GE Aviation",
                title: "Sr Software Engineer",
                begin: "05/2015",
                end: "03/2017",
                disableLocIcon: true,
                location: "",
                link: [{ name: "Passenger Protection", link: "https://www.geaviation.com/sites/default/files/digital-network-operations-cloud-passenger-protection-datasheet.pdf" }],
                fields: [
                    "Concept to GA product delivery of Passenger Protection product.",
                    "Design and implement complex algorithms to solve rerouting problems.",
                    "Actively engaging with customers via account managers, sales teams.",
                    "Developed internal engineering applications used by GE Engineers",
                    "Successful migration of multiple on-premise products to Azure, AWS.",
                    "Experience in delivering, maintaining live products that has 100+ MROs.",
                ]
            },
        ];
        this.works2 = [
            {
                company: "Triodor R&D",
                title: "Software Engineer",
                begin: "08/2011",
                end: "02/2014",
                disableLocIcon: true,
                //      small: true,
                location: "",
                link: [{ name: "Governor of Poker 2", link: "https://play.google.com/store/apps/details?id=air.com.youdagames.google.ww.gop2MobileFree&hl=en" },
                    { name: "Stratego", link: "https://play.google.com/store/apps/details?id=com.youdagames.stratego&hl=en" },
                    { name: "The Stanwick Legacy", link: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjrsPz43prrAhVSmMMKHVgQBRoQFjABegQICxAD&url=https%3A%2F%2Fwww.youdagames.com%2Fen%2Fonline-games%2Fyouda-mystery-the-stanwick-legacy%2F&usg=AOvVaw1cv3eBQOQIhZmK9QUEUX5H" }],
                fields: [
                    "Developed highly scalable MMO games with 2M+ downloads.",
                    "Have 60+ mobile games developed for iOS/Android."
                ]
            },
            {
                company: "WeDream",
                title: "Software Engineer",
                begin: "2010",
                end: "2011",
                disableLocIcon: true,
                location: "",
                //    small: true,
                link: [{ name: "vimeo/wedream", link: "https://vimeo.com/wedream" }],
                fields: [
                    "Founding member of a startup. Media walls, Kiosk and interactive attractions"
                ]
            }
        ];
        this.badges = [
            {
                company: "Patent ​(315789A-1 US)",
                title: "Optimizing Arrangements of Serviced Turbine Blades",
                begin: "2016",
                location: "GE Aviation",
                disableLocIcon: true,
                fields: [
                    "Inventor (1 of 3)",
                    "Patent owned by GE"
                ]
            }, {
                company: "Award",
                title: "Open-Source Contribution Award",
                begin: "2016",
                location: "Github",
                disableLocIcon: true
            }, {
                company: "Award",
                title: "Great Impact Award",
                begin: "2017",
                location: "GE Digital",
                disableLocIcon: true
            },
            {
                company: "Certification",
                title: "Predix CloudFoundry Certified Developer",
                location: "GE Digital",
                begin: 2017,
                disableLocIcon: true
            },
            {
                location: "EnTECH Conference",
                title: "Designing heat exchangers using genetic algorithms",
                begin: 2013,
                disableLocIcon: true,
                company: "Conference Paper"
            },
            {
                location: "British Council",
                title: "IELTS General",
                begin: 2020,
                disableLocIcon: true,
                company: "Examination",
                fields: [
                    "Overall: 8.5",
                    "Writing: 7",
                    "Speaking: 8.5",
                    "Reading: 9",
                    "Listening: 8.5"
                ]
            },
            {
                location: "World Education Services (WES) - Canada",
                title: "Educational Credential Assessment",
                begin: 2019,
                disableLocIcon: true,
                company: "Credential Equivalency Analysis",
                fields: [
                    "Master's degree: Issued by recognized institution. (Canadian Equivalency: Master's degree.)",
                    "Bachelor of Science (four years): Issued by recognized institution. (Canadian Equivalency: Bachelor's degree, four years)",
                ]
            }
        ];
        this.schools = [
            {
                company: "Boğaziçi University",
                title: "MSc, Software Engineering",
                begin: "2013",
                end: "2015",
                disableLocIcon: true,
                location: "",
                thesis: "Project: Utilization of semantic web structures to classify complex heritage data."
            },
            {
                company: "Yıldız Technical University",
                title: "BSc, Mechanical Engineering",
                begin: "2009",
                end: "2013",
                disableLocIcon: true,
                location: "",
                "thesis": "Thesis: Designing heat exchangers using genetic algorithms."
            }
        ];
        this.references = [
            {
                title: "Karen Miller",
                company: "VP of Product Management at GE Digital",
                location: "Columbus, OH",
                fields: [
                    "Phone: +1 720 656-5018"
                ]
            },
            {
                title: "Evrim Erdoğuş",
                company: "VP of Software Engineering at GE Aviation",
                location: "Istanbul, TR",
                fields: [
                    "Phone: +90 549 549-2364‬"
                ]
            },
            {
                title: "Jeff Schwab",
                company: "VP of Technical Product Management at GE Aviation",
                location: "Evendale, OH",
                fields: [
                    "Phone: ‬+1 440 476-6192"
                ]
            },
            {
                title: "Alison Camp",
                company: "Principal Product Manager at GE Aviation",
                location: "Austin, TX",
                fields: [
                    "Phone: +1 443 623-6105"
                ]
            }
        ];
    }
    OnatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'onat',
            template: __webpack_require__(/*! ./onat.html */ "./src/app/components/onat/onat.html"),
            styles: [__webpack_require__(/*! ./onat.css */ "./src/app/components/onat/onat.css")]
        })
    ], OnatComponent);
    return OnatComponent;
}());



/***/ }),

/***/ "./src/app/components/onat/onat2.ts":
/*!******************************************!*\
  !*** ./src/app/components/onat/onat2.ts ***!
  \******************************************/
/*! exports provided: Onat2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Onat2Component", function() { return Onat2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _onat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onat */ "./src/app/components/onat/onat.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Onat2Component = /** @class */ (function () {
    function Onat2Component() {
        this.tpm = new _onat__WEBPACK_IMPORTED_MODULE_1__["OnatComponent"]();
        this.name = this.tpm.name;
        this.title = this.tpm.title; // "Senior Software Engineer";
        this.message = this.tpm.message;
        this.highlight = this.tpm.highlight; //"A software engineer with extensive experience in developing mission-critical digital solutions and expert systems. Leveraging expertise in product development, from concept to implementation, utilizing analytical and problem-solving skills to increase efficacy in working with and influencing cross-functional teams.";
        this.contact = this.tpm.contact;
        this.languages = this.tpm.languages;
        this.interests = this.tpm.interests;
        this.badges = this.tpm.badges;
        this.schools = this.tpm.schools;
        this.references = this.tpm.references;
        this.works = this.tpm.works;
        this.works2 = this.tpm.works2;
        this.tech = [
            "C/C++", "Java", "Ruby", "Go", "JS/TS/Node", "Python",
            "Mean",
            "CMake", "Docker", "Kubernetes", "Swarm",
            "Shell", "Git", "C#/.NET",
            "TDD", "robotframework", "Selenium", "Appium",
            "Angular", "CLIPS", "Boost", "Sinatra",
            "HTML/CSS",
            "PostgreSQL", "NoSQL", "Graph DBs",
            "AWS", "Azure", "Predix",
            "REST", "AMQP", "MQTT",
        ];
        this.skills = [
            "AI ",
            "Agile", "Scrum",
            "Algorithms",
            "B2B/SaaS",
            "CI/CD",
            "Debugging",
            "Expert Systems",
            "Innovation",
            "Lean Startup",
            "OOD/SOLID",
            "Product Vision",
            "Prototyping",
            "Requirements",
            "Research",
            "TDD",
            "UX Design",
            "XP"
        ];
        //     this.works[1].title = "Sr Software Engineer - Product Owner";
    }
    Onat2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'onat2',
            template: __webpack_require__(/*! ./onat.html */ "./src/app/components/onat/onat.html"),
            styles: [__webpack_require__(/*! ./onat.css */ "./src/app/components/onat/onat.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Onat2Component);
    return Onat2Component;
}());



/***/ }),

/***/ "./src/app/components/shared/header/header.css":
/*!*****************************************************!*\
  !*** ./src/app/components/shared/header/header.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div1{\r\n    text-align: center;\r\n    border-top: 1px solid #000;\r\n    margin-top: 40px;\r\n    position: relative;\r\n    top: -10px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.div2{\r\n    position: relative;\r\n    width: 100%;\r\n    text-align: center;\r\n    border: 0px solid red;\r\n    height: 0px;\r\n}\r\n\r\nh1{\r\n    position: relative;\r\n    top: -45px;\r\n    background-color: #fff;\r\n    padding: 0px 40px 0px 40px;\r\n    display: inline-table;\r\n    font-family: \"Times New Roman\";\r\n    font-weight: 100;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/shared/header/header.html":
/*!******************************************************!*\
  !*** ./src/app/components/shared/header/header.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"div1\">\r\n        <div class=\"div2\"><h1>{{header}}</h1></div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/shared/header/header.ts":
/*!****************************************************!*\
  !*** ./src/app/components/shared/header/header.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "header", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header',
            template: __webpack_require__(/*! ./header.html */ "./src/app/components/shared/header/header.html"),
            styles: [__webpack_require__(/*! ./header.css */ "./src/app/components/shared/header/header.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\obas\workspace\secretcv\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map