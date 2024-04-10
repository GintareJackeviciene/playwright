import { test, expect } from '@playwright/test';

test.describe('bug test', () => {
    test('bugBook testing', async ({ page }) => {
        await page.goto('https://testingmarathon.com/testing/bugbook/');
        await expect(page.locator('//h1')).toContainText('BugBook');

        page.on('dialog', async (dialog) => {
            const message = dialog.message();
            console.log('message ===', message);
            expect(message).toContain("You've already liked this post!");
            await dialog.accept();
        });

        await page.click('#demo1');
        await page.click('#demo1');
    });
});