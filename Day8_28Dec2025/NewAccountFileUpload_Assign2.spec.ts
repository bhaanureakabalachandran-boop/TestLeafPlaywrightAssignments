import {test ,expect} from "@playwright/test"

test('Edit a Lead',async({page})=>{

await page.goto('https://login.salesforce.com/')
await page.getByLabel('Username').fill('dilipkumar.rajendran@testleaf.com ')
await page.getByLabel('Password').fill('TestLeaf@2025')
await page.locator('#Login').click()

await page.waitForTimeout(5000);

await page.locator('.slds-button.slds-context-bar__button.slds-icon-waffle_container.slds-show').click()

await page.waitForTimeout(5000);

await page.getByRole('button', { name: 'View All Applications' }).click();

await page.getByPlaceholder('Search apps or items...').fill('Accounts');

await page.locator('//mark[text()="Accounts"]').click()

await page.waitForTimeout(5000);

const newLink = await page.getByRole('button', { name: "New" })
await newLink.waitFor({ state: 'visible' });
await newLink.click();

await page.locator('input[name="Name"]').fill('Test Account1')


//Select By VisibleText/Label - Product Interest -> "WEB"
//await page.selectOption('#Country-1',{label:'United States'});

//Select Type -> "Prospect"
//Click the Type dropdown
await page.getByRole('combobox', { name: 'Type' }).click();

//Click the option "Prospect"
await page.locator("lightning-base-combobox-item[data-value='Prospect']").click();

//Click Industry dropdown
await page.getByRole('combobox', { name: 'Industry' }).click();

//Select Banking
await page.locator("lightning-base-combobox-item[data-value='Banking']").click();

await page.waitForTimeout(5000);

await page.locator('//button[text()="Save"]').click()

//Auto-Retry Assertions - Auto-waits until text is visible and checks Contains Text
await expect(page.locator('//span[@class="toastMessage slds-text-heading--small forceActionsText"]')).toContainText('was created.');



//not having tagname as input and type='file'
//wait until we click on button and find filechooser window

const notesSection = page.getByRole('article', { name: 'Notes & Attachments' });

// Optional: click Upload Files for UI flow
await notesSection.getByRole('button', { name: 'Upload Files' }).click();

// Upload file directly (Playwright auto-waits)
await page.locator('input[type="file"]').setInputFiles(
  'FileUploadDownload/Provider1.jpg'
);

/*

await page.locator("//span[text()='Done']").click();

await page.locator("(//span[text()='View All'])[3]").click();

const fileName1 = await page.locator("//span[@class='itemTitle desktop outputTextOverride uiOutputText'][normalize-space()='Provider2']").textContent();
expect(fileName1?.trim()).toBe("Provider2.jpg");
await page.waitForTimeout(5000);

const fileName2 = await page.locator("//span[@class='itemTitle desktop outputTextOverride uiOutputText'][normalize-space()='Provider1']").textContent();
expect(fileName2?.trim()).toBe("Provider1.jpg");
await page.waitForTimeout(5000);
*/







})