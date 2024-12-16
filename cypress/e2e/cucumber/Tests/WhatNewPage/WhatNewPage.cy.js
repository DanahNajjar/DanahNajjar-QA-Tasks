import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("The user navigates to the Magento website", () => {
  cy.visit("https://magento.softwaretestingboard.com/")
});
When ("Cick On What's New Option", () => {
    cy.contains("span","What's New").click()
});
Then("the women categories are available", () => {
 cy.get(".items a").then((categories)=>{
    for (let i=0 ; i<categories.length ; i++ ){
        cy.wrap(categories[i]).invoke("text").then((categoriesname)=>{
            cy.log(categoriesname)
        })
    }
 })
});

