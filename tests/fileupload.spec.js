
const {test,expect} = require('@playwright/test')

test('File upload',async function({page}){

    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator("#file-upload").setInputFiles("/file path you need to give/.png   ./upload/image.png")

    await page.locator("#file-submit").click()

    expect(await page.locator("//h3")).toHaveText("File Uploaded")
})
 