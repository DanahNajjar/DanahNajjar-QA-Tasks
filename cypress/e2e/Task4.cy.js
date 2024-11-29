///reference types = "cypress"/›
describe ('Basic Calculator' , () =>{
    it ("Validates the Multiplication Functionality" , ()=>{
    cy.visit ("https://testsheepnz.github.io/BasicCalculator.html")
    cy.get("#number1Field").type(20)
    cy.get("#number2Field").type(1)
    cy.get("#selectOperationDropdown").select("Multiply")
    cy.get("#calculateButton").click()
    cy.get('#numberAnswerField').should('have.value', 20);

    
   
    })
   
  })