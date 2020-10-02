import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import Inserir from './components/Insert'
import List from './components/List'
import Home from './components/Home'
import Edit from './components/Edit'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Crud</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/insert'} className="nav-link">Inserir</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/list'} className="nav-link">List</Link>
                </li>
              </ul>
            </div>
          </nav>
          <h2>Projeto Crud</h2><br />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/insert' component={Inserir} />
            <Route path='/list' component={List} />
            <Route path='/edit:id' component={Edit} />
          </Switch>
        </div>
      </Router>
    )
  }
}