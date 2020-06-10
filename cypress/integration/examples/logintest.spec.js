/// <reference  types = "Cypress"/>

import LoginPagePOM from '../pageobjects/logintest.js'
//import pcdsLoginPage from '../pageobjects/pcdsLoginPage'

//import * as locators from '../pageobjects/locators.js'

//C:\Users\RamakriG\CypressAuto\cypress\pageobject\locators.js


describe('LoginTest', function () {

  // const cst = new locators();
   

    before(function(){
        
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    const lp = new LoginPagePOM()    
   // const plp = new pcdsLoginPage() 
   // var Experimentid = plp.generateExpid()
  //  var Randid = lp.getRandomArbitrary(200, 800);
  //  var Expid =  Cypress.env("expname")+Randid;
       
    it('verify login', function () {

        
              
       //   lp.Visit
         cy.visit("https://admin-demo.nopcommerce.com/login")
         debugger
        //  locators.Loginbtn()
        // .should('be.visible')
        //  .click();
        
          lp.fillEmail(this.data.usrname)
          lp.fillPassword(this.data.pp)
         // lp.Submit()
         
          cy.title().should('be.equal','Dashboard / nopCommerce administration')

  
      })
      
          })


          
  