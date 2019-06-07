import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pinwheel from '../pinwheel/Pinwheel';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import DashboardActions from './DashboardActions';
import Victim from './Victim';
import Vent from './Vent';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

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
        <Fragment>
          <DashboardActions />
          <Victim victim={profile.victim} />
          {/* <Vent vent={profile.vent} /> */}

          <div className='my-2'>
            <button className='btn btn-danger' onClick={() => deleteAccount()}>
              <i className='fas fa-user-minus' />Delete My Account
            </button>
          </div>
        </Fragment>
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
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
