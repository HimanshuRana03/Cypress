export class homepage{
    locators={
        search:'input[placeholder="Search"]',
        click_search:'.input-group-btn > .btn',
        product:'img[title="MacBook"]',
        addtocart:'Add to Cart',
        successmsg:'.alert'
    }
    searchproduct(name){
        cy.get(this.locators.search).type(name)
        cy.get(this.locators.click_search).click()
    }
    addtocartfunc(){
        cy.contains(this.locators.addtocart).first().click()
        //jo pheela addtocart hoga usko click karna hai
    }
    verifysuccess()
    {
        return cy.get(this.locators.successmsg)
    }
    
}