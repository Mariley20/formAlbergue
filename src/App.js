import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import {
    HashRouter,
    Redirect,
    NavLink,
    Route,
    Switch,
    BrowserRouter
} from 'react-router-dom';
import './css/app.css';

import Home from './Home';

const App = ({ selected }) => {
    return (
            <HashRouter>
                <Switch>
                    <Route path="/home" render={() => <Home />} />
                    {/* <Route path = "/details" render = { () => <Details NavBar={NavBar} Information={Information}/>} /> */}
                    <Route path='/formAlbergue' render={() => <Redirect to="/home" />} />
                    <Route exact path="/" render={() => <Home />} />
                </Switch>
            </HashRouter>
    )
}
const mapToProps = ({ selected }) => ({ selected });

export default connect(mapToProps)(App);