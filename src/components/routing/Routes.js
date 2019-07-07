import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import Alert from '../Alert';
import Dashboard from '../dashboard/Dashboard';
import PrivateRoute from '../routing/PrivateRoute';
import CreateProfile from '../profile-data/CreateProfile';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import EditProfile from '../profile-data/EditProfile';
import AddVictim from '../profile-data/AddVictim';
import AddVent from '../profile-data/AddVent';
import Posts from '../posts/Posts';
import Post from '../post/Post';
// import Copyright from '../../components/Copyright';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/edit-profile' component={EditProfile} />
        <PrivateRoute exact path='/honor-victim' component={AddVictim} />
        <PrivateRoute exact path='/just-vent' component={AddVent} />
        <PrivateRoute exact path='/profiles' component={Profiles} />
        <PrivateRoute exact path='/profile/:id' component={Profile} />
        <PrivateRoute exact path='/posts' component={Posts} />
        <PrivateRoute exact path='/posts/:id' component={Post} />
      </Switch>
    </section>
  );
};

export default Routes;
