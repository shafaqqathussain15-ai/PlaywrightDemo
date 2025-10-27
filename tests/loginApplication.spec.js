const {test,expect} = require("@playwright/test")
const loginPage = require("../pages/loginPage")

test("Login Applicatioon uning POM",async ({page})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const loginpage = new loginPage(page)

    await loginpage.loginToApplication()
})
