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
exports.SafariSubclass = void 0;
var BrowserSuperclass_1 = require("./BrowserSuperclass");
var SafariSubclass = /** @class */ (function (_super) {
    __extends(SafariSubclass, _super);
    function SafariSubclass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafariSubclass.prototype.readerMode = function () {
        console.log("Inside readerMode Method");
        console.log(this.browserName);
        console.log(this.browserVersion);
    };
    SafariSubclass.prototype.fullScreenMode = function () {
        console.log("Inside fullScreenMode Method");
    };
    return SafariSubclass;
}(BrowserSuperclass_1.BrowserMethods));
exports.SafariSubclass = SafariSubclass;
var safariObject = new SafariSubclass();
//Call the Parent Class Methods from SafariSubclass Object
safariObject.openURL();
safariObject.closeBrowser();
safariObject.navigateBack();
//Call the SafariSubclass Class Methods from SafariSubclass Object
safariObject.readerMode();
safariObject.fullScreenMode();
