export class WebComponentMethods{

    protected selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

    
public click(){
     console.log("Inside CLICK Method");
     console.log(`${this.selector}`);
}

public focus(){
     console.log("Inside FOCUS Method");
     }
         
}

//let webcomponentObject = new WebComponentMethods("Im a Selector from Parent Class");
//Call the Parent Class Methods from WebComponentSuperclass Object
//webcomponentObject.click();
//webcomponentObject.focus();