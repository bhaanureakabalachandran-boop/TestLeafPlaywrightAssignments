import { WebComponentMethods } from "./WebComponentSuperclass";

export class TextInputSubclass extends WebComponentMethods{    

    protected value: string = "";
    public enterText(value:string){        
        console.log("Inside ENTERTEXT Method");
        console.log(`${this.selector}`);
        console.log(`${value}`);
        
    }    
    
}

//let textInputObject = new TextInputSubclass("Im a Selector from Child Class - TextInputSubclass");
//Call the Parent Class Methods from TextInputSubclass Object
//click() method NOT overrided and display text from parent class,since that method is not 
//available in current subclass - TextInputSubclass
//textInputObject.click();
//textInputObject.focus();
//Call the TextInputSubclass Class Methods from TextInputSubclass Object
//textInputObject.enterText("This is a Value String in TextInputSubclass");
