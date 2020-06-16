
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"



Given('I visit EA site',()=>{
 
    cy.visit("http://eaapp.somee.com/");
 
})

Given('I eneter details',()=>{
 
    cy.contains('Login').click();
   
   //given ('I login as user with {string} and {string}',(username, password) =>{
  //  cy.get('input[name="UserName"]').type(username);
  //  cy.get('input[name="Password"]').type(password);
  //  })

 
})

Given('I login with details', datatable =>{

    datatable.hashes().forEach(row => {
        
  
    cy.get('input[name="UserName"]').type(row.Username);
    cy.get('input[name="Password"]').type(row.Password);
 
    cy.get('input[type="submit"]').click();
    cy.get('a[href="/Employee"]').click();
});
 
})