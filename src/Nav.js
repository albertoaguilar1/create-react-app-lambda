import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

import { Link } from 'react-router-dom';


function Nav() {


    return (
        <div class=".col-xs-12 .col-sm-6 .col-md-8" >
            <nav className="nav">
                <img src={logo} className="App-logo" alt="logo"></img>

                <ul className="nav-links">
                    <Link to='/Productos'>
                        <li>Producto</li>
                    </Link>

                    <Link to='/Acerca'>
                        <li>Acerca</li>
                    </Link>
                    <Link to='/Contacto'>
                        <li>Contacto</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );

}




export default Nav;

