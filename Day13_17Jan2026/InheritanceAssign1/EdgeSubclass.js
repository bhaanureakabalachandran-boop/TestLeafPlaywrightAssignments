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
exports.EdgeSubclass = void 0;
var BrowserSuperclass_1 = require("./BrowserSuperclass");
var EdgeSubclass = /** @class */ (function (_super) {
    __extends(EdgeSubclass, _super);
    function EdgeSubclass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EdgeSubclass.prototype.takeSnap = function () {
        console.log("Inside takeSnap Method");
        console.log(this.browserName);
        console.log(this.browserVersion);
    };
    EdgeSubclass.prototype.clearCookies = function () {
        console.log("Inside clearCookies Method");
    };
    return EdgeSubclass;
}(BrowserSuperclass_1.BrowserMethods));
exports.EdgeSubclass = EdgeSubclass;
var edgeObject = new EdgeSubclass();
//Call the Parent Class Methods from EdgeSubclass Object
edgeObject.openURL();
edgeObject.closeBrowser();
edgeObject.navigateBack();
//Call the EdgeSubclass Class Methods from EdgeSubclass Object
edgeObject.takeSnap();
edgeObject.clearCookies();
