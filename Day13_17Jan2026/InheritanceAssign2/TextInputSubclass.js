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
exports.TextInputSubclass = void 0;
var WebComponentSuperclass_1 = require("./WebComponentSuperclass");
var TextInputSubclass = /** @class */ (function (_super) {
    __extends(TextInputSubclass, _super);
    function TextInputSubclass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = "";
        return _this;
    }
    TextInputSubclass.prototype.enterText = function (value) {
        console.log("Inside ENTERTEXT Method");
        console.log("".concat(this.selector));
        console.log("".concat(value));
    };
    return TextInputSubclass;
}(WebComponentSuperclass_1.WebComponentMethods));
exports.TextInputSubclass = TextInputSubclass;
//let textInputObject = new TextInputSubclass("Im a Selector from Child Class - TextInputSubclass");
//Call the Parent Class Methods from TextInputSubclass Object
//click() method NOT overrided and display text from parent class,since that method is not 
//available in current subclass - TextInputSubclass
//textInputObject.click();
//textInputObject.focus();
//Call the TextInputSubclass Class Methods from TextInputSubclass Object
//textInputObject.enterText("This is a Value String in TextInputSubclass");
