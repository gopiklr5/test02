/// <reference types="cypress" />


describe('', ()=>{

    before('', ()=>{
      cy.fixture('example').as('data');
      cy.visit(Cypress.env('url1'));

    })

        it('', ()=>{
            cy.title().should('eq','Home - Execute Automation Employee App');
            cy.get('a').contains('Visit now »');


            cy.get('a[id="loginLink"]').should((lgtxt)=>{
                expect(lgtxt).to.have.text('Login')  
                expect(lgtxt).to.have.id('loginLink') 
                expect(lgtxt).to.have.prop('id','loginLink')
             
               
                       
              });

              cy.get('a[id="loginLink"]').then((lgtxt1)=>{
                return lgtxt1.text();
                
              //  cy.get('input[name="UserName"]').type(txt);

                       
              }).as('txt6');

              cy.get('a[id="loginLink"]').click();
        

            

              cy.get('@txt6').then((txt2)=>{
               
                cy.get('@data').then(($data)=>{

                  cy.get('input[name="UserName"]').type($data.username);
                  cy.get('input[name="Password"]').type(Cypress.env('password'));
                  cy.get('input[type="submit"]').should(($btn)=>{

                    expect($btn).to.have.prop('class','btn btn-default')


                  });


                })
                
            

              })



        })


})
