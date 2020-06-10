/// <reference  types = "Cypress"/>

import * as locators from '../pageobjects/locators.js'


describe("suite", ()=>{

    before("login", ()=>{
        cy.visit(Cypress.env('url'));


    })

it("test", ()=>{



    cy.server();

     cy.route({
        method:'POST',
       url:'/Admin/Order/OrderList'
     }).as('usr')

locators.usernamefield().clear();
locators.usernamefieldnew().type('admin@yourstore.com');
locators.passwordfieldnew().clear();
locators.passwordfieldnew().type('admin');
locators.submitbtn().click();



cy.wait('@usr')
  .should('have.property', 'response')


  cy.get('@usr')
  .should((xhr) => {
    //expect(xhr.url).to.match(/\/users$/)
    expect(xhr.method).to.equal('POST')
    // it is a good practice to add assertion messages
    // as the 2nd argument to expect()
    // expect(xhr.response.headers, 'response headers').to.include({
    //   'cf-cache-status': 'DYNAMIC',
    //   'server': 'cloudflare',
    //   'content-type': 'application/json; charset=utf-8'

    expect(xhr.response.body, 'response body').to.include({
       // 'Data':5,
      'draw': '1',
      'recordsFiltered': 5,
      'recordsTotal': 5
      
   // })

// cy.get("@usr").should((xhr)=>{
//     expect(xhr.response.Status).to.eq(200);
// })


})

})
})



})