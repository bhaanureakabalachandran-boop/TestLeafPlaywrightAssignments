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
exports.ChromeSubclass = void 0;
var BrowserSuperclass_1 = require("./BrowserSuperclass");
var ChromeSubclass = /** @class */ (function (_super) {
    __extends(ChromeSubclass, _super);
    function ChromeSubclass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChromeSubclass.prototype.openIncognito = function () {
        console.log("Inside openIncognito Method");
        console.log(this.browserName);
        console.log(this.browserVersion);
    };
    ChromeSubclass.prototype.clearCache = function () {
        console.log("Inside clearCache Method");
    };
    return ChromeSubclass;
}(BrowserSuperclass_1.BrowserMethods));
exports.ChromeSubclass = ChromeSubclass;
var chromeObject = new ChromeSubclass();
//Call the Parent Class Methods from ChromeSubclass Object
chromeObject.openURL();
chromeObject.closeBrowser();
chromeObject.navigateBack();
//Call the ChromeSubclass Class Methods from ChromeSubclass Object
chromeObject.openIncognito();
chromeObject.clearCache();
