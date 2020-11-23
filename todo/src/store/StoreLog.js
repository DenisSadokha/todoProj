import {action, observable, decorate, computed} from "mobx";
import StoreNotes from "./StoreNotes"
let form;
const reqApi="http://localhost:3001/api/Users/login";
  class StoreLog{
      login;
      pass;
      mess;
      isValid;
      signIn(login, pass){
          // this.mess="ошибка входа";
          // this.login = login;
          this.pass=pass;
          form  = {
            email: login,
            password: pass
          }
        
      this.makeRequest(form);
    
      }
    
     async makeRequest(form){
       try{
        const response=  await fetch(reqApi, {
          method: 'POST',
          body: JSON.stringify(form),
          headers:  {
           'Content-Type': 'application/json'
         }
      });
      if (response.ok) {
        this.isValid=true;
        StoreNotes.setAuth(true);
        this.mess='';
        const json = await response.json();
       console.log(json.userId)
        console.log(json);
       } else{
        this.isValid=false;
        this.mess="ошибка входа";

       }

       } catch(error){
        this.isValid=false;
        this.mess="ошибка входа";

       }
      }
      
  }
  StoreLog = decorate(StoreLog, {
    login: observable,
    pass: observable,
    mess: observable,
    isValid: observable,
    signIn: action
})
  export default new StoreLog();
