/// <reference  types = "Cypress"/>
import * as locators from '../pageobjects/locators.js'



describe("suite", ()=>{

    before('login', ()=>{
        cy.visit('https://admin-demo.nopcommerce.com/login');

    })


    it("test", ()=>{

        locators.usernamefieldnew().clear()
        locators.usernamefieldnew().type('admin@yourstore.com'); 
        locators.passwordfieldnew().clear()
        locators.passwordfieldnew().type('admin');
        locators.submitbtn().click();
       
    })

})