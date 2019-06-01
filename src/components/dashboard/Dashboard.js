import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pinwheel from '../pinwheel/Pinwheel';
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Pinwheel />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Hello, {user && user.name}</h1>
      <br />
      <p className='lead'>
        "In order to carry a positive action we must develop here a positive
        vision." -Dalai Lama
      </p>
      {profile !== null ? (
        <Fragment>yes</Fragment>
      ) : (
        <Fragment>
          <p>Please set up your profile</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>{' '}
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
