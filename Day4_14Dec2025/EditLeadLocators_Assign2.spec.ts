import {test ,expect } from "@playwright/test"

test('Edit a Lead',async({page})=>{

await page.goto('http://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill('Demosalesmanager')
await page.locator('#password').fill('crmsfa')
await page.locator('.decorativeSubmit').click()

await page.waitForTimeout(5000);

await page.locator('text="CRM/SFA"').click()

await page.waitForTimeout(5000);

await page.locator('text="Leads"').click()

await page.waitForTimeout(5000);

await page.getByRole('link', { name: "Find Leads" }).click()

await page.waitForTimeout(5000);


await page.locator('#ext-gen248').fill('Olivia');
await page.getByRole('button', { name: "Find Leads" }).click()

/*const table = page.locator('.x-grid3-row-table');          // or a specific table selector
const firstCell = table.locator('tr').nth(0)     // nth(0) is header, nth(1) = first data row
                       .locator('td')
                       .nth(0);                 // nth(0) is header, nth(1) = first data column

await firstCell.click();
*/


const firstCell = page.locator('.x-grid3-row-table')
  .first()
  .locator('td')
  .first()
  .getByRole('link')
  .click();


await page.locator('//div[@class="frameSectionExtra"]/a[text()="Edit"]').click();

await page.locator('#updateLeadForm_companyName').fill('Deloitte')
await page.locator('#updateLeadForm_annualRevenue').fill('18LPA')
await page.locator('#updateLeadForm_departmentName').fill('Software Lead')
await page.locator('#updateLeadForm_description').fill('This is a Description1')

await page.locator('//input[@value="Update"]').click()

//Auto-waits until text is visible and checks Whole Content
await expect(page.locator('#viewLead_departmentName_sp')).toHaveText('Software Lead');
await expect(page.locator('#viewLead_description_sp')).toHaveText('This is a Description1');

//Auto-waits until text is visible and checks Contains Text
await expect(page.locator('#viewLead_companyName_sp')).toContainText('Deloitte');
await expect(page.locator('#viewLead_annualRevenue_sp')).toContainText('18');


let title= await page.title()
console.log(title) 

})