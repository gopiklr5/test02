/// <reference  types = "Cypress"/>


class pageobj {


    visit(){

        cy.get('input[name="Email"]').clear();
    }


        eneterusrname1(){

            cy.get('input[id="UserName"]').type('admin');
        }


        enterpassword1(){

            cy.get('input[id="Password"]').type('password');
        }

        clickonlogin1(){

            cy.get('input[type="submit"]').click();
        }


    enterusername(){
        cy.get('input[name="Email"]').type('admin@yourstore.com');        
        

    }

    enterpasswd(){

        cy.get('input[name="Password"]').clear();
        cy.get('input[name="Password"]').type('admin');  
        
    }

    clicksubmit(){
        cy.get('input[type="submit"]').click();

    }
}

export default pageobj;