import { test, expect } from '@playwright/test'

test.use({viewport:{width:1500,height:1000}})

test('login',async ({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByPlaceholder('Username').type("Admin",{delay:200})

    await page.locator("input[name='password']").type("admin123",{delay:200})

    await page.locator("//button[normalize-space()='Login']").click()

    await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText("profile picture").first().click()

    await page.getByText("Logout").click()


})