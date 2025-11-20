import { test, expect } from '@playwright/test';

test.describe('Home page customer 01 auth', () => {
    test.use({ storageState: '.auth/customer01.json' });
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/');
    });

    // test('visual test authorized', async ({ page }) => {
    //     await page.waitForLoadState('networkidle');
    //     await expect(page).toHaveScreenshot('home-page-customer01.png', {
    //         mask: [page.getByTitle('Practice Software Testing - Toolshop')],
    //     });
    // });
    test('check customer 01 is signed in', async ({ page }) => {
        await expect(page.getByTestId('nav-sign-in')).not.toBeVisible();
        await expect(page.getByTestId('nav-menu')).toContainText('Jack Howe');
    });
});
