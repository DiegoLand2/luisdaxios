import React from 'react';

import './App.css';
import { Link, Route, Switch, Router } from "react-router-dom";
import {Nav, Item} from 'react-bootstrap'
import classes from './App.css'

import IndexPage from './components/IndexPage';
import UsersPage from './components/UsersPage';
import UserPage from './components/UserPage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <div className="App">
        <Nav activeKey="/home" className='luisdabi'>
          <Nav.Item>
            <Link to="/" className={'custom'} >Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/about" className={'custom'} >About</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/users" className={'custom'} >Users</Link>
          </Nav.Item>
        </Nav>
        
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/user/:userId" component={UserPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
