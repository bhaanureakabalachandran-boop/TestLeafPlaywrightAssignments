import { chromium, test, expect } from "@playwright/test";
test("To launch a browser", async () => {

//Choose Chrome Browser with Normal mode
const browserInstance = await chromium.launch({ headless: false, channel:
"chrome" });

//newContext - Open a New Window 
const browserContext = await browserInstance.newContext();

//newPage - Open a New Tab
const page = await browserContext.newPage();

//Goto - Type the URL and page loads
await page.goto("https://leafground.com/frame.xhtml");

//Switch to Frames by FrameLocator - Click "Click Me (Inside frame)" button

await page.frameLocator("(//iframe)[1]").locator("(//button[@id='Click'])[1]").click();
const enteredText1 = await page.frameLocator("(//iframe)[1]").locator("(//button[@id='Click'])[1]").textContent();
console.log(enteredText1);
expect(enteredText1?.trim()).toBe("Hurray! You Clicked Me.");
await page.waitForTimeout(5000);

//Get all Frames and display Count
const allFrames = page.frames();
console.log("Total Number of Frames are:"+allFrames.length);


//Switch to Nested Frames by FrameLocator - Click "Click Me (Inside Nested frame)" button

await page.frameLocator("(//iframe)[3]").frameLocator("//iframe[@id='frame2']").locator("(//button[@id='Click'])[1]").click();
const enteredText2 = await page.frameLocator("(//iframe)[3]").frameLocator("//iframe[@id='frame2']").locator("(//button[@id='Click'])[1]").textContent();
console.log(enteredText2);
expect(enteredText2?.trim()).toBe("Hurray! You Clicked Me.");
await page.waitForTimeout(5000);


});