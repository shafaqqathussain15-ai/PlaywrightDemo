import{test as base , page , expect} from '@playwright/test';

export const test  = base.extend({
    login: async({page}, use) =>{

        await page.goto('https://example.com/login');
        await page.fill('#username', 'user');
        await page.fill('#password', 'pass');
        await page.click('#login');
        
        use(page);
    }
})


import { login } from './fixtures/loginFixture';

await login.goto('https://example.com/dashboard');