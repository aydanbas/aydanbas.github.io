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
/* harmony import */ var _components_eylul_eylul__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/eylul/eylul */ "./src/app/components/eylul/eylul.ts");
/* harmony import */ var _components_onat_onat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/onat/onat */ "./src/app/components/onat/onat.ts");
/* harmony import */ var _components_onat_onat_ge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/onat/onat-ge */ "./src/app/components/onat/onat-ge.ts");
/* harmony import */ var _components_onat_onat2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/onat/onat2 */ "./src/app/components/onat/onat2.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/onat', pathMatch: 'full' },
    { path: 'onat', component: _components_onat_onat__WEBPACK_IMPORTED_MODULE_4__["OnatComponent"] },
    { path: 'onat2', component: _components_onat_onat2__WEBPACK_IMPORTED_MODULE_6__["Onat2Component"] },
    { path: 'aydan', component: _components_aydan_aydan__WEBPACK_IMPORTED_MODULE_2__["AydanComponent"] },
    { path: 'eylul', component: _components_eylul_eylul__WEBPACK_IMPORTED_MODULE_3__["EylulComponent"] },
    { path: 'onat-ge', component: _components_onat_onat_ge__WEBPACK_IMPORTED_MODULE_5__["OnatGEComponent"] }
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

module.exports = "@page {size: A3;}\n"

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

module.exports = "\n    <header header=\"Education\"></header>\n    <div class=\"work\">\n        <work *ngFor=\"let school of schools\" [data]=\"school\"></work>\n    </div>\n"

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

module.exports = "\n#interests{\n    width: 100%;\n    text-align: center;\n    vertical-align: top;\n}\n\n#interestList{\n    margin-top: 10px;\n}\n\n.interest{\n    display: inline-block;\n    line-height: 0.5em;\n}"

/***/ }),

/***/ "./src/app/components/all-hobbies/all-hobbies.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/all-hobbies/all-hobbies.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"interests\">\n    <header header=\"{{title}}\"></header>\n    <div id=\"interestList\">\n        <interest class=\"interest\" *ngFor=\"let interest of interests\" [interest]=\"interest\"></interest>\n    </div>\n</div>"

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

module.exports = "span{\n    text-transform: capitalize;\n    border-radius: 3px;\n    bordder: 1px solid #FAA122;\n    padding: 6px 12px 1px 12px;\n    word-break: keep-all;\n    display: inline-block;\n    dcolor: #FAA122;\n    font-family: 'Times New Roman';\n    font-size: 18px;\n    font-weight: 100;\n    margin: 3px;\n    margin-bottom: 10px;\n}"

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

module.exports = "\n.skills{\n    margin: auto;\n    width: 100%;\n    text-align: center;\n    text-transform: capitalize;\n}\n\n.main{\n    width: 100%;\n}\n\n.main td{\n    vertical-align: top;\n}\n\n.skill{\n    width: 250px;\n    display: inline-table;\n    text-align: left;\n}\n\n.skill::before{\n    content: '\\25CF';\n}\n"

/***/ }),

/***/ "./src/app/components/all-skill/all-skill.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/all-skill/all-skill.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n            <header header=\"{{title}}\"></header>\n            <table class=\"skills\">\n                <tr>\n                    <td>\n                            <skill class=\"skill\" *ngFor=\"let skill of skills\" [skill]=\"skill\"></skill>\n                    </td>\n                </tr>\n            </table>\n        </div>"

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

module.exports = "*{\n    padding-left: 10px;\n    font-family: 'Times New Roman';\n    font-weight: 100px;\n    font-size: 18px;\n    word-break: keep-all;\n    width: 80%;\n    display: table-cell;\n    border: 0px solid red;\n}"

/***/ }),

/***/ "./src/app/components/all-skill/skill/skill.html":
/*!*******************************************************!*\
  !*** ./src/app/components/all-skill/skill/skill.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<span>{{skill}}</span>\n-->\n\n<input value=\"{{skill}}\" />\n"

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

module.exports = ".work{\n    margin: 10px;\n    margin-bottom: -10px;\n}\n\n.secondary{\n    width: 48%;\n    display: inline-block;\n}\n\n.main *{\n    vertical-align: top;\n}"

/***/ }),

/***/ "./src/app/components/all-work/all-work.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/all-work/all-work.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header header=\"Work History\"></header>\n<div class=\"main\">\n  <div class=\"work\" *ngFor=\"let data of works\">\n      <work [data]=\"data\"></work>\n  </div>\n\n  <div class=\"work secondary\" *ngFor=\"let data of works2\">\n      <work [data]=\"data\" small=\"true\" ></work>\n  </div>\n</div>"

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

module.exports = "#title{\n    width: 40%;\n    display: table-cell;\n}\n\n#company{\n    width: 15%;\n}\n\ntable{\n    width: 100%;\n}\n\na{\n    border-bottom: 1px dashed black;\n    text-decoration: none;\n}\n\n.date{\n    top: 0px;\n}\n\n.upside{\n    border-bottom: 1px dashed #505050;\n}\n\n.location{\n    margin-left: 5px;\n    margin-right: 0px !important;\n}\n\n.link>*{\n    font-style: italic;\n    color: #303030;\n    margin-bottom: 6px;\n}\n\n.link{\n    float: right;\n    margin: -5px;\n    margin-right: -15px;\n    vertical-align: top;\n    text-align: right;\n    height: 100%;\n    max-width: 50%;\n    border: 0px solid blue;\n}\n\n.descriptions td{\n    padding-top: 10px;\n    vertical-align: top;\n}\n\n#things{\n}\n\n*{\n    font-family: 'Times New Roman';\n    margin: 0px;\n    font-weight: 100;\n    color: #303030;\n}\n\nh3{\n    font-weight: lighter;\n}\n\nimg{\n    max-width: 26px;\n    max-height: 26px;\n}\n\n.linkimg{\n    margin-right: 3px;\n    max-width: 10px;\n    position: relative;\n    top: 1px;\n\n}\n\n.descriptions td{\n    width: 50%;\n}\n\n.othertd{\n    width: 10%;\n}\n\n.othertd2{\n    text-align: right;\n    width: 20%;\n}\n\n.things,.things *{\n    font-family: 'Times New Roman', 'Al bayan';\n    color: #454545;\n}\n\n.things{\n    color: #454545;\n}\n\n.thing{\n    min-width: 80%;\n    line-height: 1.5em;\n    border: 0px solid red;\n\n\n}\n\n#main{\n    margin-bottom: 20px;\n    vertical-align: top;\n}\n\n.descriptions{\n    width: 100%;\n}\n\n.descriptions td:first-child{\n    min-width: 50%;\n}\n\n.jobhighlight{\n    margin-top: 10px;\n    text-indent: 1em;\n    font-style: italic;\n}\n\n.thesis{\n    font-style: italic;\n}\n\n.no-visible{\n    width: 0px !important;\n    display: none;\n}\n\n.big-visible{\n    width: 100% !important;\n}\n\n.descriptionheader{\n    margin-top: 20px;\n    margin-bottom: 8px;\n}"

/***/ }),

/***/ "./src/app/components/all-work/work/work.html":
/*!****************************************************!*\
  !*** ./src/app/components/all-work/work/work.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\n    <table class=\"upside\">\n        <tr>\n            <td id=\"title\">\n                <h2>{{data.title}}</h2>\n            </td>\n            <td *ngIf=\"data.begin\" id=\"company\">\n                <h3>{{data.company}}</h3>\n            </td>\n            <td *ngIf=\"!data.begin\" id=\"company\">\n                <h3 style=\"width: 200%;\">{{data.company}}</h3>\n            </td>\n\n            <td class=\"othertd\">\n                <!-- <img src=\"assets/calendar.png\"> -->\n                <span class=\"other date\" *ngIf=\"data.end\"> {{data.begin}} - {{data.end}}</span>\n                <span class=\"other date\" *ngIf=\"!data.end\"> {{data.begin}}</span>\n            </td>\n            <td class=\"othertd2\" *ngIf=\"data.location\">\n                <img *ngIf=\"! data.disableLocIcon\" src=\"assets/location.png\">\n                <span class=\"other location\">{{data.location}}</span>\n\n            </td>\n        </tr>\n    </table>\n\n    <div class=\"descriptions\">\n\n        <p class=\"jobhighlight\" *ngIf=\"data.description\">{{data.description}}</p>\n\n        <table>\n            <tr>\n                <td [ngClass]=\"{'no-visible': renderSingle === true}\">\n                    <div id=\"things\">\n                        <li class=\"thing\" *ngFor=\"let field of fields\">{{field}}</li>\n                    </div>\n                </td>\n                <td>\n                    <div class=\"link\">\n                        <div *ngFor=\"let link of data.link\">\n                            <img class=\"linkimg\" src=\"assets/link.png\" /><a [href]=\"link.link\">{{link.name}}</a>\n                        </div>\n                    </div>\n                    \n                    <div id=\"things\" [ngClass]=\"{'big-visible': renderSingle === true}\" >\n                        <span class=\"thing\"  *ngFor=\"let field of fields2\">\n                            <li *ngIf=\"0>field.indexOf('###')\">{{field}}</li>\n                            <h2 class=\"descriptionheader\" *ngIf=\"field.indexOf('###')>-1\">{{field.substr(3,999)}}</h2>\n                        </span>\n                    </div>\n                </td>\n            </tr>\n        </table>\n    </div>\n    <div class=\"thesis\" *ngIf=\"data.thesis\">{{data.thesis}}</div>\n</div>"

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

module.exports = "\ntd{\n\tvertical-align: top;\n\twidth: 100%;\n}\ntable{\n\twidth: 100%;\n}\n.edu{\n\twidth: 40%;\n}\n.lan{\n\twidth: 40%;\n}\n.ski{\n\twidth: 40%;\n}\n.tec{\n\twidth: 75%;\n}\n.wor{\n\twidth: 50%;\n}\n@media print {\n\t#main {page-break-after: always;}\n  }\n"

/***/ }),

/***/ "./src/app/components/aydan/aydan.html":
/*!*********************************************!*\
  !*** ./src/app/components/aydan/aydan.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<description [name]=\"name\" [title]=\"title\"></description>\n\t<contact [stuff]=\"contact\"></contact>\n\t<highlight [content]=\"highlight\"></highlight>\n\t\n\n\n\t<all-skill title=\"Skills\" [skills]=\"skills\"></all-skill>\n\n\n\t<all-work [works]=\"works\" [works2]=\"works2\"></all-work>\n\t\n\t<all-education [schools]=\"schools\"></all-education>\n\t\n\n\t<header header=\"Certifications\"></header>\n\t<div class=\"work\" *ngFor=\"let data of badges\">\n\t\t<work [data]=\"data\"></work>\n\t</div>\n\n\n\t<all-hobbies title=\"Languages\" [interests]=\"languages\"></all-hobbies>\n"

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
        this.title = "QA Tester & Business Analyst";
        this.message = "Canadian permanent resident, willing to travel and relocate for the right opportunity.";
        this.highlight = "As an experienced testing and business analyst professional, I have a track record of successfully managing projects, collaborating with cross-functional teams, and delivering high-quality solutions. My expertise in analyzing business requirements, designing and executing test cases, and identifying areas for process improvements, coupled with strong analytical skills and attention to detail, ensures project success. My excellent communication and interpersonal abilities have also enabled me to build strong relationships with stakeholders and clients.";
        this.contact = [
            { "text": "aydan.altiparmak@gmail.com", "disabled---image": "assets/mail.png" },
            { "text": "+1 (343) 202-3946", "image": "assets/phone.png" },
            //         {"text": "maksatiyidir", "image": "assets/twitter.png"},
            //{ "text": "onatbas", "image": "assets/linkedin.png", "link": "https://linkedin.com/in/onatbas" },
            { "text": "Ottawa, ON", "image": "assets/location.png" },
        ];
        this.skills = [
            "Documentation",
            "Product Requirements",
            "Test Planning",
            "Project Planning",
            "Triage",
            "Project Management",
            "Localization",
            "Project Design",
            "Product Ownership",
            "Customer Relations",
            "Scrum",
            "Agile",
            "Product Development",
            "Automation",
            "JavaScript",
            "Azure Devops",
            "Manual Testing",
            "API/HTTP Testing",
            "Postman",
            "SQL",
            "PV/QA",
            "Git & GitHub",
            "MongoDB"
        ];
        this.tech = [];
        this.languages = [
            "English", "Turkish"
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
                    "Tested and analyzed the \"Kids First\" web application, designed to help separated parents prioritize their children's needs.",
                    "Worked with the development team, using NodeJS and React to build the backend and frontend, respectively.",
                    "Utilized Git and NPM to manage the project and run commands.",
                    "Created and executed test scenarios to verify functionality and identify issues.",
                    "Collaborated with the development team to assign and verify fixes.",
                    "Leveraged MongoDB to store and manage application data efficiently.",
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

module.exports = "*{\n\tmargin: 0px;\n\tpadding: 0px;\n}\n\n.ground{\n\tdisplay: inline-block;\n\tbackground-color: rgb(139, 139, 139);\n\theight: 20px;\n\tborder-radius: 5px;\n}\n\n.background{\n\ttext-align: left;\n\twidth: 40%;\n\tposition: relative;\n\ttop: 3px;\n}\n\n.colored{\n\tdisplay: inline-block;\n\tbackground-color: rgb(53, 53, 53) !important;\n}\n\n#chartsList{\n\tmargin-top: 10px;\n}\n\nspan{\n\tmargin-bottom: 3px;\n\n    text-transform: capitalize;\n    border-radius: 3px;\n    word-break: keep-all;\n    display: inline-block;\n    font-family: 'Times New Roman';\n    font-size: 18px;\n    font-weight: 100;\n\tpadding-right: 15px;\n}\n\n.percentage{\n\twidth: 10%;\n\tmargin-left: 10px;\n}"

/***/ }),

/***/ "./src/app/components/charts/charts.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/charts/charts.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header header=\"{{title}}\"></header>\n<div id=\"charts\">\n    <div id=\"chartsList\">\n\n\t\t<div *ngFor=\"let chart of charts\" style=\"text-align: right; padding-right: 20px;\">\n\t\t\t<span>{{chart.text}}</span>\n\n\t\t\t<div class=\"ground background\"> \n\t\t\t\t<div class=\"ground colored\" [style.width.%]=\"chart.percentage\" >\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<span *ngIf=\"percentageVisible\" class=\"percentage\">{{chart.percentage}}%</span>\n\n\t\t</div>\n\n\t</div>\n</div>"

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

module.exports = "img{\n    max-width: 15px;\n    max-height: 15px;\n}\n\n*{\n    font-family: 'Times New Roman';\n    text-align: right;\n}\n\n.imagecont{\n    display: inline-block;\n    width: 15px;\n    height: 15px;\n    text-align: center;\n    padding: 0px;\n}\n\ntr>*{\n    display: inline;\n}\n\ninput, a{\n    font-family: 'Times New Roman';\n    text-align: left;\n    position: relative;\n    right: -4px;\n    top: -2px;\n\tborder:0px solid red;\n    font-size: 16px;\n    width: 80%;\n}\n\na{\n    color: black;\n    border-bottom: 1px dashed black;\n    text-decoration: none;\n}\n\ntr{\n    font-size: 20px;\n}\n\n.item{\n    display: inline-block;\n    text-align: center;\n    margin: 15px 35px 5px 35px;\n}\n\n#main{\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/components/contact/contact.html":
/*!*************************************************!*\
  !*** ./src/app/components/contact/contact.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\n        <div class=\"item\" *ngFor=\"let data of stuff\">\n                <div *ngIf=\"data.image\" class=\"imagecont\"><img [src]=\"data.image\" /></div>\n                <span *ngIf=\"!data.link\">{{data.text}}</span>\n                <a *ngIf=\"data.link\" href=\"{{data.link}}\">{{data.text}}</a>\n        </div>\n</div>"

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

module.exports = "\ntable{\n    width: 100%;\n}\n\ntable td{\n\n        text-transform: capitalize;\n        border-radius: 3px;\n        padding: 6px 12px 1px 12px;\n        word-break: keep-all;\n        display: inline-block;\n        margin: 3px;\n        margin-bottom: 5px;\n        font-family: 'Times New Roman';\n        font-weight: 100;\n        font-size: 18px;\n}\n\n.type{\n\n}\n\n.title{\n    text-align: right;\n}\n\n.source{\n    text-align: left;\n}"

/***/ }),

/***/ "./src/app/components/deprecated/badge/badge.html":
/*!********************************************************!*\
  !*** ./src/app/components/deprecated/badge/badge.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <table>\n        <tr>\n            <td class=\"type\">{{badge.type}}</td>\n            <td class=\"title\">{{badge.title}}</td>\n            <td class=\"source\">{{badge.source}}</td>\n        </tr>\n    </table>\n</div>\n\n                <!--\n                <div class=\"sep\"></div>\n                <span></span>\n                <div class=\"sep\"></div>\n        -->\n        "

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

module.exports = "#main{\n    border-bottom: 1px solid #000;\n    border-top: 1px solid #000;\n\n    font-family: \"Times New Roman\";\n    text-transform: uppercase;\n    padding: 20px;\n\n}\n\ninput, input:focus{\n    font-size: 12px;\n    font-family: \"Times New Roman\";\n    text-transform: uppercase;\n  width: 100%;;\nborder-width:0px;\nborder:none;\n}\n\ndiv{\n    margin-top: 2px;\n    border-bottom: 2px solid #000;\n\n}\n\n*{\n    margin: 0px;\n    text-align: center;\n    font-weight: 100;\n\n}\n\n*::first-letter{\n    font-size: 1.3em;\n}\n\n"

/***/ }),

/***/ "./src/app/components/description/description.html":
/*!*********************************************************!*\
  !*** ./src/app/components/description/description.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\n<h2>{{name}}</h2>\n<input type=\"text\" value=\"{{title}}\">\n</div>\n<div></div>\n"

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

module.exports = "\ntd{\n\tvertical-align: top;\n\twidth: 100%;\n}\ntable{\n\twidth: 100%;\n}\n.edu{\n\twidth: 70%;\n}\n.lan{\n\twidth: 30%;\n}\n.ski{\n\twidth: 35%;\n}\n.tec{\n\twidth: 65%;\n}\n.wor{\n\twidth: 100%;\n}\n@media print {\n\t#xxxmain {page-break-after: always;}\n  }"

/***/ }),

/***/ "./src/app/components/eylul/eylul.html":
/*!*********************************************!*\
  !*** ./src/app/components/eylul/eylul.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\n\t<description [name]=\"name\" [title]=\"title\"></description>\n\t<contact [stuff]=\"contact\"></contact>\n\t<highlight [content]=\"highlight\"></highlight>\n\n\t<table>\n\t\t<tr>\n\n\t\t\t<td class=\"tec\">\n\t\t\t\t<all-skill title=\"Technologies\" [skills]=\"tech\"></all-skill>\n\t\t\t</td>\n\t\t\t<td class=\"ski\">\n\t\t\t\t<all-skill title=\"Skills\" [skills]=\"skills\"></all-skill>\n\t\t\t</td>\n\n\t\t</tr>\n\t</table>\n\n\t<table>\n\t\t<tr>\n\t\t\t<td class=\"wor\">\n\t\t\t\t<all-work [works]=\"works\" [works2]=\"works2\"></all-work>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t</td>\n\t\t</tr>\n\t</table>\n\n\t<table>\n\t\t<tr>\n\t\t\t<table>\n\t\t\t\t<tr>\n\t\t\t\t\t<td class=\"edu\">\n\t\t\t\t\t\t<all-education [schools]=\"schools\"></all-education>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t\t<td class=\"lan\">\n\t\t\t\t<table>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<all-hobbies title=\"Languages\" [interests]=\"languages\"></all-hobbies>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<br>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<!--<note [message]=\"message\"></note>-->\n\t\t\t\t\t\t<all-hobbies title=\"Hobbies\" [interests]=\"interests\"></all-hobbies>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t</tr>\n\t</table>\n</div>\n\n<div id=\"main\">\n\t<header header=\"Selected Publications & Certifications\"></header>\n\t<div class=\"work\" *ngFor=\"let data of badges\">\n\t\t<work [data]=\"data\"></work>\n\t</div>\n<br><!--\n\t<header header=\"References\"></header>\n\t<div class=\"work\" *ngFor=\"let data of references\">\n\t\t<work [data]=\"data\"></work>\n\t</div>-->\n</div>"

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

module.exports = ".text{\n    border-radius: 3px;\n    padding: 6px 12px 1px 12px;\n    word-break: keep-all;\n    display: inline-block;\n    color: rgb(25, 17, 6);\n    font-family: 'Gill Sans';\n    margin: 3px;\n    margin-top: 10px;\n    font-size: 18px;\n    font-style: italic;\n    font-weight: 300;\n    text-indent: 2em;\n    line-height: 1.2em;\n    width: 100%;\n    border: 0px solid red;\n    height: 55px;\n}"

/***/ }),

/***/ "./src/app/components/highlight/highlight.html":
/*!*****************************************************!*\
  !*** ./src/app/components/highlight/highlight.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header header=\"Professional Summary\"></header>\n<p class=\"text\">\" {{content}} \"</p>"

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

module.exports = "div{\n    vertical-align: center;\n    text-align: center;\n    border: 1px dotted black;\n    padding: 20px;\n    margin: 20px;\n    margin-top: -10px;\n    margin-bottom: 0px;\n}\n\nspan{\n    font-family: 'Times New Roman', Times, serif;\n    font-style: italic;\n}"

/***/ }),

/***/ "./src/app/components/note/note.html":
/*!*******************************************!*\
  !*** ./src/app/components/note/note.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <span>{{message}}</span>\n</div>"

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

module.exports = "<div id=\"main\">\n\t<description [name]=\"name\" [title]=\"title\"></description>\n\t<contact [stuff]=\"contact\"></contact>\n\t<highlight [content]=\"highlight\"></highlight>\n\n\t<table>\n\t\t<tr>\n\n\t\t\t<td class=\"tec\">\n\t\t\t\t<all-skill title=\"Technologies\" [skills]=\"tech\"></all-skill>\n\t\t\t</td>\n\t\t\t<td class=\"ski\">\n\t\t\t\t<all-skill title=\"Skills\" [skills]=\"skills\"></all-skill>\n\t\t\t</td>\n\n\t\t</tr>\n\t</table>\n\n\t<table>\n\t\t<tr>\n\t\t\t<td class=\"wor\">\n\t\t\t\t<all-work [works]=\"works\" [works2]=\"works2\"></all-work>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t</td>\n\t\t</tr>\n\t</table>\n\n\t<table>\n\t\t<tr>\n\t\t\t<table>\n\t\t\t\t<tr>\n\t\t\t\t\t<td class=\"edu\">\n\t\t\t\t\t\t<all-education [schools]=\"schools\"></all-education>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t\t<td class=\"lan\">\n\t\t\t\t<table>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<all-hobbies title=\"Languages\" [interests]=\"languages\"></all-hobbies>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<br>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<note [message]=\"message\"></note>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t</tr>\n\t</table>\n\t<all-hobbies id=\"hobbies\" title=\"Hobbies\" [interests]=\"interests\"></all-hobbies>\n</div>\n\n<div id=\"main\">\n\t<header header=\"Selected Publications & Certifications\"></header>\n\t<div class=\"work\" *ngFor=\"let data of badges\">\n\t\t<work [data]=\"data\"></work>\n\t</div>\n\t<br>\n\t<header header=\"References\"></header>\n\t<div class=\"work\" *ngFor=\"let data of references\">\n\t\t<work [data]=\"data\"></work>\n\t</div>\n</div>"

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

module.exports = "\ntd{\n\tvertical-align: top;\n\twidth: 100%;\n}\ntable{\n\twidth: 100%;\n}\n.edu{\n\twidth: 70%;\n}\n.lan{\n\twidth: 30%;\n\tposition: relative;\n\ttop: -37px;\n}\n.ski{\n\twidth: 30%;\n}\n.tec{\n\twidth: 50%;;\n}\n.wor{\n\twidth: 100%;\n}\n@media print {\n\t#main {page-break-after: always;}\n}\n#hobbies{\n\tposition: relative;\n\ttop: -35px;\n}\n.hobbies{\n\twidth: 70%;\n}\n"

/***/ }),

/***/ "./src/app/components/onat/onat.html":
/*!*******************************************!*\
  !*** ./src/app/components/onat/onat.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\n\t<description [name]=\"name\" [title]=\"title\"></description>\n\t<contact [stuff]=\"contact\"></contact>\n\t<highlight [content]=\"highlight\"></highlight>\n\n\n\n\t<all-work [works]=\"works\" [works2]=\"works2\"></all-work>\n\n\t<all-education [schools]=\"schools\"></all-education>\n\n</div><div id=\"main\">\n\n\t<table>\n\t\t<tr>\n\n\t\t\t<td class=\"tec\">\n\t\t\t\t<all-skill title=\"Technologies\" [skills]=\"tech\"></all-skill>\n\t\t\t</td>\n\t\t\t<td class=\"ski\">\n\t\t\t\t<all-skill title=\"Skills\" [skills]=\"skills\"></all-skill>\n\t\t\t</td>\n\n\n\t\t</tr>\n\t</table>\n\n\t<header header=\"Selected Publications & Certifications\"></header>\n\t<div class=\"work\" *ngFor=\"let data of badges\">\n\t\t<work [data]=\"data\"></work>\n\t</div>\n\t<br>\n\t<!--\n\t<header header=\"References\"></header>\n\t<div class=\"work\" *ngFor=\"let data of references\">\n\t\t<work [data]=\"data\"></work>\n\t</div>-->\n\n\t<table>\n\t\t<tr>\n\t\t\t<td class=\"hobbies\">\n\n\t<all-hobbies id=\"hobbies\" title=\"Hobbies\" [interests]=\"interests\"></all-hobbies>\n\t\t\t</td>\n\n\t\t\t<td class=\"lan\">\n\t\t\t\t<table>\n\t\t\t\t\t<tr>\n\t\t\t\t\t<all-hobbies title=\"Languages\" [interests]=\"languages\"></all-hobbies>\n\n\t\t\t\t\t</tr>\n\t\t\t\t\t<br>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<note [message]=\"message\"></note>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t</tr>\n\t</table>\n\n</div>\n\n"

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

module.exports = ".div1{\n    text-align: center;\n    border-top: 1px solid #000;\n    margin-top: 40px;\n    position: relative;\n    top: -10px;\n    margin-bottom: 5px;\n}\n\n.div2{\n    position: relative;\n    width: 100%;\n    text-align: center;\n    border: 0px solid red;\n    height: 0px;\n}\n\nh1{\n    position: relative;\n    top: -45px;\n    background-color: #fff;\n    padding: 0px 40px 0px 40px;\n    display: inline-table;\n    font-family: \"Times New Roman\";\n    font-weight: 100;\n}\n"

/***/ }),

/***/ "./src/app/components/shared/header/header.html":
/*!******************************************************!*\
  !*** ./src/app/components/shared/header/header.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"div1\">\n        <div class=\"div2\"><h1>{{header}}</h1></div>\n</div>"

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

module.exports = __webpack_require__(/*! /Users/otb/workspace/secretcv/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map