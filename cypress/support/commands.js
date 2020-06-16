// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (email, password) => { 

    // cy.get('#loginLink').should('contain.text', 'Login');
    // cy.get('#loginLink').then(($txt)=>{
    //     return $txt.text();
        

    //}).as('txt');


    cy.get('#loginLink').click();
       // cy.get('@txt').then(($txt)=>{

            cy.get('#UserName').and('have.class','form-control').type('admin');
    cy.xpath('//input[@id="Password"]').type('password');
    cy.xpath('//input[@value="Log in"]').click();
      //  }
        
    //    )
   
 })



