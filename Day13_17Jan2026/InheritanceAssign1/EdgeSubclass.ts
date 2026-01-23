import { BrowserMethods } from "./BrowserSuperclass";

export class EdgeSubclass extends BrowserMethods{

    public takeSnap(){
        console.log("Inside takeSnap Method");
        console.log(this.browserName);
        console.log(this.browserVersion);
    }
     
    public clearCookies(){
        console.log("Inside clearCookies Method");    
    }
    
}

let edgeObject = new EdgeSubclass();
//Call the Parent Class Methods from EdgeSubclass Object
edgeObject.openURL();
edgeObject.closeBrowser();
edgeObject.navigateBack();
//Call the EdgeSubclass Class Methods from EdgeSubclass Object
edgeObject.takeSnap();
edgeObject.clearCookies();