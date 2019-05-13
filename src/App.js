import React, { Fragment } from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Nav />
      <Route exact path='/' component={Landing} />
      <section>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
