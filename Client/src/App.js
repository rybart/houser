import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators} from 'redux';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Step1 from './components/Steps/Step1/Step1';
import Step2 from './components/Steps/Step2/Step2';
import Step3 from './components/Steps/Step3/Step3';
import Step4 from './components/Steps/Step4/Step4';
import Step5 from './components/Steps/Step5/Step5';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path = '/dashboard' component = { Dashboard }/>
            <Route path = '/Header' component = { Header }/>
            <Route path = '/wizard/1' component = { Step1 }/>
            <Route path = '/wizard/2' component = { Step2 }/>
            <Route path = '/wizard/3' component = { Step3 }/>
            <Route path = '/wizard/4' component = { Step4 }/>
            <Route path = '/wizard/5' component = { Step5 }/>
            <Route path = '/' component = { Login }/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
