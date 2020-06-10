
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

import * as locators from 'C:/Users/RamakriG/Documents/Automation/projectThree/cypress/integration/Pageobjects/locators.js'
import objects from 'C:/Users/RamakriG/Documents/Automation/projectThree/cypress/integration/Pageobjects/objects.js'


Given('i visit url', ()=>{
cy.visit('http://eaapp.somee.com/');


})
const obj = new objects();

Given('I enter details', ()=>{

    locators.logbtn();
        cy.get('a[id="loginLink"]').click();
        obj.enterusername();
        obj.enterpaswrd();
     
    // cy.contains('Login').click();
    // cy.get('input[name="UserName"]').type('admin');
    // cy.get('input[name="Password"]').type('password');
   

    
})

Then('click on submit', ()=>{

    obj.clickonsubmit();
 
    
})
