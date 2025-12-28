import { register } from "../../pages/register" 
import { homepage } from "../../pages/homepage"
import data from "../../fixtures/registerdata.json";
import logindata from "../../fixtures/logindata.json"
const registerobj = new register();
const homeobj= new homepage();

describe("Automation",()=>{
    before(()=>{
        cy.login(logindata.email,logindata.pass)
    })
    it.skip('register flow',()=>{
        registerobj.openurl()
        registerobj.enterFirstName(data.firstname);
        registerobj.enterLastName(data.lastname)    
        registerobj.enterEmail(data.email);
        registerobj.enterPassword(data.pass)
        registerobj.enterTelephone(data.phone)
        registerobj.entercheckbox()
        registerobj.entercontinue()
        cy.get('h1').should('be.visible')
        registerobj.afterregistercontinue()
    })
    it('addtocart',()=>{
        homeobj.searchproduct('Macbook')
        homeobj.addtocartfunc()
        homeobj.verifysuccess().contains(' Success: You have added ')
    })
})