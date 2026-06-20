import { test as base, Page, expect } from '@playwright/test';

// Create and export a custom test with fixture
export const test = base.extend<{ login: Page }>({
  login: async ({ page }, use) => {
    // Login steps
    await page.goto('https://example.com/login');
    await page.fill('#username', 'user');
    await page.fill('#password', 'pass');
    await page.click('#login');

    // Expose the logged-in page to tests
    await use(page);
  },
});

// Export expect so tests can use it
export { expect };




// --------------------------------in test case----------------------------------

// import { test, expect } from './fixtures/loginFixture';

// test('dashboard loads after login', async ({ login }) => {
//   await login.goto('https://example.com/dashboard');
//   await expect(login.locator('h1')).toBeVisible();
// });
