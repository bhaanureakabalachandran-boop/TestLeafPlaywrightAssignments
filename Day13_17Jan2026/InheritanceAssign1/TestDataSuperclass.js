"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestDataMethods = void 0;
var TestDataMethods = /** @class */ (function () {
    function TestDataMethods() {
    }
    TestDataMethods.prototype.enterCredentials = function () {
        console.log("Inside enterCredentials Method");
    };
    TestDataMethods.prototype.navigateToHomePage = function () {
        console.log("Inside navigateToHomePage Method");
    };
    return TestDataMethods;
}());
exports.TestDataMethods = TestDataMethods;
var testdataObject = new TestDataMethods();
//Call the Parent Class Methods from TestDataSuperclass Object
testdataObject.enterCredentials();
testdataObject.navigateToHomePage();
