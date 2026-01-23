var APIClientOverloading = /** @class */ (function () {
    function APIClientOverloading() {
    }
    // Overload signature
    APIClientOverloading.prototype.sendRequest = function (endpoint, requestBody, requestStatus) {
        console.log("Message: ".concat(endpoint));
        console.log("Status: ".concat(requestBody));
        if (requestStatus) {
            console.log('Snapshot taken');
        }
    };
    return APIClientOverloading;
}());
function APIOverloading() {
    var obj = new APIClientOverloading();
    obj.sendRequest("Message1");
    obj.sendRequest("Message3", "Accepted", true);
}
// Run the test
APIOverloading();
