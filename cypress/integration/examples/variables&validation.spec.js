/// <reference types="cypress" />


describe("variable testsuite", ()=>{

    //const $jqElement = Cypress.$('input[name="UserName"]')

  //  const elem1 = () => {'a[id="loginLink"]'}
  
before("login", ()=>{
    cy.visit('http://eaapp.somee.com/');
    cy.fixture('example').as('usr');
  //  const $jqElement = cy.get('input[name="UserName"]');


})


it("variable test",()=>{

 
    
 //   cy.get('a[id="loginLink"]').click();

 // String str = cy.contains('Login').gettext();


    //    cy.contains('Login').then((lg)=>{
    //       return lg.text();
    //      // expect(txt).to.eql('Login');
    //    }).as('txt');


      cy.get('a[id="loginLink"]').then((lg)=>{
                  return lg.text();

       // return lg.text();
       // expect(txt).to.eql('Login');
        }).as('txt');
        cy.contains('Login').click();
      //  $jqElement.type('testing');

        cy.get('@txt').then((ttxt)=>{       
            cy.get('@usr').then(($sr)=>{
              //  $jqElement.type('test')
               cy.get('input[name="UserName"]').type(ttxt);
                cy.get('input[name="UserName"]', {timeout:4000}).should('have.class','form-control');
                cy.get('input[name="UserName"]').should((shd)=>{
                  expect(shd).to.have.class('form-control');
                  expect(shd).to.have.id('UserName');

                })
                cy.get('input[name="UserName"]').type($sr.username);
                cy.get('input[name="Password"]').type(Cypress.env('password'));
                cy.get('input[type="submit"]').click();
                cy.get('a[href="/Employee"]').click();
            })


            cy.get('table').find('tr').contains('Karthik').parent().contains('Benefits');
            cy.get('table').find('tr').as('rows');

            cy.get('@rows').then((rws)=>{

                cy.get('@usr').then((sr)=>{
                    cy.wrap(rws).contains(sr.names).parent().contains('Benefits').click();

                })
               
            })


        })

      

})




})