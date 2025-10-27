const{test,expect}= require('@playwright/test')

test("Select Value from Dropdown", async({page})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    await page.locator("#state").selectOption({label:'Goa'})

    await page.locator("#hobbies").selectOption(["Playing","Swimming"])


    let state = await page.$("#state")

    let allElements = await state.$$("options")           // $$ [retur array of element]
})