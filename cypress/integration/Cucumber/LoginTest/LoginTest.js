
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"





Given('I enter url', ()=>{

cy.visit('http://eaapp.somee.com/');
}

)

Given('I click on Login btn', ()=>{

    cy.get('a[id="loginLink"]').click();
    }
    
    )

    And('I enter login details', ()=>{

        cy.get('input[name="UserName"]').type('admin')

        cy.get('input[name="Password"]').type('password')
        }
        
        )

        And('I click on submit btn', ()=>{

            cy.get('input[type="submit"]').click();
            }
            
            )

