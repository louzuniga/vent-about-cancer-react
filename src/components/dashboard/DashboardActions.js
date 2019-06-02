import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-address-card text-primary' /> Edit Profile
      </Link>
      <Link to='/honor-victim' className='btn btn-light'>
        <i className='fas fa-hand-holding-heart text-primary' /> Honor A Victim
      </Link>
      <Link to='/just-vent' className='btn btn-light'>
        <i className='fas fa-pencil-alt text-primary' /> Just Vent
      </Link>
    </div>
  );
};

export default DashboardActions;
