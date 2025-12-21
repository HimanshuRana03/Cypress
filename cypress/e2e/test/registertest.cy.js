import { register } from "../../pages/register" 
import data from "../../fixtures/registerdata.json";
const registerobj = new register();
describe("Automation",()=>{
    it('register flow',()=>{
        registerobj.enterFirstName(data.firstname);
        registerobj.enterLastName(data.lastname)    
        registerobj.enterEmail(data.email);
        registerobj.enterPassword(data.pass)
        registerobj.enterTelephone(data.phone)
        registerobj.entercheckbox()
        registerobj.entercontinue()
    })
})