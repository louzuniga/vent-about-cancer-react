import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteVictim } from '../../actions/profile';

const Victim = ({ victim, deleteVictim }) => {
  const victims = victim.map(vic => (
    <tr key={vic._id}>
      <td>{vic.name}</td>
      <td className='hide-sm'>{vic.dates}</td>
      <td className='hide-sm'>{vic.relationship}</td>
      <td>{vic.story}</td>
      <td className='hide-sm'>
        <button
          onClick={() => deleteVictim(vic._id)}
          className='btn btn-danger'
        >
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
            <th className='hide-sm'>Dates</th>
            <th className='hide-sm'>Relationship</th>
            <th>Story</th>
            <th className='hide-sm' />
          </tr>
        </thead>
        <tbody>{victims}</tbody>
      </table>
    </Fragment>
  );
};

Victim.propTypes = {
  victim: PropTypes.array.isRequired,
  deleteVictim: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteVictim }
)(Victim);
