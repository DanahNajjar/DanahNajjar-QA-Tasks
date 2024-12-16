import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("the user navigates to home page in Magento website", () => {
  cy.visit("https://magento.softwaretestingboard.com/");
});
Then("the products in hot seller section are available", () => {
 cy.get(".product-item-name a").then((products)=>{
    for (let i=0 ; i<products.length ; i++ ){
        cy.wrap(products[i]).invoke("text").then((productname)=>{
            cy.log(productname)
        })
    }
 })
});