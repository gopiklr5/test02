/// <reference types="cypress" />


describe("samplesuite", ()=>{
before("login", ()=>{

cy.visit('http://eaapp.somee.com/');
cy.fixture('example').as('user');
})



it("sampletest", ()=>{


    cy.contains('Login').then((lg)=>{

           return lg.text();
           // expect(txt).to.eql('Login')

    }).as('txt');
    
cy.get('@txt').then(($t)=>{

    expect($t).to.eql('Login');
    cy.contains('Login').click();
     cy.get('input[name="UserName"]').type('admin');
     cy.get('input[name="Password"]').type('password');
     cy.get('input[type="submit"]').click();
     cy.contains('Employee List').click();

     cy.get('@user').then((usr)=>{
        
        cy.get('table').find('tr').contains('John').parent().contains('Benefits');
        cy.get('table').find('tr').as('rows');
        cy.get('@rows').then((rws)=>{
            cy.wrap(rws).contains(usr.names).parent().contains('Benefits').click();

        })
      

     })

    

})

   
})





})