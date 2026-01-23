"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserMethods = void 0;
var BrowserMethods = /** @class */ (function () {
    function BrowserMethods() {
        this.browserName = "Opera";
        this.browserVersion = "140";
    }
    BrowserMethods.prototype.openURL = function () {
        console.log("Inside openURL Method");
        console.log(this.browserName);
        console.log(this.browserVersion);
    };
    BrowserMethods.prototype.closeBrowser = function () {
        console.log("Inside closeBrowser Method");
    };
    BrowserMethods.prototype.navigateBack = function () {
        console.log("Inside navigateBack Method");
    };
    return BrowserMethods;
}());
exports.BrowserMethods = BrowserMethods;
var browserObject = new BrowserMethods();
//Call the Parent Class Methods from BrowserSuperclass Object
browserObject.openURL();
browserObject.closeBrowser();
browserObject.navigateBack();
