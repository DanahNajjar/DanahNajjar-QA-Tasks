///reference types = "cypress"/›

describe ('Shopping Cart' , () =>{
    beforeEach(()=>{
        cy.log("This is BeforeEach")
        cy.visit ("https://magento.softwaretestingboard.com/")
        cy.get("#search").type("Bag")
        cy.get("[aria-label='Search']").click({force: true})
        cy.contains("a","Push It Messenger Bag").click()
        cy.get("#qty").clear().type(1)
        cy.get('[title="Add to Cart"]').click()
       
    })
    it ("Validate that the user can add products to the shopping cart" , ()=>{
    cy.get(".counter.qty").should('contain','1')
    cy.get("[data-bind='html: $parent.prepareMessageForHtml(message.text)']").should('be.visible')

})

    it ("Validate that the user can delete products from the shopping cart" , ()=>{
    cy.get(".action.showcart").click()
    cy.get('[title="Remove item"]').click({force: true})
    cy.contains("span","OK").click()
    cy.get(".subtitle.empty").should('contain',"You have no items in your shopping cart.")

})
//c-  Create a test case to validate that the user can update products from the shopping cart .
it ("Validate that the user can update products from the shopping cart" , ()=>{
    cy.get(".counter-number").click()
    cy.contains("span","View and Edit Cart").click()
    cy.get('[title="Qty"]').wait(4000).clear().type(2)
    cy.contains("span","Update Shopping Cart").click()
    cy.get(".counter.qty").should('contain',2)
    cy.get('[title="Qty"]').should('have.value','2')
})
})
