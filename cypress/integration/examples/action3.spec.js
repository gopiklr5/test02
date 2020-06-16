/// <reference types="cypress" />


describe('suite', ()=>{


    before('login', ()=>{

        cy.visit('http://eaapp.somee.com/');
    })


     it('login1', ()=>{
        cy.get('a[id="loginLink"]').should(($link)=>{

            expect($link).to.have.id('loginLink');
            expect($link).to.contain.text('Login');


        });

        cy.get('a[id="loginLink"]').should('be.visible');
        cy.get('a[id="loginLink"]').then(($txt)=>{

            const str = $txt.text();
            cy.get('a[id="loginLink"]').click();
          //  cy.get('input[id="UserName"]').type(str);
          cy.get('input[name="UserName"]').type(str);
        }
       
        )
        
        cy.get('h2').contains('Login.');
        cy.get('input[id="UserName"]');
        cy.get('a').contains('Register as a new user').should(($lnk1)=>{
            expect($lnk1).to.have.prop('href','http://eaapp.somee.com/Account/Register');

        })


        
     })


})