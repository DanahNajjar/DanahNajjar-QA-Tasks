import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("the user navigates to the sign-in page in Magento website", () => {
  cy.visit("https://magento.softwaretestingboard.com/customer/account/login");
});
 When("the user types email in the email input field", () => {
    cy.get("#email").type("s12112896@stu.najah.edu")
});

When("the user types password in the password input field", () => {
    cy.get("#pass").type("3tUKPJrGxD#fv6")
  });
  
  When("the user clicks on the sign-in button", () => {
    cy.contains("span","Sign In").click()
});

Then ("the user will be redirected to the My Account page", () => {
    cy.contains("span","My Account").should("be.visible")
});
