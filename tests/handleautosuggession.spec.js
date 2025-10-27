// const { test, expect } = require("@playwright/test")

// test("Handle Autosuggession", async ({ page }) => {

//     await page.goto("http://google.com")

//     await page.locator("#APjFqb").type("Mukesh Otwani")

//     await page.waitForSelector("//li[@role='presentation']")

//     await page.keyboard.press("ArrowDown")

//     await page.keyboard.press("ArrowDown")

//     await page.keyboard.press("Enter")
// })

// test.only("Handle Loop Autosuggession", async ({ page }) => {

//     await page.goto("http://google.com")

//     await page.locator("#APjFqb").type("Mukesh Otwani")

//     await page.waitForSelector("//li[@role='presentation']")

//     const elements = await page.$$("//li[@role='presentation']")

//     for (let i = 0; i < elements.length; i++) {

//         const text = await elements[i].textContent()

//         if (text.includes("youtube")) {

//             await elements[i].click()
//             break
//         }

//     }

// })