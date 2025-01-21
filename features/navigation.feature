
Feature: Website Navigation
  As a user
  I want to navigate through the website
  So that I can access various pages

  Scenario: Navigate to the Contact page
    Given I am on the "Home" page
    When I click on the "Contact" link
    Then I should be on the "Contact" page
