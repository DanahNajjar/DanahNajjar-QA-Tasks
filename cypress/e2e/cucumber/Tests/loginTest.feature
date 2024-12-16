Feature: Check Login Functionality

  Scenario: Validate that the user can login successfully
    Given the user navigates to the sign-in page in Magento website
    When the user types email in the email input field
    And the user types password in the password input field
    And the user clicks on the sign-in button
    Then the user will be redirected to the My Account page
