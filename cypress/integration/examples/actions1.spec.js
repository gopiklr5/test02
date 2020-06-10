/// <reference  types = "Cypress"/>

describe("suite", ()=>{

before("generic", ()=>{

    cy.visit('https://admin-demo.nopcommerce.com/login');
})

it("test", ()=>{


  //  cy.get('a[id="loginLink"]').click();
    cy.get('input[name="Email"]').should((uname)=>{
        expect(uname).to.have.id('Email')     

    })

    cy.get('input[name="Email"]').should("have.value","admin@yourstore.com");
   
 //   cy.get('input[id="Email"]').type('admin');
    cy.get('input[name="Email"]').should((uname)=>{
        expect(uname).to.have.id('Email')  
        
        expect(uname).to.have.not.same;
        expect(uname).to.include.value('admin@yourstore.com');

    })

})

})

