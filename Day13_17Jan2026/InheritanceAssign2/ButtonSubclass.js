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
exports.ButtonSubclass = void 0;
var WebComponentSuperclass_1 = require("./WebComponentSuperclass");
var ButtonSubclass = /** @class */ (function (_super) {
    __extends(ButtonSubclass, _super);
    function ButtonSubclass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonSubclass.prototype.click = function () {
        console.log("Inside CLICK OVERRIDDEN Method");
        console.log("".concat(this.selector));
    };
    return ButtonSubclass;
}(WebComponentSuperclass_1.WebComponentMethods));
exports.ButtonSubclass = ButtonSubclass;
//let buttonObject = new ButtonSubclass("Im a Selector from Child Class - ButtonSubclass");
//Call the Parent Class Methods from ButtonSubclass Object
//click() method overrided and display text from child class
//buttonObject.click();
//buttonObject.focus();
