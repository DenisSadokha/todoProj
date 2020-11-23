import {action, observable, decorate } from "mobx";
const regApi = 'http://localhost:3001/api/Users'
let form;
class Store {
    login;
    pass;
    passCheck;
    status;
    onRegistr(login, password, passCheck){
        if(password===passCheck){
        // this.login=login;
        // this.pass=password;
        // this.passCheck=passCheck;
        // this.status="вы зарегистрировались!"
       form = {
           email: login,
           password: password
       }
       this.makeRequest(form)
        } else{
            this.status="пароли не совпадают";
        }
        

    }
   async makeRequest(form){
        try{
      const response=  await fetch(regApi, {
           method: 'POST',
           body: JSON.stringify(form),
           headers:  {
            'Content-Type': 'application/json'
          }
       });
       if (response.ok) {
        const json = await response.json();
        this.status="вы успешно зарегистрировались"
        
       } else{
        this.status="ошибка регистрации"

       }
      return response.ok ? true:false;

    }catch(error){
        this.status="ошибка регистрации"
        return false;
    }

    }    

}
 Store = decorate(Store, {
    login: observable,
    pass: observable,
    passCheck: observable,
    status: observable,
    onRegistr: action
})
export default new Store();