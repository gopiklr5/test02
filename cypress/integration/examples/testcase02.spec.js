/// <reference types="cypress" />

import * as locators from '../pageobjects/locators.js'
import objects from '../pageobjects/objects.js'

describe("suite", ()=>{


    const obj = new objects();

before("generic", ()=>{

    cy.visit('http://eaapp.somee.com/');


})

    it("test", ()=>{

        locators.logbtn();
        cy.get('a[id="loginLink"]').click();
        obj.enterusername();
        obj.enterpaswrd();
        obj.clickonsubmit();

    })
})