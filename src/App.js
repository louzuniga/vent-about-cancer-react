// React Hooks
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Alert from './components/Alert';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-data/CreateProfile';
import EditProfile from './components/profile-data/EditProfile';
import AddVictim from './components/profile-data/AddVictim';
import AddVent from './components/profile-data/AddVent';

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
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute
                exact
                path='/create-profile'
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path='/edit-profile'
                component={EditProfile}
              />
              <PrivateRoute exact path='/honor-victim' component={AddVictim} />
              <PrivateRoute exact path='/just-vent' component={AddVent} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
