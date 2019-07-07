// React Hooks
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Copyright from './components/Copyright';
import Landing from './components/Landing';
import Routes from './components/routing/Routes';

// Combines react and redux together by using Provider
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
  // should include [] with useEffect if we only want it to run once
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Nav />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>
          <Copyright />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
