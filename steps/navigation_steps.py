
from pytest_bdd import given, when, then
from page_objects.home_page import HomePage

@given('I am on the "Home" page')
def visit_home_page(home_page):
    home_page.visit("https://automationintesting.online/")

@when('I click on the "Contact" link')
def click_contact_link(home_page):
    home_page.click_navigation_link("Contact")

@then('I should be on the "Contact" page')
def verify_contact_page(page):
    assert "contact" in page.url
