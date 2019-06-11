import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name },
    status,
    location
  }
}) => {
  return (
    <div className='profile bg-light'>
      <h2>{name}</h2>
      <p>{status}</p>
      <p>{location && <span>{location}</span>}</p>
      <Link to={`/profile/${_id}`} className='btn btn-primary'>
        View Profile
      </Link>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
