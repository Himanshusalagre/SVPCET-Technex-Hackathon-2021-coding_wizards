import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Router>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Home} />
        </Switch>

      </Router>
    </React.Fragment>
    );
  }
}

export default App;
