import {action, observable, decorate } from "mobx";

class Store {
    login;
    pass;
    passCheck;
    onRegistr(login, password){
        this.login=login;

    }

}
 Store = decorate(Store, {
    login: observable,
    pass: observable,
    passCheck: observable,
    onRegistr: action
})
export default new Store();