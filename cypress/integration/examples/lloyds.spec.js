/// <reference  types = "Cypress"/>


describe("suite", ()=>{


    it("test", ()=>{

        cy.visit('https://www.lloydsbank.com/');
        cy.contains('Log on').click(); 
        
        cy.get('ul[id="businesses-nav"]').children().eq(1).find('span').contains('Business').click()

    
    })
})


