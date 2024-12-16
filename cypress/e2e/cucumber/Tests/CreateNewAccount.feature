Feature: Check New Account Functionality
  Scenario: Validate creating new account functionality.
    Given the user navigates to the reating new accoun page in Magento website
    When the user types First Name in the First Name input field
    And the user types Last Name in the Last Name input field
    And the user types Email in the Email input field
    And the user types Password in the Password input field
    And the user types Confirm Password in the Confirm Password input field
    And the user clicks on the Create an Account button
    Then the user will be redirected to My Account page


