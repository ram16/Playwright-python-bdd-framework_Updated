import pytest
from pytest_bdd import given, when, then
from page_objects.contact_page import ContactPage


@pytest.fixture
def contact_page(page):
    return ContactPage(page)


@given('I am on the "Contact" page')
def visit_contact_page(contact_page):
    contact_page.visit("https://automationintesting.online/#/contact")


@when('I fill out the contact form with valid data')
def fill_form_with_valid_data(contact_page):
    contact_page.fill_form(
        name="Test User",
        email="test@example.com",
        subject="Test Subject",
        message="This is a test message."
    )


@when('I fill out the contact form with invalid email')
def fill_form_with_invalid_data(contact_page):
    contact_page.fill_form(
        name="Test User",
        email="invalid-email",
        subject="Test Subject",
        message="This is a test message."
    )


@when('I submit the form')
def submit_form(contact_page):
    contact_page.submit_form()


@then('I should see a success message')
def verify_success_message(contact_page):
    assert "Thanks for getting in touch" in contact_page.get_success_message()


@then('I should see an error message')
def verify_error_message(contact_page):
    assert "Please provide a valid email address" in contact_page.get_error_message()
