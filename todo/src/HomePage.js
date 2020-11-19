"use strict";
import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Reg from './Reg';
import Notes from './Notes';

export default class HomePage extends Component{
    render(){
        return (
            <Router>
            <div>
                <a href = "/notes">Заметки</a>
                <a href = "/registr">Зарегистрироваться</a>                
            </div>
            <Switch>
                 <Route exact path = "/notes" component ={Notes} ></Route>
                 <Route exact path = "/registr" component ={Reg} ></Route>
            </Switch>
            </Router>
        )

    }
}