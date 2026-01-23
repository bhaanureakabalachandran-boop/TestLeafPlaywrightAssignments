export class BrowserMethods{

    protected browserName: string = "Opera";
    protected browserVersion: string = "140";

public openURL(){

     console.log("Inside openURL Method");
     console.log(this.browserName);
     console.log(this.browserVersion);
}

public closeBrowser(){
        console.log("Inside closeBrowser Method");
    }
     
    public navigateBack(){
        console.log("Inside navigateBack Method");    
    }
}

let browserObject = new BrowserMethods();
//Call the Parent Class Methods from BrowserSuperclass Object
browserObject.openURL();
browserObject.closeBrowser();
browserObject.navigateBack();
