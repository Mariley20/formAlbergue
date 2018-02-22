import React, {Component} from 'react';
// import Utils from './Utils.js';

import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap';
const Home = () => {
    return (
        <div>
            <h1>Registra un Albergue</h1>
            <form className="form-group">
                <Col xs={12}>
                    <div class="input-group">
                        <label>Nombre del Albergue</label>
                        {/* <div class="input-group-btn"> </div> */}
                        <input type="text" class="form-control" aria-label="..."/>
                    </div>
                </Col>
                <Col xs={12}></Col>
                <Col xs={12}></Col>
            </form>
        </div>
    )
}

export default Home;