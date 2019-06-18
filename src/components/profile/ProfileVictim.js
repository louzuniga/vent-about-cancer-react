import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileVictim = ({ victim: { name, dates, relationship, story } }) => (
  <div>
    <h2 className='text-dark'>{name}</h2>
    <p>
      <strong>R.I.P: </strong>
      <Moment format='MM/DD/YYYY'>{dates}</Moment>
    </p>
    <p>
      <strong>Relationship: </strong> {relationship}
    </p>
    <p>
      <strong>Story: </strong> {story}
    </p>
  </div>
);

ProfileVictim.propTypes = {
  victim: PropTypes.object.isRequired
};

export default ProfileVictim;
