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
exports.LoginPageSubClass = void 0;
var BasePageOverriding_1 = require("./BasePageOverriding");
var LoginPageSubClass = /** @class */ (function (_super) {
    __extends(LoginPageSubClass, _super);
    function LoginPageSubClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginPageSubClass.prototype.performCommonTasks = function () {
        console.log("Inside PerformCommonTasks Method Overridded");
    };
    return LoginPageSubClass;
}(BasePageOverriding_1.BasePageOverriding));
exports.LoginPageSubClass = LoginPageSubClass;
var loginPageObject = new LoginPageSubClass();
//Call the Parent Class Methods from LoginPageSubClass Object
//click() method overrided and display text from child class
loginPageObject.findElement();
loginPageObject.clickElement();
loginPageObject.enterText();
loginPageObject.performCommonTasks();
