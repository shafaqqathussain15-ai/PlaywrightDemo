const {test,expect0, expect} = require("@playwright/test")

test("Working with multiple tab",async({page})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.getByText("New User? Signup").click()

    await page.waitForLoadState("networkidle")

    const count = await page.locator("//input[@type='checkbox']").count()
   
    expect(count).toBe(5) 
    


})