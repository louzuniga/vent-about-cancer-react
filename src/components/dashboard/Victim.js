import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';

const Victim = ({ victim }) => {
  const victims = victim.map(vic => (
    <tr key={vic._id}>
      <td>vic.name</td>
      <td>
        <button className='' btn btn-danger>
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Honor a Victim</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Dates</th>
            <th>Relationship</th>
            <th>Story</th>
            <th />
          </tr>
        </thead>
        <tbody>{victims}</tbody>
      </table>
    </Fragment>
  );
};

Victim.propTypes = {
  victim: PropTypes.array.isRequired
};

export default Victim;
