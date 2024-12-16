import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const emailnum = Math.floor(Math.random()*1000)

Given("the user navigates to the reating new accoun page in Magento website", () => {
  cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
});
 When("the user types First Name in the First Name input field", () => {
    cy.get("#firstname").type("Miraaa")
});

When("the user types Last Name in the Last Name input field", () => {
    cy.get("#lastname").type("Najaajar")
});
  
When("the user types Email in the Email input field", () => {
    cy.get("#email_address").type("najjar"+emailnum+"mira@gmail.com")
});

When("the user types Password in the Password input field", () => {
    cy.get("#password").type("C@PG5E4EfMeET@V")
});

When("the user types Confirm Password in the Confirm Password input field", () => {
    cy.get("#password-confirmation").type("C@PG5E4EfMeET@V")
});

When ("the user clicks on the Create an Account button", () => {
    cy.contains("span","Create an Account").click()
});
Then ("the user will be redirected to My Account page", () => {
    cy.contains("span","My Account") .should("be.visible")
});