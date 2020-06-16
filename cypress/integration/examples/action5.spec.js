/// <reference types="cypress" />

import * as locators from '../pageobjects/locators.js'
import pageobj from '../pageobjects/pageobj.js'



describe('suite', ()=>{

    const pagobj = new pageobj();

    before('genericfunction', ()=>{

        cy.visit('/');

        cy.fixture('example.json').as('userdata');

    })

    it('logintest', () =>{

cy.get('#loginLink').click();
        pagobj.eneterusrname1();
        pagobj.enterpassword1();
        pagobj.clickonlogin1();
     // cy.login();
        
    // cy.get('#loginLink').then(($id)=>{
    //         return  $id.text();

           
    // }).as('txt')


    // locators.clickloginbtn().click();
    // cy.get('@txt').then(($txt)=>{
    //     cy.get('input[id="UserName"]').should(($usrname)=>{

    //         expect($usrname).to.have.id('UserName');
    //         expect($usrname).to.have.prop('name','UserName')
    //         expect($usrname).to.have.prop('type','text')
    //     })

    //     cy.get('@userdata').then(($usrdata)=>{

    //         cy.get('input[id="UserName"]').type($usrdata.username);
    //         cy.get('input[id="Password"]').should('be.visible');
    //         cy.get('input[id="Password"]').type(Cypress.env('password'));

    //     })
       

    // })
    //  cy.get('input[type="submit"]').click();
    //  cy.get('a').contains('Employee List').click();
    //  cy.get('table').find('tr').find('td').contains('Ramesh').parent().contains('Edit');
    //  cy.get('table').find('tr').find('td').as('data');

    //  cy.get('@data').then(($data)=>{

    //     cy.wrap($data).contains('John').parent().contains('Edit').click();

    //  })

    })


})