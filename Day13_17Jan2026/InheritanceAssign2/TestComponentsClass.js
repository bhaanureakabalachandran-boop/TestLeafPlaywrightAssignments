"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonSubclass_1 = require("./ButtonSubclass");
var TextInputSubclass_1 = require("./TextInputSubclass");
function testComponents() {
    var loginButton = new ButtonSubclass_1.ButtonSubclass('Im a Selector from TestComponent Child Class-button');
    var usernameInput = new TextInputSubclass_1.TextInputSubclass('Im a Selector from TestComponent Child Class - TextInputSubclass');
    loginButton.click();
    loginButton.focus();
    usernameInput.enterText('test_user');
}
// Run the test
testComponents();
