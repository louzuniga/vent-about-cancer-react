import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addVictim } from '../../actions/profile';

const AddVictim = ({ addVictim, history }) => {
  const [formData, setData] = useState({
    name: '',
    dates: '',
    relationship: '',
    story: ''
  });

  const { name, dates, relationship, story } = formData;

  const onChange = e =>
    setData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Honor a Cancer Victim</h1>
      <form
        className='form'
        onSubmit={e => {
          e.preventDefault();
          addVictim(formData, history);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            vlaue={name}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='date'
            placeholder='Dates'
            name='dates'
            vlaue={dates}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Relationship'
            name='relationship'
            vlaue={relationship}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <textarea
            type='text'
            placeholder='Write a story'
            name='story'
            vlaue={story}
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

AddVictim.propTypes = {
  addVictim: PropTypes.func.isRequired
};

export default connect(
  null,
  { addVictim }
)(withRouter(AddVictim));
