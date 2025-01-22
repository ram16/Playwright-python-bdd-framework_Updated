
import { Page } from 'playwright';

export class ContactPage {
  constructor(private page: Page) {}

  async fillForm(formData: { name: string; email: string; subject: string; message: string }) {
    await this.page.fill('#name', formData.name);
    await this.page.fill('#email', formData.email);
    await this.page.fill('#subject', formData.subject);
    await this.page.fill('#message', formData.message);
  }

  async submitForm() {
    await this.page.click('button[type="submit"]');
  }

  async getSuccessMessage() {
    return this.page.textContent('.alert-success');
  }

  async getErrorMessage() {
    return this.page.textContent('.alert-danger');
  }
}
