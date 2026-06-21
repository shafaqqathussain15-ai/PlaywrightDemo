// import {test , expect} from "@playwright/test"


// test("API Test Get", async ({request})=>{

//     const response = await request.get("https://the-internet.herokuapp.com/upload");


//     const body =  await response.json();

// })


// test("API Test Post", async ({request})=>{

//     const user = {
//         hello: 'ab',
//         h1: 'bc'
//     }

//     const response = await request.post("https://the-internet.herokuapp.com/upload",{
//         data:user
//     });


//     const body =  await response.json();

// })



import { test as base, expect } from '@playwright/test';
export const test = base.extend({
    login: async({page}, use)=>{
        await page.goto('https://example.com/login');
        await page.fill('#username', 'user');
        await page.fill('#password', 'pass');
        await page.click('#login');
        use(page);
    }
})


const [newPage] = await Promise.all(
    [
        context.waitForEvent('page'),
        page.locator('a[target="_blank"]').click()
    ]
)

await newPage.waitForLoadState();
await page.bringToFront();