import {test,expect} from '@playwright/test'
import * as fs from 'fs';
import * as path from 'path';


//Basic file upload-> directly upload

//tag name -> input and type= file(Direct Upload without Click)
/*
test("Direct Upload the file",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    const file= page.locator("//input[@id='file-upload']")
    // setInputFiles(path)
    await file.setInputFiles("FileUploadDownload/Provider1.jpg")
})
    */


//not having tagname as input and type='file'
//Event Listener - With Click and filechooser
/*
test("Upload File with Event listener",async({page})=>{
await page.goto("https://the-internet.herokuapp.com/upload")
//not having tagname as input and type='file'
//wait until we click on button and find filechooser window
const filechooserPromise=page.waitForEvent('filechooser')
await page.locator("//div[@id='drag-drop-upload']").click()
//fileChooserPromise is a Promise,await resolves it and res now contains the actual FileChooser object
const res=await filechooserPromise
await res.setFiles("FileUploadDownload/Provider2.jpg")

await page.waitForTimeout(5000);

const fileName1 = await page.locator("//div[@class='dz-preview dz-processing dz-image-preview dz-success dz-complete']//child::div[@class='dz-filename']/span").textContent();
expect(fileName1?.trim()).toBe("Provider2.jpg");
await page.waitForTimeout(5000);
})
*/


//File Download -Always happens with event listener "download"
//Download "file.json" from the list of files

test("File Download",async({page})=>{

await page.goto("https://the-internet.herokuapp.com/download")


 // Step 1: Set the download folder (Downlod Folder will be created for 1st time when we execute the code)
 //FileDownload folder created under Day8_28Dec2025
  const downloadPath = path.join(__dirname, 'FileDownload');
  console.log(downloadPath);

  // Ensure folder exists
  if (!fs.existsSync(downloadPath)) {
    fs.mkdirSync(downloadPath);
  }

  console.log("Directory/Folder Exists")

//wait until we click on button and find file to download
const fileDownloadPromise=page.waitForEvent('download')


await page.locator("//a[@href='download/examplefile.json']").click()

//fileDownloadPromise is a Promise,await resolves it and
//fileDownload now contains the actual download object
const fileDownload=await fileDownloadPromise

//Get suggested filename
const fileName = fileDownload.suggestedFilename();
console.log(fileName)
  const filePath = path.join(downloadPath, fileName);
  console.log(filePath)

  // Save file to desired location
  await fileDownload.saveAs(filePath);

  //Assert file exists
  expect(fs.existsSync(filePath)).toBeTruthy();

})
  