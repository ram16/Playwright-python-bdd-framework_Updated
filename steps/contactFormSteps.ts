
import { Given, When, Then } from '@cucumber/cucumber';
import { Page } from 'playwright';
import { ContactPage } from '../pageObjects/ContactPage';

let page: Page;
let contactPage: ContactPage;

Given('I am on the {string} page', async (pageName: string) => {
  await page.goto('https://automationintesting.online/' + pageName.toLowerCase());
  contactPage = new ContactPage(page);
});

When('I fill out the form with valid data', async () => {
  await contactPage.fillForm({
    name: 'Test User',
    email: 'test@example.com',
    subject: 'Testing',
    message: 'This is a test message.'
  });
});

When('I fill out the form with invalid email', async () => {
  await contactPage.fillForm({
    name: 'Test User',
    email: 'invalid-email',
    subject: 'Testing',
    message: 'This is a test message.'
  });
});

When('I submit the form', async () => {
  await contactPage.submitForm();
});

Then('I should see a success message', async () => {
  const successMessage = await contactPage.getSuccessMessage();
  expect(successMessage).toContain('Thanks for getting in touch');
});

Then('I should see an error message', async () => {
  const errorMessage = await contactPage.getErrorMessage();
  expect(errorMessage).toContain('Please provide a valid email address');
});
