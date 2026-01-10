import test from '@playwright/test'

test("Handle Single window",async({page,context})=>{

await page.goto("https://www.leafground.com/window.xhtml")

//perform the action
//create promise
//reslove it
//step 1 - Click on the Open button
await page.locator("//span[text()='Open']").first().click()
//Step 2 - Create a promise and get the child page
const promise=context.waitForEvent('page')
//Step 3 - switch child page -> resolve
const childPage=await promise
//Step 4 - Perform action on child page
await childPage.locator("//input[@placeholder='Search...']").fill("Single Window Script")
await page.waitForTimeout(4000)
childPage.close()
//after close the childpage -> control will pass to parent  automatically
//Click "Open Multiple Window" button
await page.locator("//span[text()='Open Multiple']").click()
await page.waitForTimeout(4000)


})