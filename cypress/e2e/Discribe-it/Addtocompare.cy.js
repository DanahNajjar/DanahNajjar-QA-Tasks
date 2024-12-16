///reference types = "cypress"/›
describe ('Wishlist' , () =>{
    beforeEach(()=>{
        cy.log("This is BeforeEach")
        cy.visit ("https://magento.softwaretestingboard.com/")
        
    
    })
    it ("Validate adding product to  wishlist and take a screenshot for the full page after adding the product to wishlist" , ()=>{
        cy.get("#search").type("Bag")
        cy.get("[aria-label='Search']").click({force: true})
        cy.contains("a","Push It Messenger Bag").click()
        cy.contains('span','Add to Compare').click()
        cy.get('[role="alert"]').should("be.visible")
    })
   
  })