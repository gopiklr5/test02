
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"





Given('I enter url', ()=>{

cy.visit('http://eaapp.somee.com/');
}

)

Given('I click on Login btn', ()=>{

    cy.get('a[id="loginLink"]').click();
    }
    
    )

    And('I enter login details with {string} and {string}', (username,password)=>{

        cy.get('input[name="UserName"]').type(username)

        cy.get('input[name="Password"]').type(password)
        }
        
        )

        And('I click on submit btn', ()=>{

            cy.get('input[type="submit"]').click();
            }
            
            )

