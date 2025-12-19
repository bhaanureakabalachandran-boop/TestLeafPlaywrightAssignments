import {test } from "@playwright/test"

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

  




await page.locator('#ext-gen611').click();
   



})