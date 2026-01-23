import dotenv from'dotenv'
import test from 'playwright/test'

//set the path where env file is present
dotenv.config({path:'Data/DataParam_DEV_ENV.env'})

test("Login with ENV File",async({page})=>{

//process.env.keyName
//process-> global object for node .js
//env-> Enviroment
//keyname-> SF_Username

let url=process.env.Url as string
let uName=process.env.UserId as string
let pass=process.env.Password as string
let company=process.env.CompanyName as string
let firstname=process.env.FirstName as string
let lastname=process.env.LastName as string
let src=process.env.Source as string
let market=process.env.Marketing as string
let indus=process.env.Industry as string
let currency=process.env.Currency as string
let country=process.env.Country as string
let state=process.env.State as string

console.log(url);
console.log(uName);
console.log(pass);
console.log(company);
console.log(firstname);
console.log(lastname);
console.log(src);
console.log(market);
console.log(indus);
console.log(currency);
console.log(country);
console.log(state);

await page.waitForTimeout(2000);


        await page.goto(url)
        await page.locator("#username").fill(uName)
        await page.locator("#password").fill(pass)
        await page.locator('.decorativeSubmit').click()
        
        await page.waitForTimeout(5000);

        await page.locator('text="CRM/SFA"').click()

        await page.waitForTimeout(5000);

        await page.locator('text="Leads"').click()

        await page.waitForTimeout(5000);

        await page.getByRole('link', { name: "Create Lead" }).click()

        await page.waitForTimeout(5000);


        await page.locator('input[id="createLeadForm_companyName"]').fill(company)
        await page.locator('[id="createLeadForm_firstName"]').fill(firstname)
        await page.locator('#createLeadForm_lastName').fill(lastname)


        //Select By VisibleText/Label - Source -> Direct Mail
        await page.selectOption('#createLeadForm_dataSourceId',{label:src});

        //Select By Value - Marketing Campaign -> "Demo Marketing Campaign"
        await page.selectOption('#createLeadForm_marketingCampaignId',{value:market});

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
        await page.selectOption('#createLeadForm_currencyUomId',{label:currency});

        //Select By VisibleText/Label - Country -> INR - Indian Rupee
        await page.selectOption('#createLeadForm_generalCountryGeoId',{label:country});

        //Select By VisibleText/Label - State -> INR - Indian Rupee
        await page.selectOption('#createLeadForm_generalStateProvinceGeoId',{label:state});

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
})