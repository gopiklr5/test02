/// <reference types="cypress" />
//import locators from '../pageobjects/locators.js'
import * as locators from '../pageobjects/locators.js'

import objects from '../pageobjects/objects.js'

describe("suite", ()=>{

    const obj = new objects();
  //  const loct = new locators();

before("login", ()=>{

    cy.visit('http://eaapp.somee.com/');

})

    it("test", ()=>{
        
        obj.visit();
        obj.enterusername();
      //  locators.usernamefield().type('admin');
        obj.enterpaswrd();
        obj.clickonsubmit();
       
    })



})