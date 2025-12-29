import {test } from "@playwright/test"

test('Edit a Lead',async({page})=>{

await page.goto('https://www.amazon.in/')

await page.locator('//input[@id="twotabsearchtextbox"]').fill('iPhone')

await page.locator('//input[@id="nav-search-submit-button"]').click()

await page.locator('//span[text()="512 GB & above"]').click()

await page.locator('(//button[contains(text(),"Add to cart")])[1]').click();



    })