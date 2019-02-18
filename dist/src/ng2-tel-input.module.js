var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { Ng2TelInput } from './ng2-tel-input';
var Ng2TelInputModule = /** @class */ (function () {
    function Ng2TelInputModule() {
    }
    Ng2TelInputModule_1 = Ng2TelInputModule;
    Ng2TelInputModule.forRoot = function () {
        return {
            ngModule: Ng2TelInputModule_1,
            providers: []
        };
    };
    var Ng2TelInputModule_1;
    Ng2TelInputModule = Ng2TelInputModule_1 = __decorate([
        NgModule({
            declarations: [Ng2TelInput],
            exports: [Ng2TelInput]
        })
    ], Ng2TelInputModule);
    return Ng2TelInputModule;
}());
export { Ng2TelInputModule };
//# sourceMappingURL=ng2-tel-input.module.js.map