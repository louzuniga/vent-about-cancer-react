import React, { Fragment } from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Combines react and redux toget by using Provider
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Nav />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
