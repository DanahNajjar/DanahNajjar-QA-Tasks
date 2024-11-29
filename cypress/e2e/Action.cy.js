///reference types = "cypress"/›
//describe ('ACTION LESSON' , () =>{
    //it ("CLICKS" , ()=>{
    //cy.visit ("http://127.0.0.1:5500/actionsLesson.html")
    //cy.get("#btn1").click()
    // cy.get("#btn0").click({force:true})
    //cy.get(".btn").click({multiple:true})
    //cy.get(".btn").click("top",{multiple:true})
    //cy.get('[name="input_0"]').clear({force:true}).type("Danah",{
    // force:true,
    // delay:1000})
    // })
    //})
    
    //describe ('ACTION LESSON' , () =>{
         //it ("type" , ()=>{
         //cy.visit ("https://magento.softwaretestingboard.com")
        // cy.get("#search").clear().type("bag"+"{enter}")
        // cy.get("#search").clear().type("bag{home}")
        // })
         //})

        //describe ('ACTION LESSON' , () =>{
        //it ("Selects" , ()=>{
        //cy.visit ("http://127.0.0.1:5500/actionsLesson.html")
        // cy.get("#country").select("Palestine") //text
        // cy.get("#country").select("jordan_country") //text
        //cy.get("#country").select(0) //index
        //})
        //})
        //describe ('ACTION LESSON' , () =>{
        //it ("check and uncheck" , ()=>{
       // cy.visit ("http://127.0.0.1:5500/actionsLesson.html")
        //cy.get("#Banana").check().uncheck()
        //cy.get('[type="checkbox"]').not("#checkMe").check()
        //cy.reload()
        //cy.get('[type="checkbox"]').not("#checkMe").check(['Nuts','ap','or'])
        //cy.get('[type="checkbox"]').not("#checkMe").check().uncheck(['Nuts','ap','or'])

        //})
        //})
        ///describe ('ACTION LESSON' , () =>{
        //it ("Radio" , ()=>{
        //cy.visit ("http://127.0.0.1:5500/actionsLesson.html")
       // cy.get("#developer").check()
        //cy.reload()
        //cy.get("#tester").check()
         //})
         //})
       // describe ('ACTION LESSON' , () =>{
        //it ("DBCLICKss" ,()=>{
        //cy.visit ("http://127.0.0.1:5500/actionsLesson.html")
        //cy.get("#dbClick").dblclick()
        //})
        //})
        //describe ('ACTION LESSON' , () =>{
       // it ("Focus blur" ,()=>{
        //cy.visit ("http://127.0.0.1:5500/actionsLesson.html")
        //cy.get("#myTextField").focus().blur()
        //cy.get("#myTextField").focus().type("danah")
        //})
       // })
        describe ('ACTION LESSON' , () =>{
        it ("Focus blur" ,()=>{
        cy.visit ("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#trigger_btn").trigger("mouseover")
        cy.reload()

        cy.get("#trigger_btn").trigger("mousedown")
        })
        })