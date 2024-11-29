///reference types = "cypress"/›
describe ('assertions LESSON' , () =>{
    it ("visible" , ()=>{
    cy.visit ("https://magento.softwaretestingboard.com")
    //cy.get(".logo").should("be.visible")
    //cy.get("#search").should("be.visible")
    //cy.get(".counter").first().should("not.be.visible")
    //cy.get(".counter").first().should("be.hidden")
    //cy.get(".action.showcart").should("have.attr" , "href")
    //cy.get(".copyright").should("have.css" ,"font-style","normal")
    //cy.get(".copyright").should("have.css" ,"line-height","17.1429px")
    //cy.get(".copyright").should("have.css" ,"color","rgb(255, 255, 255)")
    //cy.get(".action.button").should("have.class","more")
    //cy.contains("span","Shop New Yoga").should("have.class","more")
    //cy.get(".page-main").should("have.id","maincontent")
    //cy.get("div > h2").should("have.text","Hot Sellers")
    //cy.get("div > h2").should("contain","Hot")
    //cy.get("[aria-label='Search']").should('be.disabled')
//not best practice to let the end of assertion begining to new one each assertion is the end to the test case 
    //cy.get("#search").type("Bags").should('be.enabled')
//about counter
    //cy.get(".counter-number").should("exist")
    //cy.get(".counter-number").should("be.hidden")
    //cy.visit ("https://magento.softwaretestingboard.com/hero-hoodie.html")
    //cy.get("#qty").should("have.value",'')//text fail
    //cy.get("#qty").should("have.value",'1')//number pass  
//add
      cy.get(".copyright").should("have.css" ,"font-style","normal")
      .and("have.css" ,"line-height","17.1429px")
      .and("have.css" ,"color","rgb(255, 255, 255)")
    })
    })