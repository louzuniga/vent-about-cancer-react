import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Vent About Cancer</h1>
          <p className='lead'>
            "We must embrace pain and burn it as fuel for our journey" -Kenji
            Miyazawa
          </p>
          <p className='lead'>
            This is a place for cancer victims and/or their loved ones who just
            needs to vent it out. Create a profile, customize your profile with
            vent sessions and awesome stories and/or freely post anything you
            desire on the public blog post. Sometimes it helps to let it all out
            and knowing that there are other people going through the same
            emotional toll.{' '}
          </p>
          <div className='buttons'>
            <Link to='/signup' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-primary'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
