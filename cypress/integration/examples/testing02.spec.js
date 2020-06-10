/// <reference  types = "Cypress"/>

import pageobj from '../pageobjects/pageobj.js'
import * as locators from '../pageobjects/locators.js'


describe("", ()=>{


    const pagobj = new pageobj();
    before("Login", ()=>{

        cy.visit('https://admin-demo.nopcommerce.com/login');
    })

    it("", ()=>{


      //  pagobj.visit();
        locators.usernamefield().clear();
        locators.usernamefield().should((usrf)=>{
            expect(usrf).to.have.id('Email');
          //  expect(shd).to.have.id('UserName');
        })
        locators.usernamefield().type('admin@yourstore.com');
        //pagobj.enterusername();
        pagobj.enterpasswd();
        pagobj.clicksubmit();
    //     cy.get('input[name="Email"]').clear();
    //    cy.get('input[name="Email"]').type('admin@yourstore.com');  
    //    cy.get('input[name="Password"]').clear();
    //    cy.get('input[name="Password"]').type('admin');  
    //    cy.get('input[type="submit"]').click();


    })
})