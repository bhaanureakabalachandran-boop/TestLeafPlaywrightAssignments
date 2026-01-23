"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSubclass = void 0;
var TestDataSuperclass_1 = require("./TestDataSuperclass");
var LoginSubclass = /** @class */ (function (_super) {
    __extends(LoginSubclass, _super);
    function LoginSubclass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginSubclass.prototype.enterUsername = function () {
        console.log("Inside enterUsername Method");
    };
    LoginSubclass.prototype.enterPassword = function () {
        console.log("Inside enterPassword Method");
    };
    return LoginSubclass;
}(TestDataSuperclass_1.TestDataMethods));
exports.LoginSubclass = LoginSubclass;
var loginObject = new LoginSubclass();
//Call the Parent Class Methods from LoginSubclass Object
//loginObject.enterCredentials();
//loginObject.navigateToHomePage();
//Call the LoginSubclass Class Methods from LoginSubclass Object
loginObject.enterUsername();
loginObject.enterPassword();
