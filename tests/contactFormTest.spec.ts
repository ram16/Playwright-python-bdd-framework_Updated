
import { test, expect } from '@playwright/test';
import { logTestResult } from '../utils/logger';

test.describe('Contact Form Tests', () => {
  test('Submit valid contact form', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('https://automationintesting.online/#/contact');
    await page.fill('#name', 'Test User');
    await page.fill('#email', 'test@example.com');
    await page.fill('#subject', 'Testing');
    await page.fill('#message', 'This is a test message.');
    await page.click('button[type="submit"]');

    const successMessage = await page.textContent('.alert-success');
    expect(successMessage).toContain('Thanks for getting in touch');

    const duration = Date.now() - startTime;
    logTestResult('Submit valid contact form', 'PASSED', duration);
  });

  test('Submit invalid contact form', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('https://automationintesting.online/#/contact');
    await page.fill('#name', 'Test User');
    await page.fill('#email', 'invalid-email');
    await page.fill('#subject', 'Testing');
    await page.fill('#message', 'This is a test message.');
    await page.click('button[type="submit"]');

    const errorMessage = await page.textContent('.alert-danger');
    expect(errorMessage).toContain('Please provide a valid email address');

    const duration = Date.now() - startTime;
    logTestResult('Submit invalid contact form', 'FAILED', duration);
  });
});
