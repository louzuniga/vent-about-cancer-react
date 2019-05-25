// React Hooks
import React, { Fragment, useEffect } from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Combines react and redux toget by using Provider
import { Provider } from 'react-redux';
import store from './store';
import { userAuth } from './actions/auth';
import storeAuthToken from './utils/storeAuthToken';

import './App.css';

if (localStorage.token) {
  storeAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(userAuth());
  }, []);
  // should inlcue [] with useEffect if we only want it to run once
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Nav />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
