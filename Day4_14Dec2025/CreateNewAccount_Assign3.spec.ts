import {test ,expect} from "@playwright/test"

test('Edit a Lead',async({page})=>{

await page.goto('https://login.salesforce.com/')
await page.getByLabel('Username').fill('dilipkumar.rajendran@testleaf.com ')
await page.getByLabel('Password').fill('TestLeaf@2025')
await page.locator('#Login').click()

await page.waitForTimeout(5000);

let pageTitle = await page.title();
console.log(pageTitle)
await expect(pageTitle).toBe('Home | Salesforce');

let pageUrl = await page.url();
console.log(pageUrl)
await expect(pageUrl).toBe('https://testleaf.lightning.force.com/lightning/page/home');

await page.locator('//div[@class="slds-icon-waffle"]/child::span[@class="slds-assistive-text"]').click()


await page.getByPlaceholder('Search apps and items...').fill('Service')

await page.locator('(//div[@class="slds-grid slds-grid--vertical-align-center al-text-wrapper"]//child::p/b[text()="Service"])[1]').click()

await page.waitForTimeout(5000);

const accountLink = page.locator('a[title="Accounts"]');
await accountLink.waitFor({ state: 'visible' });
await accountLink.click();

await page.waitForTimeout(5000);

const newLink = await page.getByRole('button', { name: "New" })
await newLink.waitFor({ state: 'visible' });
await newLink.click();

//await page.waitForTimeout(5000);

await page.locator('input[name="Name"]').fill('Test Account1')

await page.locator('//button[text()="Save"]').click()

await page.waitForTimeout(5000);

await expect(page.locator('//span[@class="toastMessage slds-text-heading--small forceActionsText"]')).toContainText('was created.');



})