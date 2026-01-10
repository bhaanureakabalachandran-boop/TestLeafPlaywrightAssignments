import  { test } from '@playwright/test'

test.only("Handle alert with Page.Once",async({page}) =>{

    await page.goto("https://www.leafground.com/alert.xhtml");

    page.once('dialog',async(alertType) => {

        const types = alertType.type();
        console.log(types);        

        if(types === 'alert'){
            console.log("Code2 starts from here");
            console.log(alertType.message());
            await alertType.accept();            
        }
        else if(types === 'confirm'){
            console.log("Code3 starts from here");
            console.log(alertType.message());
            await alertType.accept();
        }
        else if(types === 'prompt'){
            console.log("Code1 starts from goes here");
            console.log(alertType.message());
            await alertType.accept("Obuli Thangam");
        }

    });

   
    //Prompt Alert - Click Show button in Prompt Alert
    //Only Prompt alert code will be executed if we use page.once method
    console.log("Code1 starts from here");
    await page.locator("(//span[text()='Show'])[5]").click();
    const enteredText1 = await page.locator("//span[@id='confirm_result']").textContent();
    console.log(enteredText1);

    await page.waitForTimeout(5000);

    //Simple Alert - Click Show button in Simple Alert
    //Simple Alert below code will be executed but page.once if Simple Alert code will not be executed
    await page.locator("//span[text()='Show']").first().click();
    const enteredText2 = await page.locator("//span[@id='simple_result']").textContent();
    console.log(enteredText2);

    await page.waitForTimeout(5000);

     //Confirm Alert - Click Show button in Confirm Alert
     //Confirm Alert below code will be executed but page.once else if Confirm Alert code will not be executed
     //In Playwright by default,alert will be auto-dismissed (Alert Rejected)
    await page.locator("(//span[text()='Show'])[2]").click();
    const enteredText3 = await page.locator("//span[@id='result']").textContent();
    console.log(enteredText3);   

    await page.waitForTimeout(5000);    

});