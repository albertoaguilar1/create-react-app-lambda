import React, { Component } from "react"

import "./App.css";

import Nav from './Nav';
import Home from './components/Home';
import Productos from './components/Productos';
import Contacto from './components/Contacto';
import Acerca from './components/Acerca';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';





class App extends Component {
  render() {
    return (


      <Router>

        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/Contacto" component={Contacto} />
            <Route path="/Acerca" component={Acerca} />

            <Route path="/Productos" component={Productos} />

          </Switch>
        </div>
      </Router>
    );
  }
}






export default App
