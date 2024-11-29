///reference types = "cypress"/›
describe ('Buttons' , () =>{
    it ("GET A Free Trail" , ()=>{
    cy.visit ("https://www.telerik.com/support/demos")
    cy.viewport(1880,880)
    //cy.get('.TK-Button.TK-Button--CTA').click()
    //cy.contains("a","Get A Free Trial").click()
    //cy.get( 'li > a').contains("Get A Free Trial").click()
    })
   
  })