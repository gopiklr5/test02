/// <reference types="cypress" />


describe("My Test Suite", () =>{

    beforeEach("login in",()=>{
        cy.visit('http://eaapp.somee.com/');
        cy.fixture("example").as("user");

    })
  // var tes;

it("my first test", ()=>{   

    cy.contains("Login");

    cy.get('a[id="loginLink"]').then(($x)=>{

        const txt = $x.text();
        cy.get("@user").then((user)=>{
            cy.get('a[id="loginLink"]').click();
            cy.get('input[name="UserName"]').type(txt);
            cy.get('input[name="UserName"]').clear();
            cy.get('input[name="UserName"]').type(user.username);
            cy.get('input[type="password"]').type(txt);
            cy.get('input[type="password"]').clear();
            cy.get('input[type="password"]').type(user.password);
            cy.get('input[value="Log in"]').click();   

        })

      
        cy.get('a').contains('Employee List').click();

       // cy.get('table[class="table"]').find('tr').contains('Karthik').parent().contains('Benefits').click();
        cy.get('table[class="table"]').find('tr').as('rows');
        cy.get('@rows').click({ multiple: true });
        

        
        
        //   const txt = $x.text();
        //     cy.contains("Login", {timeout:3000}).click();
        //     cy.get('#UserName').type(txt);        

        })
})



it.only("second test", ()=>{

    cy.contains("Login").then((txt)=>{
           return txt.text(); 
           // expect(tes).to.eql("Login");
    }).as("tex");

    cy.get('@tex').then(($t)=>{
        expect($t).to.eql("Login");

    })
    

    cy.contains("Login").click();
  
    cy.get('input[name="UserName"]').type('admin');
  
    cy.get('input[type="password"]').type('password');
    cy.get('input[value="Log in"]').click();  
    cy.contains('Employee List').click();
    cy.get('table').find('tr').contains('Karthik').parent().children().eq(5);
    cy.get('table').find('tr').as('rows');

    cy.get('@rows').then((rws)=>{

        cy.get('@user').then((usr)=>{

            cy.wrap(rws).contains(usr.names).parent().contains('Benefits').click();

        })

       
    })


})

} )