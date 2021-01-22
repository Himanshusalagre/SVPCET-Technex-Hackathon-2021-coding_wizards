import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import CalorieCalc from './CalorieCalc'
import Home from './Home';
import HomeHindi from './HomeHindi'

import { Exercise } from './Exercise'

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Router>
      <NavigationBar />
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/CalorieCalc" component={CalorieCalc} />
          <Route exact path="/HomeHindi" component={HomeHindi} />
        </Switch>

      </Router>
    </React.Fragment>
    );
  }
}

export default App;
