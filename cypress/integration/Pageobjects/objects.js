
/// <reference types="cypress" />

const  usernamefield1 = () =>  cy.get('input[name="UserName"]');

class objects {



    

    visit(){

        cy.contains('Login').click();
        // cy.get('input[name="UserName"]').type('admin');
        // cy.get('input[name="Password"]').type('password');
        // cy.get('input[type="submit"]').click();
    }

enterusername(){
    
    usernamefield1().type('admin');
}

enterpaswrd(){
    cy.get('input[name="Password"]').type('password');
}

clickonsubmit(){

    cy.get('input[type="submit"]').click();
}


}
export default objects

