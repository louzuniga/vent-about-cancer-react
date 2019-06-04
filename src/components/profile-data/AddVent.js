import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addVent } from '../../actions/profile';

const AddVent = ({ addVent, history }) => {
  const [formData, setData] = useState({
    title: '',
    date: '',
    vent: ''
  });

  const { title, date, vent } = formData;

  const onChange = e =>
    setData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Just Vent It Out!</h1>
      <form
        className='form'
        onSubmit={e => {
          e.preventDefault();
          addVent(formData, history);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='Title'
            name='title'
            vlaue={title}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='date'
            placeholder='Date'
            name='date'
            vlaue={date}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <textarea
            type='text'
            placeholder='Vent it out!'
            name='vent'
            vlaue={vent}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <a className='btn btn-light my-1' href='/dashboard'>
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

AddVent.propTypes = {
  addVent: PropTypes.func.isRequired
};

export default connect(
  null,
  { addVent }
)(withRouter(AddVent));
