"use strict"
import React, {Component} from "react";
import Login from "./Login"
import { Observer, observer } from "mobx-react";

import Login1 from "./Reg"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import store from "./store/StoreNotes"
import storeLog from "./store/StoreLog"



class Notes extends Component{
    render(){
        console.log("NOTES")
        console.log(store.auth)


        if(store.auth){
            return (
                <div>
                    <h1>
                        {storeLog.pass}
                        
                    </h1>
                </div>

            )

        } else{
            return(
                <Router>
                <div>
                    <a href="/login">Войти</a>
                </div>
                <Switch>
                    <Route exact path = "/login" component = {Login}></Route>
                </Switch>
                </Router>

                

            )
        }
    }
   
    

}
export default observer(Notes);
