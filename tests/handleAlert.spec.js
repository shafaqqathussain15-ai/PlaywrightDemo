// const {test, expect} = require("@playwright/test")

// test("Handle Alert", async({page})=>{

//     await page.goto("any Link")

//     page.on("dialog",async(d)=>{

//         expect(d.type()).toContain("alert")
//         expect(d.message()).toContain("I am a JS Alert")
//         await d.accept()
//     })

//     await page.locator("Xpath buttom").click()
    

// test("Handle Alert", async({page})=>{

//     await page.goto("any Link")

//     page.on("dialog",async(dialogWidow)=>{

//         expect(dialogWidow.type()).toContain("confirm")

//         expect(dialogWidow.message()).toContain("I am a JS Confirm")

//         // await dialogWidow.accept()
//         await dialogWidow.dismiss()
//     })

//     await page.locator("Xpath buttom").click()

// })



// })