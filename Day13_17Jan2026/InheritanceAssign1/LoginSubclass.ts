import { TestDataMethods } from "./TestDataSuperclass";

export class LoginSubclass extends TestDataMethods{    
    public enterUsername(){
        console.log("Inside enterUsername Method");
    }
     
    public enterPassword(){
        console.log("Inside enterPassword Method");
    }    
}

let loginObject = new LoginSubclass();
//Call the Parent Class Methods from LoginSubclass Object
//loginObject.enterCredentials();
//loginObject.navigateToHomePage();

//Call the LoginSubclass Class Methods from LoginSubclass Object
loginObject.enterUsername();
loginObject.enterPassword();