import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileVictim from './ProfileVictim';
import Pinwheel from '../pinwheel/Pinwheel';
import { getProfileById } from '../../actions/profile';

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Pinwheel />
      ) : (
        <Fragment>
          <Link to='/profiles' className='btn btn-light'>
            Back to user profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to='/edit-profile' className='btn btn-dark'>
                Edit Profile
              </Link>
            )}
          <div className='profile-grid my-1'>
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div className='profile-victim bg-white p-2'>
              <h2 className='text-primary'>Victim Honored</h2>
              {profile.victim.length > 0 ? (
                <Fragment>
                  {profile.victim.map(victim => (
                    <ProfileVictim key={victim._id} victim={victim} />
                  ))}
                </Fragment>
              ) : (
                <h4>No victims mentioned yet...</h4>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProfileById }
)(Profile);
