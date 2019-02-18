var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import * as $ from 'jquery';
import 'intl-tel-input';
import 'intl-tel-input/build/js/utils';
var Ng2TelInput = /** @class */ (function () {
    function Ng2TelInput(el) {
        this.el = el;
        this.hasError = new EventEmitter();
        this.ng2TelOutput = new EventEmitter();
        this.countryChange = new EventEmitter();
        this.intlTelInputObject = new EventEmitter();
    }
    Ng2TelInput.prototype.ngOnInit = function () {
        var _this = this;
        this.ngTelInput = $(this.el.nativeElement);
        if (this.ng2TelInputOptions) {
            this.ngTelInput.intlTelInput(this.ng2TelInputOptions);
        }
        else {
            this.ngTelInput.intlTelInput();
        }
        this.ngTelInput.on("countrychange", function (e, countryData) {
            _this.countryChange.emit(countryData);
        });
        this.intlTelInputObject.emit(this.ngTelInput);
    };
    Ng2TelInput.prototype.onKeyup = function () {
        var isInputValid = this.isInputValid();
        if (isInputValid) {
            var telOutput = this.ngTelInput.intlTelInput("getNumber");
            this.hasError.emit(isInputValid);
            this.ng2TelOutput.emit(telOutput);
        }
        else {
            this.hasError.emit(isInputValid);
        }
    };
    Ng2TelInput.prototype.isInputValid = function () {
        return this.ngTelInput.intlTelInput('isValidNumber') ? true : false;
    };
    Ng2TelInput.prototype.setCountry = function (country) {
        this.ngTelInput.intlTelInput('setCountry', country);
    };
    __decorate([
        Input('ng2TelInputOptions'),
        __metadata("design:type", Object)
    ], Ng2TelInput.prototype, "ng2TelInputOptions", void 0);
    __decorate([
        Output('hasError'),
        __metadata("design:type", EventEmitter)
    ], Ng2TelInput.prototype, "hasError", void 0);
    __decorate([
        Output('ng2TelOutput'),
        __metadata("design:type", EventEmitter)
    ], Ng2TelInput.prototype, "ng2TelOutput", void 0);
    __decorate([
        Output('countryChange'),
        __metadata("design:type", EventEmitter)
    ], Ng2TelInput.prototype, "countryChange", void 0);
    __decorate([
        Output('intlTelInputObject'),
        __metadata("design:type", EventEmitter)
    ], Ng2TelInput.prototype, "intlTelInputObject", void 0);
    __decorate([
        HostListener('keyup'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Ng2TelInput.prototype, "onKeyup", null);
    Ng2TelInput = __decorate([
        Directive({
            selector: '[ng2TelInput]',
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], Ng2TelInput);
    return Ng2TelInput;
}());
export { Ng2TelInput };
//# sourceMappingURL=ng2-tel-input.js.map