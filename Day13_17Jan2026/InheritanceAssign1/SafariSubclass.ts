import { BrowserMethods } from "./BrowserSuperclass";

export class SafariSubclass extends BrowserMethods{

    public readerMode(){
        console.log("Inside readerMode Method");
        console.log(this.browserName);
        console.log(this.browserVersion);
    }
     
    public fullScreenMode(){
        console.log("Inside fullScreenMode Method");    
    }
    
}

let safariObject = new SafariSubclass();
//Call the Parent Class Methods from SafariSubclass Object
safariObject.openURL();
safariObject.closeBrowser();
safariObject.navigateBack();
//Call the SafariSubclass Class Methods from SafariSubclass Object
safariObject.readerMode();
safariObject.fullScreenMode();