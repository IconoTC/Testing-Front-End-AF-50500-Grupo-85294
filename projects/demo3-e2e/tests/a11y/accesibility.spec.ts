import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Demo3 E2E Accessibility Tests', () => {
    test('Check accessibility', async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/');
        // const report = await new AxeBuilder({ page }).analyze();

        const report = await new AxeBuilder({ page })
            .withTags(['wcag2a'])
            .analyze();

        expect(report.violations).toHaveLength(0);
    });
});
