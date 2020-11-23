"use strict";
import {observer} from "mobx-react"
import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import Reg from './Reg';
import Notes from './Notes';
import HomePage from './HomePage';
import Login from './Login';


export default class Routers extends Component{
    render(){
        return (
            <Router>
            <div>
        <a href="/">Домашняя страница {"\n"}</a>
            </div>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route exact path = "/notes" component ={Notes} ></Route>
                 <Route exact path = "/registr" component ={Reg} ></Route>
                 <Route exact path = "/login" component ={Login} ></Route>
            </Switch>
            </Router>
        )

    }
}