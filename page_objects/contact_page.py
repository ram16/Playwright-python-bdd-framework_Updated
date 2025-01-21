from page_objects.base_page import BasePage


class ContactPage(BasePage):
    def fill_form(self, name: str, email: str, subject: str, message: str):
        self.page.fill('#name', name)
        self.page.fill('#email', email)
        self.page.fill('#subject', subject)
        self.page.fill('#message', message)

    def submit_form(self):
        self.page.click('button[type="submit"]')

    def get_success_message(self):
        return self.page.text_content('.alert-success')

    def get_error_message(self):
        return self.page.text_content('.alert-danger')
