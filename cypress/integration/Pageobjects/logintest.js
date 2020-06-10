/// <reference  types = "Cypress"/>


export const submitbtn = () => cy.get('input[type="submit"]');

class LoginPagePOM
{


 

Visit(){

    cy.visit("https://admin-demo.nopcommerce.com/login")
}


getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

fillEmail(value){
    const field= cy.get('[id=Email]')
    field.clear()
    field.type(value)
    return this
}

fillPassword(value){
    const field= cy.get('[id=Password]')
    field.clear()
    field.type(value)
    return this
}


Submit(){
    const button= cy.get('[type=submit]')
    button.click()
}


createJobId(){



    
}



}


export default LoginPagePOM