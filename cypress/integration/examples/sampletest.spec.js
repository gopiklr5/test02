/// <reference  types = "Cypress"/>

describe("sampletestsuite", ()=>{



it("sampletest", ()=>{

cy.visit('http://eaapp.somee.com/');
cy.contains('Login').click();

//cy.get('input[name="UserName"]').should('have.class','form-control');
cy.get('input[name="UserName"]',{timeout:5000}).should((usr)=>{
    expect(usr).to.have.class('form-control');
    expect(usr).to.have.id('UserName');
   // cy.get('input[name="UserName"]').type('admin')
    //expect(usr).to.have.type('text');
})
cy.get('input[name="UserName"]').type('admin')

cy.get('input[name="Password"]').should((pwd)=>{
expect(pwd).to.have.id('Password')
//cy.get('input[name="Password"]').type('password')
})

cy.get('label').contains('Remember me?').should('be.visible');
cy.get('a').contains('Register as a new user').should('be.visible');
cy.get('h2').contains('Login.').should('be.visible');

cy.get('input[name="Password"]').type('password');
cy.get('input[type="submit"]').click();

})




})