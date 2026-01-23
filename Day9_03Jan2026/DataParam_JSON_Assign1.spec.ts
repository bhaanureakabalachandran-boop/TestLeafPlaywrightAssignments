import LeadInfo from "../../Data/DataParam_JSON.json"

import test from '@playwright/test'

for(let data of LeadInfo){

test(`Read the Value from JSON ${data.TC_NO}`,async({page})=>{

    
        await page.goto('http://leaftaps.com/opentaps/control/main')
        await page.locator("#username").fill(data.UserId)
        await page.locator("#password").fill(data.Password)
        await page.locator('.decorativeSubmit').click()
        
        await page.waitForTimeout(5000);

        await page.locator('text="CRM/SFA"').click()

        await page.waitForTimeout(5000);

        await page.locator('text="Leads"').click()

        await page.waitForTimeout(5000);

        await page.getByRole('link', { name: "Create Lead" }).click()

        await page.waitForTimeout(5000);


        await page.locator('input[id="createLeadForm_companyName"]').fill(data.CompanyName)
        await page.locator('[id="createLeadForm_firstName"]').fill(data.FirstName)
        await page.locator('#createLeadForm_lastName').fill(data.LastName)


        //Select By VisibleText/Label - Source -> Direct Mail
        await page.selectOption('#createLeadForm_dataSourceId',{label:data.Source});

        //Select By Value - Marketing Campaign -> "Demo Marketing Campaign"
        await page.selectOption('#createLeadForm_marketingCampaignId',{value:data.Marketing});

        // Locate the select element by its ID
  const marketingCampaignDropdown = await page.locator('#createLeadForm_marketingCampaignId');

  // Get all option elements within the select dropdown
  const options = await marketingCampaignDropdown.locator('option');

  // Get the count of options
  const count = await options.count();
  console.log(`Total options count: ${count}`);

  // Loop through each option and print its value and text
  for (let i = 0; i < count; i++) {
    const optionText = await options.nth(i).textContent();
    const optionValue = await options.nth(i).getAttribute('value');
    console.log(`Option ${i + 1}: Value = ${optionValue}, Text = ${optionText}`);
  }

        //Select By Index - Industry -> "General Services"
        await page.selectOption('#createLeadForm_industryEnumId',{index:6});

        await page.waitForTimeout(2000);

        //Select By VisibleText/Label - Preferred Currency -> INR - Indian Rupee
        await page.selectOption('#createLeadForm_currencyUomId',{label:data.Currency});

        //Select By VisibleText/Label - Country -> INR - Indian Rupee
        await page.selectOption('#createLeadForm_generalCountryGeoId',{label:data.Country});

        //Select By VisibleText/Label - State -> INR - Indian Rupee
        await page.selectOption('#createLeadForm_generalStateProvinceGeoId',{label:data.State});

        // Locate the select element by its ID
  const stateDropdown = await page.locator('#createLeadForm_generalStateProvinceGeoId');
  
  // Get all option elements within the select dropdown
  const optionState = await stateDropdown.locator('option');
  
  // Get the count of options
  const countState = await optionState.count();
  console.log(`Total options count: ${countState}`);
  
  // Loop through each option and print its value and text
  for (let i = 0; i < countState; i++) {
    const optionTextState = await optionState.nth(i).textContent();
    const optionValueState = await optionState.nth(i).getAttribute('value');
    console.log(`Option ${i + 1}: Value = ${optionTextState}, Text = ${optionValueState}`);
  }


        //await page.waitForTimeout(2000);

        // Locate the element
  const submitButton = page.locator('.smallSubmit');
  
  // Scroll the element into view if it is not already visible
  await submitButton.scrollIntoViewIfNeeded();
  
  // Click on the element
  await submitButton.click();


        //await page.waitForTimeout(5000);


    });

}