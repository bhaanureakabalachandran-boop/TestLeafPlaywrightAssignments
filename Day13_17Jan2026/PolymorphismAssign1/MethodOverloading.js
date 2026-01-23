var MethodOverloading = /** @class */ (function () {
    function MethodOverloading() {
    }
    // Overload signatures
    MethodOverloading.prototype.reportStep = function (msg, status, snap) {
        console.log("Message: ".concat(msg));
        console.log("Status: ".concat(status));
        if (snap) {
            console.log('Snapshot taken');
        }
    };
    return MethodOverloading;
}());
function testComp() {
    var obj = new MethodOverloading();
    obj.reportStep("Message1", "Approved");
    obj.reportStep("Message2", "Accepted", true);
}
// Run the test
testComp();
