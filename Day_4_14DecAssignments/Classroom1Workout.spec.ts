import { chromium, test } from "@playwright/test";
test("To launch a browser", async () => {

//Choose Chrome Browser with Normal mode
const browserInstance = await chromium.launch({ headless: false, channel:
"chrome" });

//newContext - Open a New Window 
const browserContext = await browserInstance.newContext();

//newPage - Open a New Tab
const page = await browserContext.newPage();

//Goto - Type the URL and page loads
await page.goto("https://login.salesforce.com/?locale=in");

//Implicit wait - 5secs
await page.waitForTimeout(5000);

await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
await page.locator('#password').fill('TestLeaf@2025');

await page.locator('#Login').click();

//Implicit wait - 5secs
await page.waitForTimeout(12000);

let pageTitle = await page.title();
console.log(pageTitle);

await page.locator('.slds-icon-waffle').click();

});