import  { test } from '@playwright/test'

test('Handling Frames ',async({page})=>{

await page.goto("https://www.leafground.com/frame.xhtml");

//Get all Frames and display Count
const allFrames = page.frames();
console.log("Total Number of Frames are:"+allFrames.length);


//Switch to Frames by Index
//const frameSelectByIndex = allFrames()?.[1] ?? null;

//await frameSelectByIndex.locator("//button[text()='Click Me']").click();

//Switch to Frames by FrameLocator - Click "Click Me (Inside frame)" button

await page.frameLocator("(//iframe)[1]").locator("(//button[@id='Click'])[1]").click();
const enteredText1 = await page.frameLocator("(//iframe)[1]").locator("(//button[@id='Click'])[1]").textContent();
console.log(enteredText1);
await page.waitForTimeout(5000);



//Switch to Nested Frames by FrameLocator - Click "Click Me (Inside Nested frame)" button
/*
await page.frameLocator("(//iframe)[3]").frameLocator("//iframe[@id='frame2']").locator("(//button[@id='Click'])[1]").click();
const enteredText2 = await page.frameLocator("(//iframe)[3]").frameLocator("//iframe[@id='frame2']").locator("(//button[@id='Click'])[1]").textContent();
console.log(enteredText2);
await page.waitForTimeout(5000);
*/


//Switch to Frames by FrameObject - Click "Click Me (Inside frame)" button
//object -> url or name -> optional value
/*
await page.frame({url:"https://www.leafground.com/default.xhtml"})?.locator("(//button[@id='Click'])[1]").click();
const enteredText1 = await page.frame({url:"https://www.leafground.com/default.xhtml"})?.locator("(//button[@id='Click'])[1]").textContent();
console.log(enteredText1);
await page.waitForTimeout(5000);
*/

//Switch to Nested Frames by FrameObject - Click "Click Me (Inside Nested frame)" button
//object -> url or name -> optional value
/*
await page.frame({url:"https://www.leafground.com/page.xhtml"})?.frameLocator("//iframe[@id='frame2']").locator("(//button[@id='Click'])[1]").click();
const enteredText1 = await page.frame({url:"https://www.leafground.com/page.xhtml"})?.frameLocator("#frame2").locator("(//button[@id='Click'])[1]").textContent();
console.log(enteredText1);
await page.waitForTimeout(5000);
*/





});


