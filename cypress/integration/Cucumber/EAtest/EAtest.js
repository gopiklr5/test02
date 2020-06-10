
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"



Given('I visit EA site',()=>{
 
    cy.visit("http://eaapp.somee.com/");
 
})

Given('I eneter details',()=>{
 
    cy.contains('Login').click();
    cy.get('input[name="UserName"]').type('admin');
    cy.get('input[name="Password"]').type('password');
   

 
})

Given('I login with details',()=>{
 
    cy.get('input[type="submit"]').click();
    cy.get('a[href="/Employee"]').click();
 
})