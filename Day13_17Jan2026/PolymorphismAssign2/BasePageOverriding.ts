export class BasePageOverriding{  
    
public findElement(){
     console.log("Inside FindElement Method");     
}

public clickElement(){
     console.log("Inside ClickElement Method");
     }

public enterText(){
     console.log("Inside EnterText Method");
     }

public performCommonTasks(){
     console.log("Inside PerformCommonTasks Method");
     }
         
}

let basePageObj = new BasePageOverriding();
//Call the Parent Class Methods from BasePageOverriding Object
basePageObj.findElement();
basePageObj.clickElement();
basePageObj.enterText();
basePageObj.performCommonTasks();