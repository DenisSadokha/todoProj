
import {action, observable, decorate } from "mobx";

class StoreNotes{
    auth;
    userId;
    setAuth(auth){
        console.log("AUTHOR")
        this.auth =auth;
    }
    setUserId(userId){
        this.userId=userId;

    }
    
StoreNotes = decorate(StoreNotes, {
    auth: observable,
    userId: observable,
    setAuth: action,
    setUserId: action
})
      
}
export default new StoreNotes();