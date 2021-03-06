import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteVent } from '../../actions/profile';

const Vent = ({ vent, deleteVent }) => {
  const vents = vent.map(ven => (
    <tr key={ven._id}>
      <td>{ven.title}</td>
      <td className='hide-sm'>{ven.date}</td>
      <td>{ven.vent}</td>
      <td className='hide-sm'>
        <button onClick={() => deleteVent(ven._id)} className='btn btn-danger'>
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='large light-color'>Just Vent It!</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th className='hide-sm'>Date</th>
            <th>Freely Use Your Words</th>
            <th className='hide-sm' />
          </tr>
        </thead>
        <tbody>{vents}</tbody>
      </table>
    </Fragment>
  );
};

Vent.propTypes = {
  vent: PropTypes.array.isRequired,
  deleteVent: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteVent }
)(Vent);
