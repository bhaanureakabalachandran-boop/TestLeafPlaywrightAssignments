"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePageOverriding = void 0;
var BasePageOverriding = /** @class */ (function () {
    function BasePageOverriding() {
    }
    BasePageOverriding.prototype.findElement = function () {
        console.log("Inside FindElement Method");
    };
    BasePageOverriding.prototype.clickElement = function () {
        console.log("Inside ClickElement Method");
    };
    BasePageOverriding.prototype.enterText = function () {
        console.log("Inside EnterText Method");
    };
    BasePageOverriding.prototype.performCommonTasks = function () {
        console.log("Inside PerformCommonTasks Method");
    };
    return BasePageOverriding;
}());
exports.BasePageOverriding = BasePageOverriding;
var basePageObj = new BasePageOverriding();
//Call the Parent Class Methods from BasePageOverriding Object
basePageObj.findElement();
basePageObj.clickElement();
basePageObj.enterText();
basePageObj.performCommonTasks();
