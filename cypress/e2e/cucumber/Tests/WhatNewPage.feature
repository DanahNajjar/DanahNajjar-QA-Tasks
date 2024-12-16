Feature: Verify categories in the "What's New" section of the Women menu

  Scenario: Print all categories from the "What's New" Women section
    Given The user navigates to the Magento website
    When Cick On What's New Option
    Then the women categories are available
