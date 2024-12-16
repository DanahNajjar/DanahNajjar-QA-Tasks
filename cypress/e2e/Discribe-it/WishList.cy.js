///reference types = "cypress"/›
describe ('Wishlist' , () =>{
    beforeEach(()=>{
        cy.log("This is BeforeEach")
        cy.visit ("https://magento.softwaretestingboard.com/")
        cy.contains("a","Sign In").click()
        cy.get("#email").type("s12112896@stu.najah.edu")
        cy.wait(1000)
        cy.get("#pass").type("3tUKPJrGxD#fv6")
        cy.contains("span","Sign In").click()

    
    })
    it ("Validate adding product to  wishlist and take a screenshot for the full page after adding the product to wishlist" , ()=>{
        cy.get("#search").type("Bag")
        cy.get("[aria-label='Search']").click({force: true})
        cy.contains("a","Push It Messenger Bag").click()
        cy.get('.action.towishlist').click()
        cy.screenshot({ capture: "fullPage" })
        cy.get(".page.messages").should("be.visible")

   
    })
   
  })