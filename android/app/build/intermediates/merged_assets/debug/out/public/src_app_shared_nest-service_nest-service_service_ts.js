"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_shared_nest-service_nest-service_service_ts"],{

/***/ 3790:
/*!*******************************************************************!*\
  !*** ./src/app/shared/message-service/message-service.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


let MessageService = class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
};
MessageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], MessageService);



/***/ }),

/***/ 3956:
/*!*************************************************************!*\
  !*** ./src/app/shared/nest-service/nest-service.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NestService": () => (/* binding */ NestService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 592);
/* harmony import */ var _message_service_message_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../message-service/message-service.service */ 3790);






let NestService = class NestService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.url = 'http://localhost:3000';
    }
    getHeroes() {
        return this.http.get(`${this.url}/heroes`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => this.log('fetched heroes')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getHeroes', [])));
    }
    getHeroById(heroId) {
        return this.http.get(`${this.url}/heroes/${heroId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => this.log(`fetched hero id=${heroId}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError(`getHero id=${heroId}`)));
    }
    addHero(heroName) {
        const newHero = { name: heroName };
        return this.http.post(`${this.url}/heroes/`, newHero).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => this.log(`added hero =${heroName}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('addHero')));
    }
    deleteHero(hero) {
        return this.http.delete(`${this.url}/heroes/${hero.id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => this.log(`deleted hero id=${hero.id}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('deleteHero')));
    }
    updateHero(hero) {
        return this.http.put(`${this.url}/heroes`, hero).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => this.log(`updated hero id=${hero.id}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('updateHero')));
    }
    searchHeroes(heroName) {
        if (!heroName.trim()) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([]);
        }
        return this.http.get(`${this.url}/heroes?name=${heroName}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)((x) => x.length
            ? this.log(`found heroes matching "${heroName}"`)
            : this.log(`no heroes matching "${heroName}"`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('searchHeroes', [])));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
        };
    }
    log(message) {
        this.messageService.add(`HeroService: ${message}`);
    }
};
NestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _message_service_message_service_service__WEBPACK_IMPORTED_MODULE_0__.MessageService }
];
NestService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root',
    })
], NestService);



/***/ })

}]);
//# sourceMappingURL=src_app_shared_nest-service_nest-service_service_ts.js.map