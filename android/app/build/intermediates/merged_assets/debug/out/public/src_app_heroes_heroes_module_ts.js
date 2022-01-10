"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_heroes_heroes_module_ts"],{

/***/ 5243:
/*!********************************************************!*\
  !*** ./src/app/heroes/add-heroes/add-heroes.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddHeroesPageModule": () => (/* binding */ AddHeroesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _add_heroes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-heroes.page */ 2280);






let AddHeroesPageModule = class AddHeroesPageModule {
};
AddHeroesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule],
        declarations: [_add_heroes_page__WEBPACK_IMPORTED_MODULE_0__.AddHeroesPage],
    })
], AddHeroesPageModule);



/***/ }),

/***/ 2280:
/*!******************************************************!*\
  !*** ./src/app/heroes/add-heroes/add-heroes.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddHeroesPage": () => (/* binding */ AddHeroesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_Usuario_projects_alten1_heroes_ionic_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_heroes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-heroes.page.html */ 4806);
/* harmony import */ var _add_heroes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-heroes.page.scss */ 590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_shared_nest_service_nest_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/nest-service/nest-service.service */ 3956);







let AddHeroesPage = class AddHeroesPage {
    constructor(formBuilder, nestService, modalCtrl) {
        this.formBuilder = formBuilder;
        this.nestService = nestService;
        this.modalCtrl = modalCtrl;
        this.addHeroForm = this.formBuilder.group({
            hero: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
    }
    onSubmit() {
        if (this.addHeroForm.value.hero.trim()) {
            this.nestService.addHero(this.addHeroForm.value.hero).subscribe();
        }
        this.modalCtrl.dismiss();
    }
    goBack() {
        this.modalCtrl.dismiss();
    }
};
AddHeroesPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_shared_nest_service_nest_service_service__WEBPACK_IMPORTED_MODULE_2__.NestService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
AddHeroesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-add-heroes',
        template: _C_Users_Usuario_projects_alten1_heroes_ionic_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_heroes_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_heroes_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddHeroesPage);



/***/ }),

/***/ 2874:
/*!*************************************************!*\
  !*** ./src/app/heroes/heroes-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroesPageRoutingModule": () => (/* binding */ HeroesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _heroes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heroes.page */ 4078);




const routes = [
    {
        path: '',
        component: _heroes_page__WEBPACK_IMPORTED_MODULE_0__.HeroesPage,
    },
    {
        path: 'hero-details/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../hero-details/hero-details.module */ 1813)).then((m) => m.HeroDetailsPageModule),
    },
];
let HeroesPageRoutingModule = class HeroesPageRoutingModule {
};
HeroesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HeroesPageRoutingModule);



/***/ }),

/***/ 68:
/*!*****************************************!*\
  !*** ./src/app/heroes/heroes.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroesPageModule": () => (/* binding */ HeroesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _heroes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heroes-routing.module */ 2874);
/* harmony import */ var _heroes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heroes.page */ 4078);
/* harmony import */ var _add_heroes_add_heroes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-heroes/add-heroes.module */ 5243);








let HeroesPageModule = class HeroesPageModule {
};
HeroesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _heroes_routing_module__WEBPACK_IMPORTED_MODULE_0__.HeroesPageRoutingModule,
            _add_heroes_add_heroes_module__WEBPACK_IMPORTED_MODULE_2__.AddHeroesPageModule,
        ],
        declarations: [_heroes_page__WEBPACK_IMPORTED_MODULE_1__.HeroesPage],
    })
], HeroesPageModule);



/***/ }),

/***/ 4078:
/*!***************************************!*\
  !*** ./src/app/heroes/heroes.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroesPage": () => (/* binding */ HeroesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_Usuario_projects_alten1_heroes_ionic_node_modules_ngtools_webpack_src_loaders_direct_resource_js_heroes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./heroes.page.html */ 9054);
/* harmony import */ var _heroes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heroes.page.scss */ 1195);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 6755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var angular_bounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bounce */ 6451);
/* harmony import */ var _shared_nest_service_nest_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/nest-service/nest-service.service */ 3956);
/* harmony import */ var _add_heroes_add_heroes_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-heroes/add-heroes.page */ 2280);









let HeroesPage = class HeroesPage {
    constructor(nestService, modalCtrl) {
        this.nestService = nestService;
        this.modalCtrl = modalCtrl;
        this.heroes = [];
        this.visible = true;
    }
    ionViewDidEnter() {
        this.getHeroes();
    }
    getHeroes() {
        this.nestService.getHeroes().subscribe((data) => (this.heroes = data));
    }
    deleteHero(hero) {
        this.nestService.deleteHero(hero).subscribe(() => this.getHeroes());
    }
    addHero(heroName) {
        this.nestService.addHero(heroName).subscribe(() => {
            this.getHeroes();
        });
    }
    addHeroModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _add_heroes_add_heroes_page__WEBPACK_IMPORTED_MODULE_4__.AddHeroesPage,
            });
            modal.onDidDismiss().then(() => this.getHeroes());
            return yield modal.present();
        });
    }
    p() {
        this.visible = !this.visible;
        console.log(this.visible);
    }
};
HeroesPage.ctorParameters = () => [
    { type: _shared_nest_service_nest_service_service__WEBPACK_IMPORTED_MODULE_3__.NestService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
HeroesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-heroes',
        template: _C_Users_Usuario_projects_alten1_heroes_ionic_node_modules_ngtools_webpack_src_loaders_direct_resource_js_heroes_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('heroState', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('* => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.useAnimation)(angular_bounce__WEBPACK_IMPORTED_MODULE_2__.BOUNCE_IN)]),
                // transition('active => inactive', [useAnimation(BOUNCE_OUT)]),
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slideInOut', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateY(-100%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('200ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateY(0%)' })),
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('200ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateY(-100%)' })),
                ]),
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('flyInOut', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateX(0)' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateX(-100%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)(1000),
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('* => void', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)(1000, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateX(100%)' })),
                ]),
            ]),
        ],
        styles: [_heroes_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeroesPage);



/***/ }),

/***/ 4806:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/heroes/add-heroes/add-heroes.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Add hero</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"addHeroForm\" (ngSubmit)=\"onSubmit()\">\n    <ion-item>\n      <ion-input\n        autocapitalize\n        inputmode=\"text\"\n        formControlName=\"hero\"\n        placeholder=\"Name of the new hero\"\n      ></ion-input>\n    </ion-item>\n  </form>\n  <ion-grid expand=\"full\"\n    ><ion-row\n      ><ion-col\n        ><ion-button\n          color=\"primary\"\n          class=\"btn btn-success\"\n          type=\"submit\"\n          expand=\"full\"\n          [disabled]=\"addHeroForm.invalid\"\n          (click)=\"onSubmit()\"\n        >\n          Submit\n        </ion-button></ion-col\n      ><ion-col\n        ><ion-button\n          color=\"primary\"\n          class=\"btn btn-success\"\n          type=\"submit\"\n          expand=\"full\"\n          color=\"danger\"\n          (click)=\"goBack()\"\n        >\n          Cancel\n        </ion-button></ion-col\n      ></ion-row\n    ></ion-grid\n  >\n</ion-content>\n");

/***/ }),

/***/ 9054:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/heroes/heroes.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Heroes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding>\n      <div @flyInOut *ngFor=\"let hero of heroes\">\n        <ion-item [routerLink]=\"['../hero-details', hero.id]\">\n          {{hero.name}}\n        </ion-item>\n\n        <ion-item-options>\n          <ion-item-option color=\"danger\" (click)=\"deleteHero(hero)\">\n            <ion-icon slot=\"end\" name=\"archive\"></ion-icon>\n            Delete\n          </ion-item-option>\n        </ion-item-options>\n      </div>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"addHeroModal()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ 590:
/*!********************************************************!*\
  !*** ./src/app/heroes/add-heroes/add-heroes.page.scss ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtaGVyb2VzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 1195:
/*!*****************************************!*\
  !*** ./src/app/heroes/heroes.page.scss ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZXJvZXMucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_heroes_heroes_module_ts.js.map