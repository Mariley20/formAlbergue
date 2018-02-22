import React, {Component} from 'react';
// import Utils from './Utils.js';
import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom'
import {Row, Col, Alert} from 'react-bootstrap';
import './style.css';
const Home = () => {
    return (
        <div className='form-albergue'>
            <h2 className='title'>Registra un Albergue</h2>
            <Alert bsStyle="info">
                <strong>Estas a cargo de un Albergue y/o refugio!</strong> Tomaremos tus datos para contactar
            </Alert>
            <form className="form-group">
                <Col xs={12}>
                    <div className="input-group">
                        <label>Nombre del Albergue</label>
                        {/* <div className="input-group-btn"> </div> */}
                        <input type="text" className="form-control" aria-label="..."/>
                    </div>
                </Col>
                <Col xs={12}>
                    <div className="input-group">
                        <label>Tel./ Cel.</label>
                        {/* <div className="input-group-btn"> </div> */}
                        <input type="tel" className="form-control" aria-label="..."/>
                    </div>                
                </Col>
                <Col xs={12}>
                    <div className="input-group">
                        <label>Direccion</label>
                        {/* <div className="input-group-btn"> </div> */}
                        <input type="text" className="form-control" aria-label="..."/>
                    </div>                
                </Col>
                <Col xs={12}>
                    <div className="input-group">
                        <label>Distrito/Provincia/Región</label>
                        {/* <div className="input-group-btn"> </div> */}
                        <input type="tel" className="form-control" aria-label="..."/>
                    </div>                
                </Col>
                <Col xs={12}>
                    <div className="input-group">
                        <button type='submit' className='btn btn-primary'>Registrar</button>
                    </div> 
                </Col>
            </form>
        </div>
    )
}

export default Home;