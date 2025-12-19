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
await page.goto("https://www.telerik.com/contact");

//Implicit wait - 5secs
//await page.waitForTimeout(15000);

//Select By Index - What can we help you with? -> "Product questions"
await page.selectOption('#Dropdown-1',{index:1});

//Select By Value - Product Interest -> "BUNDLES"
await page.selectOption('#Dropdown-2',{value:'DevCraft'});

//Select By VisibleText/Label - Product Interest -> "WEB"
await page.selectOption('#Country-1',{label:'United States'});

//Implicit wait - 5secs
await page.waitForTimeout(5000);

});