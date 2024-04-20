import { test, expect } from '@playwright/test';

test.describe('Timer spec', () => {
    test(`should be able to turn on timer`, async ({ page }) => {
        await page.goto(`/testing/Timer/`);
        await page.click('#start');
        await page.click('#stop');
        const time = await page.locator('#display').textContent();
        const seconds = time.split(':');

        console.log(parseFloat(seconds[2]));
        expect(time).not.toEqual('00:00:00.00');
        expect(parseFloat(seconds[2])).toBeGreaterThan(0);
    });
    test(`should be able to stop and resume many times`, async ({ page }) => {
        await page.goto(`/testing/Timer/`);
        await page.click('#start');

        await page.click('#stop');
        await page.click('#resume');
        await page.click('#stop');
        await page.click('#resume');
        await page.click('#stop');
        await page.click('#resume');
        await page.click('#stop');
        await page.click('#resume');
        //await page.click('#stop');
        //await page.click('#resume');

        const time = await page.locator('#display').textContent();
        expect(time).not.toEqual('00:00:00.00');
    });
});