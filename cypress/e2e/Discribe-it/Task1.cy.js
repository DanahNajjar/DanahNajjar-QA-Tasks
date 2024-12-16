///reference types = "cypress"/›
describe ('Sign-Up Page' , () =>{
  it ("Selector - Example" , ()=>{
  cy.visit ("https://demo.productionready.io/#/register")
  cy.get (".navbar-brand")
  cy.get ('[ui-sref="app.home"]').contains ("Home")
  cy.get ('li').get ("li > a").eq(2)
  cy.contains ('h1','Sign up')
  cy.get ('p') .get ("p > a").contains ("Have an account?") 
  cy.get ('[placeholder="Username"]').type ("Danah Najjar") 
  cy.get ('[placeholder="Email"]').type("najjar1234danah@gmail.com")
  cy.get ('[placeholder="Password"]').type("12345678@@")
  cy.get ('[type="submit"]').click()
  cy.get ('.logo-font.ng-binding')
  cy.get (".attribution.ng-binding")


  })
 
})
