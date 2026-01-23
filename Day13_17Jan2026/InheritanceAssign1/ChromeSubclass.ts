import { BrowserMethods } from "./BrowserSuperclass";

export class ChromeSubclass extends BrowserMethods{    

    public openIncognito(){
        console.log("Inside openIncognito Method");
        console.log(this.browserName);
        console.log(this.browserVersion);
    }
     
    public clearCache(){
        console.log("Inside clearCache Method");
    }
    
}

let chromeObject = new ChromeSubclass();
//Call the Parent Class Methods from ChromeSubclass Object
chromeObject.openURL();
chromeObject.closeBrowser();
chromeObject.navigateBack();
//Call the ChromeSubclass Class Methods from ChromeSubclass Object
chromeObject.openIncognito();
chromeObject.clearCache();
