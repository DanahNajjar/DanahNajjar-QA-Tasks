///reference types = "cypress"/›
describe ('Reviews' , () =>{
    it ("validate that the user can submit a review on the product page." , ()=>{
        cy.visit ("https://magento.softwaretestingboard.com")
        cy.contains("a","Radiant Tee").click()
        cy.contains("a","Reviews").click()
        cy.get("#Rating_4_label").click({force: true })
        cy.get("[name='nickname']").type("JOY")
        cy.get("#summary_field").type("Good quality")
        cy.get("#review_field").type("This item is a very nice pink color and affordable. Even after washing, it remains the same quality.")
        cy.contains("span","Submit Review").click()
        cy.contains("div","You submitted your review for moderation.").should("be.visible")


        
    })
   
  })