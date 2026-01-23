import { BasePageOverriding } from "./BasePageOverriding";

export class LoginPageSubClass extends BasePageOverriding{    

   public performCommonTasks(){
     console.log("Inside PerformCommonTasks Method Overridded");
     }   
    
}

let loginPageObject = new LoginPageSubClass();
//Call the Parent Class Methods from LoginPageSubClass Object
//click() method overrided and display text from child class
loginPageObject.findElement();
loginPageObject.clickElement();
loginPageObject.enterText();
loginPageObject.performCommonTasks();
