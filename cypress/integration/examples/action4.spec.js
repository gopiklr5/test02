///// <reference types="cypress" />


describe('testsuite', ()=>{

before('login1', ()=>{



    cy.visit('/');
    cy.fixture('example').as('data');

})

it('test01', ()=>
{
    // cy.get('#loginLink').click();
    // cy.get('#UserName').and('have.class','form-control').type('admin');
    // cy.xpath('//input[@id="Password"]').type('password');
    // cy.xpath('//input[@value="Log in"]').click();
    cy.login();
    cy.get('a').contains('Log off').click();
    cy.login();
    cy.xpath('//a[contains(text(),"Employee List")]').click();
    cy.get('table').find('tr').find('td').contains('Ramesh').parent().contains('Edit').should('be.visible');

    cy.get('table').find('tr').find('td').as('tdata');
    cy.get('@tdata').then(($tdata)=>{

        cy.get('@data').then(($data)=>{
            cy.wrap($tdata).contains(Cypress.env('name')).parent().contains('Edit').click();


        })
        


    })

})

})