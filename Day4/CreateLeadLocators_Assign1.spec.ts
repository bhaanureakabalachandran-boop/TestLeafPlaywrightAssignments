import  { test, expect } from '@playwright/test'

test('Create a Lead',async({page})=>{

await page.goto('http://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill('Demosalesmanager')
await page.locator('#password').fill('crmsfa')
await page.locator('.decorativeSubmit').click()

await page.waitForTimeout(5000);

await page.locator('text="CRM/SFA"').click()

await page.waitForTimeout(5000);

await page.locator('text="Leads"').click()

await page.waitForTimeout(5000);

await page.getByRole('link', { name: "Create Lead" }).click()

await page.waitForTimeout(5000);


await page.locator('input[id="createLeadForm_companyName"]').fill('Infosys')
await page.locator('[id="createLeadForm_firstName"]').fill('Olivia')
await page.locator('#createLeadForm_lastName').fill('Rogerson')
await page.locator('#createLeadForm_personalTitle').fill('Mrs')
await page.locator('#createLeadForm_generalProfTitle').fill('Senior Engineer')
await page.locator('#createLeadForm_annualRevenue').fill('14LPA')
await page.locator('#createLeadForm_departmentName').fill('Software Industry')
await page.locator('#createLeadForm_primaryPhoneNumber').fill('9876543210')


await page.locator('.smallSubmit').click()

//textContent() can return null, so optional chaining (?.) avoids a crash,
//if value is null it prints undefined
//.trim() removes leading/trailing whitespace.
//toBe("Olivia") asserts an exact match. (Whole Content)
const firstText = await page.locator('#viewLead_firstName_sp').textContent();
expect(firstText?.trim()).toBe("Olivia");
const lastText = await page.locator('#viewLead_lastName_sp').textContent();
expect(lastText?.trim()).toBe("Rogerson");
const statusText = await page.locator('#viewLead_statusId_sp').textContent();
expect(statusText?.trim()).toBe("Assigned");


//textContent() can return null, so optional chaining (?.) avoids a crash,
//if value is null it prints undefined
//.trim() removes leading/trailing whitespace.
//toContain("Olivia") asserts an exact match. (Contains Text)
const actualText1 = await page.locator('#viewLead_companyName_sp').textContent();
expect(actualText1?.trim()).toContain('Infosys');


//Auto-waits until text is visible and checks Whole Content
await expect(page.locator('#viewLead_firstName_sp')).toHaveText('Olivia');
await expect(page.locator('#viewLead_lastName_sp')).toHaveText('Rogerson');
await expect(page.locator('#viewLead_statusId_sp')).toHaveText('Assigned');

//Auto-waits until text is visible and checks Contains Text
await expect(page.locator('#viewLead_companyName_sp')).toContainText('Infosys');

let title= await page.title()
console.log(title)



})