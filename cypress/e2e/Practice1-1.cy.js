///reference types = "cypress"/›
describe ('Create An Account' , () =>{
    it ("If all Title Visisble or not" , ()=>{
    cy.visit ("https://magento.softwaretestingboard.com/")
    cy.contains("li","Create an Account").click()
//Titles
    cy.get('[data-ui-id="page-title-wrapper"]').should("be.visible")
    cy.contains("span","Personal Information").should("be.visible")
    cy.get("legend > span").should("be.visible")

//Field Name
    cy.contains("span","First Name").should("be.visible")
    cy.contains("span","Last Name") .should("be.visible")
    cy.contains("span","Email") .should("be.visible")
    cy.contains("span","Password") .should("be.visible")
    cy.contains("span","Confirm Password") .should("be.visible")

//Box Field 
    cy.get("#firstname").should("be.visible")
    cy.get("#lastname").should("be.visible")
    cy.get("#email_address").should("be.visible")
    cy.get("#password").should("be.visible")
    cy.get("#password-confirmation").should("be.visible")

    //Labels 
    cy.get("#password-strength-meter").should("be.visible")

//Button
    cy.contains("span","Create an Account") .should("be.visible")
    cy.get(".action.submit.primary") .should("be.visible")
//Required Field
    cy.get(".fieldset.create.account") .should("have.attr","data-hasrequired","* Required Fields")
})  
    it("check the functionality of creating a new account" , ()=>{
    const emailnum = Math.floor(Math.random()*1000)
    cy.visit ("https://magento.softwaretestingboard.com/")
    cy.contains("li","Create an Account").click()
    cy.get("#firstname").type("Danah")
    cy.get("#lastname").type("Najjar")
    cy.get("#email_address").type("najjar"+emailnum+"danah@gmail.com")
    cy.get("#password").type("MEME@2005")
    cy.get("#password-confirmation").type("MEME@2005")
    cy.contains("span","Create an Account").click()
    cy.wait(1000) //incase of the internet speed was slow
    cy.contains("span","Welcome, Danah Najjar!") .should("be.visible")
    cy.contains("span","My Account") .should("be.visible")
    cy.contains("div","Thank you for registering with Main Website Store.") .should("be.visible")
    cy.url().should("eq","https://magento.softwaretestingboard.com/customer/account/")
})
}) 


