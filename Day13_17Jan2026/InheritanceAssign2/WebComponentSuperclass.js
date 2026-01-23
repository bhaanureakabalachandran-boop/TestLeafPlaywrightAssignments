"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebComponentMethods = void 0;
var WebComponentMethods = /** @class */ (function () {
    function WebComponentMethods(selector) {
        this.selector = selector;
    }
    WebComponentMethods.prototype.click = function () {
        console.log("Inside CLICK Method");
        console.log("".concat(this.selector));
    };
    WebComponentMethods.prototype.focus = function () {
        console.log("Inside FOCUS Method");
    };
    return WebComponentMethods;
}());
exports.WebComponentMethods = WebComponentMethods;
//let webcomponentObject = new WebComponentMethods("Im a Selector from Parent Class");
//Call the Parent Class Methods from WebComponentSuperclass Object
//webcomponentObject.click();
//webcomponentObject.focus();
