import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

const Nav = ({ auth: { isAuthenticated, loading }, logout }) => {
  const guestLinks = (
    <ul>
      <li>
        <Link to='/signup'>Sign Up</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'>
          <i className='fas fa-user-friends' />
          {''}
          <span className='hide-sm'> Community Profiles</span>
        </Link>
      </li>
      <li>
        <Link to='/posts'>
          <i className='fas fa-users' />
          {''}
          <span className='hide-sm'> Community Vents</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />
          {''}
          <span className='hide-sm'> Logout</span>
        </a>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>Vent About Cancer</Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Nav);
