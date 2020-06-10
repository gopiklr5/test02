/// <reference  types = "Cypress"/>


class logintest {


Visit(){


    cy.visit("https://admin-demo.nopcommerce.com/login")

}


fillEmail(value)

{
    const field = cy.get('[id=Email]')

    field.clear();
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




}


export default logintest