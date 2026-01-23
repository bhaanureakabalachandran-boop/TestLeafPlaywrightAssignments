export class TestDataMethods{
    
public enterCredentials(){
     console.log("Inside enterCredentials Method");
}

public navigateToHomePage(){
        console.log("Inside navigateToHomePage Method");
    }         
}

let testdataObject = new TestDataMethods();
//Call the Parent Class Methods from TestDataSuperclass Object
testdataObject.enterCredentials();
testdataObject.navigateToHomePage();
