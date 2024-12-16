import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let cartCounter = 0 ; 
Given("The User Navigate to Magento Website",()=>{
    cy.visit ("https://magento.softwaretestingboard.com");
});
When("Cick On Gear Menu and choose watches option",()=>{
    cy.contains("a","Gear").click()
    cy.get("ol.items").contains("a","Watches").click().wait(1500)
    cy.get("#mode-list").first().click();
});
When("Add All Watches With Price > 55 to cart",()=>{
    cy.get(".product-items").first().find("li .price").then((prices)=>{
        for (let i = 0; i < prices.length; i++){
            cy.wrap(prices[i]).invoke('text').then((productPrice)=>{
                let price= productPrice.replace("$","");
                let finalPrice= parseInt(price);
                if (finalPrice>55){
                    cy.wrap(prices[i]).parents(".price-box").next().find("button.tocart").click({force:true})
                    cy.wait(1500)
                    cartCounter++
                }
            })
        }
        
    })
});
Then("The Cart Should Contain The Correct Numbers of Watches",()=>{
    cy.get(".qty").should("contain",cartCounter)
})
