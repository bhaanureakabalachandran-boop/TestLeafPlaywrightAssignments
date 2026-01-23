import { WebComponentMethods } from "./WebComponentSuperclass";

export class ButtonSubclass extends WebComponentMethods{    

    public click(){
        console.log("Inside CLICK OVERRIDDEN Method");
        console.log(`${this.selector}`);
        
    }    
    
}

//let buttonObject = new ButtonSubclass("Im a Selector from Child Class - ButtonSubclass");
//Call the Parent Class Methods from ButtonSubclass Object
//click() method overrided and display text from child class
//buttonObject.click();
//buttonObject.focus();