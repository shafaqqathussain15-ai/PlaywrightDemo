const {test,expect} = require('@playwright/test')

test('Keyboard Event',async function({page}){

    await page.goto("http://google.com")

    await page.locator("//textarea[@id='APjFqb']").type("Mukesh Otwani")

    await page.keyboard.press("Control+A")
    
    await page.keyboard.press("Backspace")

    
})