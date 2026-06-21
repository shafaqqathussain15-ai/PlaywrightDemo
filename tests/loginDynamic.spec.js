const { test, expect0, expect } = require("@playwright/test")

const testData = JSON.parse(JSON.stringify(require("../testData.json")))

const testDataDriven = JSON.parse(JSON.stringify(require("../testDataDriven.json")))
    test.setTimeout(0);
test.describe("DataDrivin Login Test", () => {

    for (const data of testDataDriven) {

        test.describe(`Login with user ${data.id}`, () => {

            test("Login to Application", async ({ page }) => {

                await page.goto("https://freelance-learn-automation.vercel.app/login")

                await page.locator("//input[@id='email1']").fill(testData.username)

                await page.locator("//input[@id='password1']").fill(testData.password)

                await page.pause()





            })
        })
    }
})


//stringify: convert JS value to a JSON String.
// parse: convertJSONstring into a Object



    // await page.locator("//input[@id='email1']").fill(testData.address.area)

    // await page.locator("//input[@id='email1']").fill(testData.interest[1])




