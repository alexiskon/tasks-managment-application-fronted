(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alexis\Desktop\myapps\nodeApp\nodeApp-frontend\nodeapp\src\main.ts */"zUnb");


/***/ }),

/***/ "8O6I":
/*!*************************************************************!*\
  !*** ./src/app/feutured/signuppage/signuppage.component.ts ***!
  \*************************************************************/
/*! exports provided: SignuppageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignuppageComponent", function() { return SignuppageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_services_signupservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-services/signupservice.service */ "wn4y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SignuppageComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignuppageComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignuppageComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignuppageComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 8 characters!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignuppageComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignuppageComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 8 characters!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignuppageComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wrong password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [".."]; };
class SignuppageComponent {
    constructor(fb, signup, router) {
        this.fb = fb;
        this.signup = signup;
        this.router = router;
        this.submitted = false;
        this.matchedPassword = true;
    }
    ngOnInit() {
        this.signupForm = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            confirmPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]]
        });
    }
    submitSignup() {
        this.submitted = true;
        if (this.signupForm.controls.confirmPassword.value === this.signupForm.controls.password.value) {
            this.matchedPassword = true;
        }
        if (this.signupForm.invalid || this.matchedPassword === false) {
            return;
        }
        else {
            //email already exists error handle
            let credentials = this.signupForm.value;
            this.signup.signupUser(credentials).subscribe(value => {
                localStorage.setItem('userid', value.user._id);
                localStorage.setItem('token', value.token);
                // console.log(value.token, value, value.user._id, value.user.name)
                this.router.navigate(['home']);
            });
        }
    }
}
SignuppageComponent.ɵfac = function SignuppageComponent_Factory(t) { return new (t || SignuppageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_services_signupservice_service__WEBPACK_IMPORTED_MODULE_2__["SignupserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignuppageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignuppageComponent, selectors: [["app-signuppage"]], decls: 37, vars: 10, consts: [[1, "container"], [1, "signupForm", 3, "formGroup", "submit"], [1, "row"], [1, "col-12"], ["id", "header", 1, "font-weight-bold"], [1, "form-group"], ["for", "name"], ["class", "invalid", 4, "ngIf"], ["type", "text", "formControlName", "name", "id", "inputName", "aria-describedby", "name", "placeholder", "Enter your name", 1, "form-control"], ["for", "inputEmail1"], ["type", "email", "formControlName", "email", "id", "inputEmail1", "aria-describedby", "email", "placeholder", "Enter email", 1, "form-control"], ["for", "inputPassword1"], ["type", "password", "formControlName", "password", "id", "inputPassword1", "placeholder", "Password", 1, "form-control"], ["for", "inputconfirmPassword1"], ["type", "password", "formControlName", "confirmPassword", "id", "inputconfirmPassword1", "placeholder", "Password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "submit", 1, "btn", "btn-danger", 2, "float", "right", 3, "routerLink"], [1, "invalid"]], template: function SignuppageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SignuppageComponent_Template_form_submit_1_listener() { return ctx.submitSignup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SignuppageComponent_span_9_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SignuppageComponent_span_14_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignuppageComponent_span_19_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SignuppageComponent_span_21_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Confirm password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SignuppageComponent_span_25_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SignuppageComponent_span_27_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SignuppageComponent_span_31_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls.name.invalid && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls.email.invalid && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls.password.invalid && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.signupForm.get("password").errors == null ? null : ctx.signupForm.get("password").errors.minlength) && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls.password.invalid && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.signupForm.get("confirmPassword").errors == null ? null : ctx.signupForm.get("confirmPassword").errors.minlength) && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.matchedPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".conteiner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.signupForm[_ngcontent-%COMP%] {\n  max-height: 65%;\n  overflow-y: auto;\n  overflow-x: auto;\n  width: auto;\n  border: 1px solid black;\n  padding: 50px;\n  background-color: #e4e4e4;\n  border-radius: 10px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.invalid[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: 10px;\n}\n\n#header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWdudXBwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJzaWdudXBwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2lnbnVwRm9ybSB7XHJcbiAgbWF4LWhlaWdodDogNjUlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5pbnZhbGlkIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4jaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignuppageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signuppage',
                templateUrl: './signuppage.component.html',
                styleUrls: ['./signuppage.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _user_services_signupservice_service__WEBPACK_IMPORTED_MODULE_2__["SignupserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "AJ2y":
/*!****************************************************************!*\
  !*** ./src/app/feutured/user-services/loginservice.service.ts ***!
  \****************************************************************/
/*! exports provided: LoginserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginserviceService", function() { return LoginserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class LoginserviceService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.url = 'https://sleepy-fjord-54959.herokuapp.com/users/login';
    }
    loginUser(credentials) {
        return this.http.post(this.url, credentials, { observe: 'response' });
    }
}
LoginserviceService.ɵfac = function LoginserviceService_Factory(t) { return new (t || LoginserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginserviceService, factory: LoginserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BJuk":
/*!*********************************************************!*\
  !*** ./src/app/feutured/taskform/taskform.component.ts ***!
  \*********************************************************/
/*! exports provided: TaskformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskformComponent", function() { return TaskformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _task_services_createtask_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task-services/createtask.service */ "l1N9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _task_services_gettaskbyid_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task-services/gettaskbyid.service */ "rygy");
/* harmony import */ var _task_services_updatetask_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task-services/updatetask.service */ "sdUr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function TaskformComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskformComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskformComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskformComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [".."]; };
class TaskformComponent {
    constructor(fb, createtasks, router, aroute, gettask, updatetask) {
        this.fb = fb;
        this.createtasks = createtasks;
        this.router = router;
        this.aroute = aroute;
        this.gettask = gettask;
        this.updatetask = updatetask;
        this.submitted = false;
        this.editId = "";
        this.editBtn = false;
        this.tasksForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"],
            projectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"],
            completed: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"],
            colaborators: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"],
            estimatedTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]
        });
    }
    ngOnInit() {
        // if (this.aroute.queryParamMap.subscribe(value => {
        //     this.editId = value.id
        // })) {
        //   this.editId = this.aroute.snapshot.queryParams.get('id');
        //   console.log(this.editId)
        // } else {
        this.aroute.queryParamMap.subscribe(value => {
            this.editId = value.get('id');
        });
        if (!(this.editId === null)) {
            this.editBtn = true;
            console.log(this.editId);
            this.gettask.taskId(this.editId).subscribe(value => {
                this.tasksForm = this.fb.group({
                    description: [value.description, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    projectName: [value.projectName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    completed: [value.completed],
                    colaborators: [value.colaborators],
                    estimatedTime: [value.estimatedTime]
                });
            });
        }
        else {
            this.tasksForm = this.fb.group({
                description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                projectName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                completed: [false],
                colaborators: [null],
                estimatedTime: [null]
            });
        }
    }
    submitTask() {
        if (!this.tasksForm.invalid) {
            this.submitted = true;
            this.tasks = this.tasksForm.value;
            // console.log(this.tasks.completed, this.submitted)
            if (this.editBtn) {
                this.updatetask.updateTasks(this.editId, this.tasks).subscribe(value => {
                    this.router.navigate(["home"], { queryParams: { id: value._id } });
                });
            }
            else {
                this.createtasks.createTask(this.tasks).subscribe(value => {
                    this.router.navigate(["home"], { queryParams: { id: value._id } });
                });
            }
        }
    }
}
TaskformComponent.ɵfac = function TaskformComponent_Factory(t) { return new (t || TaskformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_services_createtask_service__WEBPACK_IMPORTED_MODULE_2__["CreatetaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_services_gettaskbyid_service__WEBPACK_IMPORTED_MODULE_4__["GettaskbyidService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_services_updatetask_service__WEBPACK_IMPORTED_MODULE_5__["UpdatetaskService"])); };
TaskformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskformComponent, selectors: [["app-taskform"]], decls: 42, vars: 7, consts: [[1, "container"], [1, "tasksForm", 3, "formGroup", "submit"], [1, "row"], [1, "col-12"], ["id", "header", 1, "font-weight-bold"], [1, "form-group"], ["for", "description"], ["style", "color: red;", 4, "ngIf"], ["type", "text", "formControlName", "description", "id", "description", "aria-describedby", "description", 1, "form-control"], ["class", "invalid", 4, "ngIf"], ["for", "projectName"], ["type", "text", "formControlName", "projectName", "id", "projectName", "aria-describedby", "projectName", 1, "form-control"], ["for", "completed"], ["formControlName", "completed", "name", "completed", 1, "form-control"], ["ng-value", "true"], ["ng-value", "false"], ["for", "colaborators"], ["type", "text", "formControlName", "colaborators", "id", "colaborators", 1, "form-control"], ["for", "estimatedTime"], ["type", "text", "formControlName", "estimatedTime", "id", "estimatedTime", "aria-describedby", "estimatedTime", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "submit", 1, "btn", "btn-danger", 2, "float", "right", 3, "routerLink"], [2, "color", "red"], [1, "invalid"]], template: function TaskformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function TaskformComponent_Template_form_submit_1_listener() { return ctx.submitTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tasks Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TaskformComponent_span_9_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TaskformComponent_span_11_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Project name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TaskformComponent_span_15_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TaskformComponent_span_17_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Colaborators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Estimated time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.tasksForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tasksForm.controls.description.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tasksForm.controls.description.invalid && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tasksForm.controls.description.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tasksForm.controls.projectName.invalid && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".conteiner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.tasksForm[_ngcontent-%COMP%] {\n  max-height: 65%;\n  overflow-y: auto;\n  overflow-x: auto;\n  width: auto;\n  border: 1px solid black;\n  padding: 50px;\n  background-color: #e4e4e4;\n  border-radius: 10px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.invalid[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: 10px;\n}\n\n#header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YXNrZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNJLGtCQUFBO0FBQ04iLCJmaWxlIjoidGFza2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2tzRm9ybSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA2NSU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMjI4LCAyMjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnZhbGlkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgI2hlYWRlciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-taskform',
                templateUrl: './taskform.component.html',
                styleUrls: ['./taskform.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _task_services_createtask_service__WEBPACK_IMPORTED_MODULE_2__["CreatetaskService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _task_services_gettaskbyid_service__WEBPACK_IMPORTED_MODULE_4__["GettaskbyidService"] }, { type: _task_services_updatetask_service__WEBPACK_IMPORTED_MODULE_5__["UpdatetaskService"] }]; }, null); })();


/***/ }),

/***/ "EVM2":
/*!***************************************************************!*\
  !*** ./src/app/feutured/user-services/userprofile.service.ts ***!
  \***************************************************************/
/*! exports provided: UserprofileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileService", function() { return UserprofileService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






class UserprofileService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.url = 'https://sleepy-fjord-54959.herokuapp.com/users/me';
    }
    getUserProfile() {
        let token = localStorage.getItem('token');
        return this.http.get(this.url, { observe: 'response', headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', token) })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => {
            window.confirm("Login first!");
            return this.router.navigate([""]);
        }));
    }
}
UserprofileService.ɵfac = function UserprofileService_Factory(t) { return new (t || UserprofileService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UserprofileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserprofileService, factory: UserprofileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserprofileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "FxTl":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 0, consts: [[1, "page-footer", "w-100", "font-small", "bg-dark", "pt-4"], [1, "conteiner-fluid", "text-center"], [1, "footer"], [1, "footer-1"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This is a task reporting and managment app.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login or sign up to report your tasks to your team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  color: #e0ab66;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBjb2xvcjogcmdiKDIyNCwgMTcxLCAxMDIpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LjFu":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _feutured_user_services_userprofile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../feutured/user-services/userprofile.service */ "EVM2");





class AuthGuard {
    constructor(route, userProfile) {
        this.route = route;
        this.userProfile = userProfile;
    }
    //Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    canActivate(route, state) {
        return this.userProfile.getUserProfile().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((value) => {
            let userToken = localStorage.getItem('token');
            // catchError(this.handleError)
            if (userToken === value.body.token) {
                return true;
            }
            else {
                console.log(1);
                window.confirm("Login first!");
                this.route.navigate([""]);
                return false;
            }
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_feutured_user_services_userprofile_service__WEBPACK_IMPORTED_MODULE_3__["UserprofileService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _feutured_user_services_userprofile_service__WEBPACK_IMPORTED_MODULE_3__["UserprofileService"] }]; }, null); })();


/***/ }),

/***/ "MnWV":
/*!**************************************************************!*\
  !*** ./src/app/feutured/user-services/deleteuser.service.ts ***!
  \**************************************************************/
/*! exports provided: DeleteuserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteuserService", function() { return DeleteuserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class DeleteuserService {
    constructor(http) {
        this.http = http;
        this.url = 'https://sleepy-fjord-54959.herokuapp.com/users/me';
    }
    deleteUser() {
        let token = localStorage.getItem('token');
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        return this.http.delete(this.url, { observe: 'response', headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', token) });
    }
}
DeleteuserService.ɵfac = function DeleteuserService_Factory(t) { return new (t || DeleteuserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
DeleteuserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DeleteuserService, factory: DeleteuserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeleteuserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Pzna":
/*!***********************************************************************!*\
  !*** ./src/app/feutured/accountsettings/accountsettings.component.ts ***!
  \***********************************************************************/
/*! exports provided: AccountsettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsettingsComponent", function() { return AccountsettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_services_updateuser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-services/updateuser.service */ "rU+z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_services_userprofile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-services/userprofile.service */ "EVM2");
/* harmony import */ var _user_services_deleteuser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-services/deleteuser.service */ "MnWV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AccountsettingsComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(Please confim your password to continue!)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountsettingsComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 8 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountsettingsComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wrong passwords!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["home"]; };
class AccountsettingsComponent {
    constructor(fb, update, router, profile, deleteacc) {
        this.fb = fb;
        this.update = update;
        this.router = router;
        this.profile = profile;
        this.deleteacc = deleteacc;
        this.updateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"],
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"],
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"],
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]
        });
        this.submitted = false;
        this.matchedPassword = false;
        this.confirmUpdate = false;
    }
    ngOnInit() {
        this.profile.getUserProfile().subscribe(data => {
            this.updateForm = this.fb.group({
                email: [data.body.email],
                name: [data.body.name],
                password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)],
                confirmPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]
            });
        });
    }
    submitUpdate() {
        this.submitted = true;
        if ((this.updateForm.controls.confirmPassword.value || this.updateForm.controls.password.value) === null) {
            this.confirmUpdate = false;
        }
        else {
            this.confirmUpdate = true;
        }
        if (this.updateForm.controls.confirmPassword.value === this.updateForm.controls.password.value) {
            this.matchedPassword = true;
        }
        if (this.confirmUpdate && this.matchedPassword && this.updateForm.valid) {
            let credentials = this.updateForm.value;
            this.update.updateUser(credentials).subscribe(value => {
                localStorage.setItem('userid', value._id);
                localStorage.setItem('token', value.token);
                this.router.navigate(['home']);
            });
        }
        else {
            return;
        }
    }
    deleteAccount() {
        this.submitted = true;
        if ((this.updateForm.controls.confirmPassword.value || this.updateForm.controls.password.value) === null) {
            this.confirmUpdate = false;
        }
        else {
            this.confirmUpdate = true;
        }
        if (this.updateForm.controls.confirmPassword.value === this.updateForm.controls.password.value) {
            this.matchedPassword = true;
        }
        let result = window.confirm("Are you sure?");
        if (result && this.confirmUpdate && this.matchedPassword) {
            this.deleteacc.deleteUser().subscribe(data => {
                if (data.status === 200) {
                    console.log(data.status);
                    this.router.navigate([""]);
                }
            });
        }
        else {
            return;
        }
    }
}
AccountsettingsComponent.ɵfac = function AccountsettingsComponent_Factory(t) { return new (t || AccountsettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_services_updateuser_service__WEBPACK_IMPORTED_MODULE_2__["UpdateuserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_services_userprofile_service__WEBPACK_IMPORTED_MODULE_4__["UserprofileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_services_deleteuser_service__WEBPACK_IMPORTED_MODULE_5__["DeleteuserService"])); };
AccountsettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountsettingsComponent, selectors: [["app-accountsettings"]], decls: 36, vars: 6, consts: [[1, "container"], [1, "updateForm", 3, "formGroup", "submit"], [1, "row"], ["id", "deletebtn", "type", "button", 1, "btn", "btn-danger", "ml-auto", 3, "click"], [1, "col-12"], ["id", "header", 1, "font-weight-bold"], ["class", "invalid", 4, "ngIf"], [1, "form-group"], ["for", "name"], ["type", "text", "formControlName", "name", "id", "inputName", "aria-describedby", "name", "placeholder", "Enter your name", 1, "form-control"], ["for", "inputEmail1"], ["type", "email", "formControlName", "email", "id", "inputEmail1", "aria-describedby", "email", "placeholder", "Enter email", 1, "form-control"], ["for", "inputPassword1"], ["type", "password", "formControlName", "password", "id", "inputPassword1", "placeholder", "Password", 1, "form-control"], ["for", "inputconfirmPassword1"], ["type", "password", "formControlName", "confirmPassword", "id", "inputconfirmPassword1", "placeholder", "Password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "submit", 1, "btn", "btn-danger", 2, "float", "right", 3, "routerLink"], [1, "invalid"]], template: function AccountsettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AccountsettingsComponent_Template_form_submit_1_listener() { return ctx.submitUpdate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountsettingsComponent_Template_button_click_3_listener() { return ctx.deleteAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Update user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AccountsettingsComponent_span_9_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Confirm password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AccountsettingsComponent_span_27_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AccountsettingsComponent_span_28_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.confirmUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateForm.controls.password.invalid || ctx.updateForm.controls.confirmPassword.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && !ctx.matchedPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".conteiner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#deletebtn[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.updateForm[_ngcontent-%COMP%] {\n  max-height: 65%;\n  overflow-y: auto;\n  overflow-x: auto;\n  width: auto;\n  border: 1px solid black;\n  padding: 50px;\n  background-color: #e4e4e4;\n  border-radius: 10px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.invalid[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhY2NvdW50c2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUdGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBR0YiLCJmaWxlIjoiYWNjb3VudHNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNkZWxldGVidG4ge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4udXBkYXRlRm9ybSB7XHJcbiAgbWF4LWhlaWdodDogNjUlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5pbnZhbGlkIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4vLyAjaGVhZGVyIHtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountsettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accountsettings',
                templateUrl: './accountsettings.component.html',
                styleUrls: ['./accountsettings.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _user_services_updateuser_service__WEBPACK_IMPORTED_MODULE_2__["UpdateuserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _user_services_userprofile_service__WEBPACK_IMPORTED_MODULE_4__["UserprofileService"] }, { type: _user_services_deleteuser_service__WEBPACK_IMPORTED_MODULE_5__["DeleteuserService"] }]; }, null); })();


/***/ }),

/***/ "R2Se":
/*!*************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_feutured_user_services_logout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/feutured/user-services/logout.service */ "UYCJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["home"]; };
const _c1 = function () { return ["home/taskform"]; };
const _c2 = function () { return ["account"]; };
class NavbarComponent {
    constructor(logout, router) {
        this.logout = logout;
        this.router = router;
    }
    ngOnInit() {
    }
    Logout() {
        this.logout.logout();
        this.router.navigate([""]);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_feutured_user_services_logout_service__WEBPACK_IMPORTED_MODULE_1__["LogoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 37, vars: 12, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [2, "color", "rgb(224, 171, 102)"], ["id", "navbarNav", 1, "navbar"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "material-icons"], [1, "navbar-nav", "ml-auto", "mt-2", "mt-lg-0"], ["id", "logoutBtn", "type", "button", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "dropdown"], [1, "dropdownbtn"], [1, "dropdown-content"], [3, "routerLink"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tasks App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_19_listener() { return ctx.Logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "New task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_35_listener() { return ctx.Logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".nav-item[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  color: #b67a2c;\n}\n\n@media (max-width: 1000px) {\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (min-width: 1000px) {\n  .dropdown[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  float: right;\n  overflow: auto;\n}\n\n.dropdownbtn[_ngcontent-%COMP%] {\n  background-color: #b67a2c;\n  border-radius: 20px;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  overflow: auto;\n  background-color: #b67a2c;\n  border-radius: 20px;\n  padding: 10px;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  transition-duration: 0.5s;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #525252;\n  border-radius: 10px;\n}\n\n#logoutBtn[_ngcontent-%COMP%] {\n  padding: auto;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFFRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUFGRjs7QUFJQTtFQUNJLGNBQUE7RUFFQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksYUFBQTtBQUZKOztBQUlBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBREYiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5uYXYtaXRlbSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4XHJcbn1cclxuLm1hdGVyaWFsLWljb25zIHtcclxuICBjb2xvcjogcmdiKDE4MiwgMTIyLCA0NCk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICBuYXYgdWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAuZHJvcGRvd24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uZHJvcGRvd25idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODIsIDEyMiwgNDQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCAxMjIsIDQ0KTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IGxpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG59XHJcbi5kcm9wZG93bi1jb250ZW50IGxpIGEge1xyXG4gICAgY29sb3I6IHJnYig4MiwgODIsIDgyKTtcclxuICAgIC8vIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIFxyXG59XHJcbiNsb2dvdXRCdG4ge1xyXG4gICAgcGFkZGluZzogYXV0bztcclxufVxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgLy8gb3BhY2l0eTogMTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: src_app_feutured_user_services_logout_service__WEBPACK_IMPORTED_MODULE_1__["LogoutService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/navbar/navbar.component */ "R2Se");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/footer/footer.component */ "FxTl");





class AppComponent {
    constructor() {
        this.title = 'nodeapp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "UYCJ":
/*!**********************************************************!*\
  !*** ./src/app/feutured/user-services/logout.service.ts ***!
  \**********************************************************/
/*! exports provided: LogoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutService", function() { return LogoutService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class LogoutService {
    constructor(http) {
        this.http = http;
        this.url = 'https://sleepy-fjord-54959.herokuapp.com/users/logout';
    }
    logout() {
        let token = localStorage.getItem('token');
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        return this.http.post(this.url, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', token) });
    }
}
LogoutService.ɵfac = function LogoutService_Factory(t) { return new (t || LogoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
LogoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LogoutService, factory: LogoutService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LogoutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Us15":
/*!*******************************************************!*\
  !*** ./src/app/feutured/mathome/mathome.component.ts ***!
  \*******************************************************/
/*! exports provided: MathomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathomeComponent", function() { return MathomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _task_services_gettasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task-services/gettasks.service */ "mAvD");
/* harmony import */ var _task_services_deletetask_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task-services/deletetask.service */ "cD2O");
/* harmony import */ var _task_services_gettaskbyid_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../task-services/gettaskbyid.service */ "rygy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");














function MathomeComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MathomeComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.description, " ");
} }
function MathomeComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Project Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MathomeComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.projectName, " ");
} }
function MathomeComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MathomeComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.completed, " ");
} }
function MathomeComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Estimated time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MathomeComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.estimatedTime, " ");
} }
function MathomeComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " colaborators ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MathomeComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r20.colaborators, " ");
} }
function MathomeComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Created ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MathomeComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r21.created, "dd/MM/yyyy hh:mm:ss"), " ");
} }
function MathomeComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MathomeComponent_mat_cell_23_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathomeComponent_mat_cell_23_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const row_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.editTask(row_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathomeComponent_mat_cell_23_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const row_r22 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.deleteTask(row_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MathomeComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
function MathomeComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class MathomeComponent {
    constructor(gettasks, del, getId, router, aroute, gettaskbyid) {
        this.gettasks = gettasks;
        this.del = del;
        this.getId = getId;
        this.router = router;
        this.aroute = aroute;
        this.gettaskbyid = gettaskbyid;
        this.TaskData = [];
        this.editId = "";
        this.displayedColumns = ['description', 'projectName', 'completed', 'estimatedTime', 'colaborators', 'created', 'actions'];
        // dataSource = this.TaskData
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.gettasks.getTasks().subscribe(value => {
            // console.log(value)
            this.TaskData = value;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.TaskData);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            // console.log(this.TaskData)
            // console.log(this.dataSource)
        });
    }
    editTask(item) {
        this.getId.taskId(item._id).subscribe(() => {
            this.router.navigate(["home/taskform"], { queryParams: { id: item._id } });
        });
    }
    deleteTask(item) {
        console.log(item);
        let result = window.confirm("Are you sure?");
        if (result) {
            this.TaskData = [];
            this.del.delTask(item._id).subscribe();
            this.gettasks.getTasks().subscribe(value => {
                this.TaskData = value;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.TaskData);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
                // this.router.onSameUrlNavigation = 'reload';
                window.location.reload();
            });
        }
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
}
MathomeComponent.ɵfac = function MathomeComponent_Factory(t) { return new (t || MathomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_services_gettasks_service__WEBPACK_IMPORTED_MODULE_4__["GettasksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_services_deletetask_service__WEBPACK_IMPORTED_MODULE_5__["DeletetaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_services_gettaskbyid_service__WEBPACK_IMPORTED_MODULE_6__["GettaskbyidService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_services_gettaskbyid_service__WEBPACK_IMPORTED_MODULE_6__["GettaskbyidService"])); };
MathomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MathomeComponent, selectors: [["app-mathome"]], viewQuery: function MathomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 27, vars: 7, consts: [[1, "container"], ["matInput", "", "placeholder", "Filter", 1, "search", 3, "keyup"], ["matSort", "", "id", "table", "mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "description"], ["mat-header-cell", "", "mat-sort-header", "", "class", "headers", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "projectName"], ["matColumnDef", "completed"], ["matColumnDef", "estimatedTime"], ["matColumnDef", "colaborators"], ["matColumnDef", "created"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "headers", 4, "matHeaderCellDef"], [4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["id", "page", 3, "length", "pageSize", "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", 1, "headers"], ["mat-cell", ""], ["mat-header-cell", "", 1, "headers"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function MathomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function MathomeComponent_Template_input_keyup_1_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MathomeComponent_th_4_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MathomeComponent_td_5_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MathomeComponent_th_7_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MathomeComponent_td_8_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MathomeComponent_th_10_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MathomeComponent_td_11_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MathomeComponent_th_13_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MathomeComponent_td_14_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MathomeComponent_th_16_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MathomeComponent_td_17_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MathomeComponent_th_19_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MathomeComponent_td_20_Template, 3, 4, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MathomeComponent_th_22_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MathomeComponent_mat_cell_23_Template, 5, 0, "mat-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MathomeComponent_tr_24_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MathomeComponent_tr_25_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-paginator", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", 100)("pageSize", 5)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  max-height: 65%;\n  overflow-y: auto;\n  overflow-x: auto;\n  width: auto;\n  margin: auto;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.search[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: solid 5px black;\n  background-color: #b67a2c;\n  color: black;\n}\n\n#page[_ngcontent-%COMP%] {\n  width: 50%;\n  background-color: #b67a2c;\n  color: black;\n}\n\n.headers[_ngcontent-%COMP%] {\n  color: #e0ab66;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYXRob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtBQUlGOztBQUZBO0VBQ0UsWUFBQTtBQUtGIiwiZmlsZSI6Im1hdGhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXgtaGVpZ2h0OiA2NSU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbi5zZWFyY2gge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IHNvbGlkIDVweCBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCAxMjIsIDQ0KTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuI3BhZ2Uge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgMTIyLCA0NCk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5oZWFkZXJzIHtcclxuICBjb2xvcjogcmdiKDIyNCwgMTcxLCAxMDIpO1xyXG59XHJcbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MathomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mathome',
                styleUrls: ['./mathome.component.scss'],
                templateUrl: './mathome.component.html',
            }]
    }], function () { return [{ type: _task_services_gettasks_service__WEBPACK_IMPORTED_MODULE_4__["GettasksService"] }, { type: _task_services_deletetask_service__WEBPACK_IMPORTED_MODULE_5__["DeletetaskService"] }, { type: _task_services_gettaskbyid_service__WEBPACK_IMPORTED_MODULE_6__["GettaskbyidService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _task_services_gettaskbyid_service__WEBPACK_IMPORTED_MODULE_6__["GettaskbyidService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/app-routing.module */ "vY5A");
/* harmony import */ var _src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/app.component */ "Sy1n");
/* harmony import */ var _src_app_feutured_feutured_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/feutured/feutured.module */ "xffg");
/* harmony import */ var _src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _src_app_core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/app/core/core.module */ "pKmL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _src_app_feutured_feutured_module__WEBPACK_IMPORTED_MODULE_4__["FeuturedModule"],
            _src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _src_app_core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["NoopAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _src_app_feutured_feutured_module__WEBPACK_IMPORTED_MODULE_4__["FeuturedModule"],
        _src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _src_app_core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["NoopAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]], exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _src_app_feutured_feutured_module__WEBPACK_IMPORTED_MODULE_4__["FeuturedModule"],
                    _src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _src_app_core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["NoopAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
                ],
                exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
                providers: [],
                bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cD2O":
/*!**************************************************************!*\
  !*** ./src/app/feutured/task-services/deletetask.service.ts ***!
  \**************************************************************/
/*! exports provided: DeletetaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletetaskService", function() { return DeletetaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class DeletetaskService {
    constructor(http) {
        this.http = http;
        this.url = 'https://sleepy-fjord-54959.herokuapp.com/tasks/';
    }
    delTask(id) {
        return this.http.delete(this.url + id);
    }
}
DeletetaskService.ɵfac = function DeletetaskService_Factory(t) { return new (t || DeletetaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DeletetaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DeletetaskService, factory: DeletetaskService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeletetaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "l1N9":
/*!**************************************************************!*\
  !*** ./src/app/feutured/task-services/createtask.service.ts ***!
  \**************************************************************/
/*! exports provided: CreatetaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatetaskService", function() { return CreatetaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CreatetaskService {
    constructor(http) {
        this.http = http;
        this.url = 'https://sleepy-fjord-54959.herokuapp.com/tasks';
    }
    createTask(tasks) {
        return this.http.post(this.url, tasks);
    }
}
CreatetaskService.ɵfac = function CreatetaskService_Factory(t) { return new (t || CreatetaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CreatetaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CreatetaskService, factory: CreatetaskService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatetaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "lfQ3":
/*!***********************************************************!*\
  !*** ./src/app/feutured/loginpage/loginpage.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginpageComponent", function() { return LoginpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-services/loginservice.service */ "AJ2y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_services_userprofile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-services/userprofile.service */ "EVM2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginpageComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginpageComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginpageComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wrong email or password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginpageComponent {
    constructor(fb, login, router, userProfile) {
        this.fb = fb;
        this.login = login;
        this.router = router;
        this.userProfile = userProfile;
        this.submitted = false;
    }
    ngOnInit() {
        // this.wrongCredentials = false;
        this.loginForm = this.fb.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    submitLogin() {
        this.submitted = true;
        let user = this.loginForm.value;
        this.login.loginUser(user).subscribe((data) => {
            // console.log(1)
            // console.log(data.body.user._id, data.body.token)
            if (data.status === 200) {
                localStorage.setItem('userid', data.body.user._id);
                localStorage.setItem('token', data.body.token);
                this.router.navigate(['home']);
            }
        }, error => {
            this.wrongCredentials = true;
            console.log(error);
        });
        console.log(2);
    }
}
LoginpageComponent.ɵfac = function LoginpageComponent_Factory(t) { return new (t || LoginpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__["LoginserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_services_userprofile_service__WEBPACK_IMPORTED_MODULE_4__["UserprofileService"])); };
LoginpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginpageComponent, selectors: [["app-loginpage"]], decls: 28, vars: 5, consts: [[1, "container"], [1, "loginForm", 3, "formGroup", "submit"], [1, "row"], [1, "col-12"], ["id", "header", 1, "font-weight-bold"], [1, "form-group"], ["for", "inputEmail1"], ["type", "email", "formControlName", "email", "id", "inputEmail1", "aria-describedby", "emailHelp", "placeholder", "Enter email", 1, "form-control"], ["class", "invalid", 4, "ngIf"], ["for", "inputPassword1"], ["type", "password", "formControlName", "password", "id", "inputPassword1", "placeholder", "Password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-dark"], [3, "routerLink"], [1, "invalid"]], template: function LoginpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginpageComponent_Template_form_submit_1_listener() { return ctx.submitLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginpageComponent_span_10_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginpageComponent_span_15_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginpageComponent_span_22_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Dont have account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.controls.email.invalid && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.controls.password.invalid && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wrongCredentials && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "signup");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".loginForm[_ngcontent-%COMP%] {\n  max-height: 65%;\n  overflow-y: auto;\n  overflow-x: auto;\n  width: auto;\n  border: 1px solid black;\n  padding: 50px;\n  background-color: #e4e4e4;\n  border-radius: 10px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.invalid[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: 10px;\n}\n\n#header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbnBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUYiLCJmaWxlIjoibG9naW5wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sb2dpbkZvcm0ge1xyXG4gIG1heC1oZWlnaHQ6IDY1JTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMjgsIDIyOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uaW52YWxpZCB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXdlaWdodDogMTBweDtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loginpage',
                templateUrl: './loginpage.component.html',
                styleUrls: ['./loginpage.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _user_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__["LoginserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _user_services_userprofile_service__WEBPACK_IMPORTED_MODULE_4__["UserprofileService"] }]; }, null); })();


/***/ }),

/***/ "mAvD":
/*!************************************************************!*\
  !*** ./src/app/feutured/task-services/gettasks.service.ts ***!
  \************************************************************/
/*! exports provided: GettasksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettasksService", function() { return GettasksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class GettasksService {
    constructor(http) {
        this.http = http;
        this.url = 'https://sleepy-fjord-54959.herokuapp.com/tasks';
    }
    getTasks() {
        return this.http.get(this.url);
    }
}
GettasksService.ɵfac = function GettasksService_Factory(t) { return new (t || GettasksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GettasksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GettasksService, factory: GettasksService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GettasksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "R2Se");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "FxTl");







class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
                ],
                exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "rU+z":
/*!**************************************************************!*\
  !*** ./src/app/feutured/user-services/updateuser.service.ts ***!
  \**************************************************************/
/*! exports provided: UpdateuserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateuserService", function() { return UpdateuserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class UpdateuserService {
    constructor(http) {
        this.http = http;
        this.url = 'https://sleepy-fjord-54959.herokuapp.com/users/me';
    }
    updateUser(credentials) {
        let token = localStorage.getItem('token');
        console.log(token);
        return this.http.patch(this.url, credentials, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', token) });
    }
}
UpdateuserService.ɵfac = function UpdateuserService_Factory(t) { return new (t || UpdateuserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
UpdateuserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateuserService, factory: UpdateuserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UpdateuserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rygy":
/*!***************************************************************!*\
  !*** ./src/app/feutured/task-services/gettaskbyid.service.ts ***!
  \***************************************************************/
/*! exports provided: GettaskbyidService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettaskbyidService", function() { return GettaskbyidService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class GettaskbyidService {
    constructor(http) {
        this.http = http;
        this.url = 'https://sleepy-fjord-54959.herokuapp.com/tasks/';
    }
    taskId(id) {
        return this.http.get(this.url + id);
    }
}
GettaskbyidService.ɵfac = function GettaskbyidService_Factory(t) { return new (t || GettaskbyidService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GettaskbyidService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GettaskbyidService, factory: GettaskbyidService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GettaskbyidService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "sdUr":
/*!**************************************************************!*\
  !*** ./src/app/feutured/task-services/updatetask.service.ts ***!
  \**************************************************************/
/*! exports provided: UpdatetaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatetaskService", function() { return UpdatetaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UpdatetaskService {
    constructor(http) {
        this.http = http;
        this.url = 'https://sleepy-fjord-54959.herokuapp.com/tasks/';
    }
    updateTasks(id, credentials) {
        return this.http.patch(this.url + id, credentials);
    }
}
UpdatetaskService.ɵfac = function UpdatetaskService_Factory(t) { return new (t || UpdatetaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UpdatetaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UpdatetaskService, factory: UpdatetaskService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdatetaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _feutured_accountsettings_accountsettings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feutured/accountsettings/accountsettings.component */ "Pzna");
/* harmony import */ var _feutured_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feutured/loginpage/loginpage.component */ "lfQ3");
/* harmony import */ var _feutured_mathome_mathome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feutured/mathome/mathome.component */ "Us15");
/* harmony import */ var _feutured_signuppage_signuppage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feutured/signuppage/signuppage.component */ "8O6I");
/* harmony import */ var _feutured_taskform_taskform_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feutured/taskform/taskform.component */ "BJuk");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "LjFu");










const routes = [{
        path: "", component: _feutured_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_3__["LoginpageComponent"]
    },
    {
        path: "signup", component: _feutured_signuppage_signuppage_component__WEBPACK_IMPORTED_MODULE_5__["SignuppageComponent"]
    },
    {
        path: "home", component: _feutured_mathome_mathome_component__WEBPACK_IMPORTED_MODULE_4__["MathomeComponent"], canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: "home/taskform", component: _feutured_taskform_taskform_component__WEBPACK_IMPORTED_MODULE_6__["TaskformComponent"], canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: "account", component: _feutured_accountsettings_accountsettings_component__WEBPACK_IMPORTED_MODULE_2__["AccountsettingsComponent"], canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wn4y":
/*!*****************************************************************!*\
  !*** ./src/app/feutured/user-services/signupservice.service.ts ***!
  \*****************************************************************/
/*! exports provided: SignupserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupserviceService", function() { return SignupserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class SignupserviceService {
    constructor(http) {
        this.http = http;
        this.url = 'https://sleepy-fjord-54959.herokuapp.com/users';
    }
    signupUser(credentials) {
        return this.http.post(this.url, credentials);
    }
}
SignupserviceService.ɵfac = function SignupserviceService_Factory(t) { return new (t || SignupserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SignupserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignupserviceService, factory: SignupserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "xffg":
/*!*********************************************!*\
  !*** ./src/app/feutured/feutured.module.ts ***!
  \*********************************************/
/*! exports provided: FeuturedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeuturedModule", function() { return FeuturedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginpage/loginpage.component */ "lfQ3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signuppage_signuppage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signuppage/signuppage.component */ "8O6I");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _accountsettings_accountsettings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accountsettings/accountsettings.component */ "Pzna");
/* harmony import */ var _taskform_taskform_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./taskform/taskform.component */ "BJuk");
/* harmony import */ var _mathome_mathome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mathome/mathome.component */ "Us15");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
















class FeuturedModule {
}
FeuturedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeuturedModule });
FeuturedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FeuturedModule_Factory(t) { return new (t || FeuturedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"]
        ], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeuturedModule, { declarations: [_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_2__["LoginpageComponent"], _signuppage_signuppage_component__WEBPACK_IMPORTED_MODULE_5__["SignuppageComponent"], _accountsettings_accountsettings_component__WEBPACK_IMPORTED_MODULE_7__["AccountsettingsComponent"], _taskform_taskform_component__WEBPACK_IMPORTED_MODULE_8__["TaskformComponent"], _mathome_mathome_component__WEBPACK_IMPORTED_MODULE_9__["MathomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"]], exports: [_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_2__["LoginpageComponent"], _signuppage_signuppage_component__WEBPACK_IMPORTED_MODULE_5__["SignuppageComponent"], _accountsettings_accountsettings_component__WEBPACK_IMPORTED_MODULE_7__["AccountsettingsComponent"], _taskform_taskform_component__WEBPACK_IMPORTED_MODULE_8__["TaskformComponent"], _mathome_mathome_component__WEBPACK_IMPORTED_MODULE_9__["MathomeComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeuturedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_2__["LoginpageComponent"], _signuppage_signuppage_component__WEBPACK_IMPORTED_MODULE_5__["SignuppageComponent"], _accountsettings_accountsettings_component__WEBPACK_IMPORTED_MODULE_7__["AccountsettingsComponent"], _taskform_taskform_component__WEBPACK_IMPORTED_MODULE_8__["TaskformComponent"], _mathome_mathome_component__WEBPACK_IMPORTED_MODULE_9__["MathomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"]
                ],
                exports: [_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_2__["LoginpageComponent"], _signuppage_signuppage_component__WEBPACK_IMPORTED_MODULE_5__["SignuppageComponent"], _accountsettings_accountsettings_component__WEBPACK_IMPORTED_MODULE_7__["AccountsettingsComponent"], _taskform_taskform_component__WEBPACK_IMPORTED_MODULE_8__["TaskformComponent"], _mathome_mathome_component__WEBPACK_IMPORTED_MODULE_9__["MathomeComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map