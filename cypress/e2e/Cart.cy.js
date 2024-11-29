///reference types = "cypress"/›
describe ('Cart Functionality' , () =>{
    it ("validate that the user can add products to the shopping cart." , ()=>{
        cy.visit ("https://magento.softwaretestingboard.com/")
        cy.get(".action.showcart").should("be.visible")
        cy.get("#search").should("be.visible")
        cy.get("#search").type("be.visible")
        

    })

})