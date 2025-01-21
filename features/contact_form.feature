
Feature: Contact Form Functionality
  As a user
  I want to use the contact form
  So that I can send messages to the support team

  Scenario: Submit the contact form successfully
    Given I am on the "Contact" page
    When I fill out the contact form with valid data
    And I submit the form
    Then I should see a success message

  Scenario: Submit the contact form with invalid data
    Given I am on the "Contact" page
    When I fill out the contact form with invalid email
    And I submit the form
    Then I should see an error message
