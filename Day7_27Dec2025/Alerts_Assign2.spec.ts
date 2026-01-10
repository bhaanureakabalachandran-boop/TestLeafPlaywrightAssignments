import  { test,expect } from '@playwright/test'

test.only("Handle alert with Page.On",async({page}) =>{

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    page.on('dialog',async(alertType) => {

        const types = alertType.type();
        console.log(types);        

        if(types === 'alert'){
            console.log("Inside Simple Alert");
            console.log(alertType.message());
            await alertType.accept();            
        }
        else if(types === 'confirm'){
            console.log("Inside Confirm Alert");
            console.log(alertType.message());
            await alertType.accept();
        }
        else if(types === 'prompt'){
            console.log("Inside Prompt Alert");
            console.log(alertType.message());
            await alertType.accept("Obuli Thangam");
        }

    });


    //Confirm Alert - Click Ok button in Confirm Alert
    //Confirm Alert below code will be executed 

   //Switch to Frames by FrameLocator - Click "Try it" button
   await page.frameLocator("//iframe[@id='iframeResult']").locator("//button[text()='Try it']").click();

   //Here the code moves to page.on alert function and perform actions on alert

   //Switch to Frames by FrameLocator - Get the "You pressed OK!" text
   const enteredText1 = await page.frameLocator("//iframe[@id='iframeResult']").locator("//p[@id='demo']").textContent();
    console.log(enteredText1);
    expect(enteredText1?.trim()).toBe("You pressed OK!");

    await page.waitForTimeout(5000);

    });