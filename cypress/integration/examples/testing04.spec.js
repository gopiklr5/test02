/// <reference  types = "Cypress"/>


import * as locators from '../pageobjects/locators.js'
import pageobj from '../pageobjects/pageobj.js'



describe("suitename", ()=>{

    const pageobj1 = new pageobj();


    before("logintowebsite", ()=>{

        cy.visit(Cypress.env("url1"));
    })



    it("test1", ()=>{

       // locators.clickloginbtn().click();

       cy.get('a').contains('Visit now »').should('have.contain', 'testing123');
 
       cy.get('a[id="loginLink"]').should((tst)=>{
           expect(tst).to.contain('Login');
       })
       cy.get('a[id="loginLink"]').click();
        pageobj1.eneterusrname1();
        pageobj1.enterpassword1();
        pageobj1.clickonlogin1();





    })

    // it("test2", ()=>{


    // })



})