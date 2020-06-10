/// <reference  types = "Cypress"/>

import Logintest from '../pageobjects/logintest1.js';
import pcdsLoginPage from '../pageobjects/pcdsLoginPage'

import * as locators from '../pageobjects/locators.js'





describe("mytestsuite", ()=>{


    const loginpage = new Logintest()   
  


    it("mytest", ()=>{

        loginpage.Visit()
        loginpage.fillEmail('admin@yourstore.com')
        loginpage.fillPassword('admin')
        loginpage.Submit()
       


    })
})