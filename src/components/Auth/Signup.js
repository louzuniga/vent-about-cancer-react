import React, { Fragment, useState } from 'react';
// connect - cconnects components to Redux
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { signup } from '../../actions/auth';
import PropTypes from 'prop-types';

// destructure props eg. setAlert properties are pulled from ./actions/alert.js
const Signup = ({ setAlert, signup, isAuthenticated }) => {
  const [dataForm, setForm] = useState({
    name: '',
    email: '',
    password: '',
    samePassword: ''
  });

  const { name, email, password, samePassword } = dataForm;

  const onChange = data =>
    setForm({ ...dataForm, [data.target.name]: data.target.value });

  const onSubmit = async data => {
    data.preventDefault();
    if (password !== samePassword) {
      // called setAlerts that was pulled from Signup props and sent it a message "Password..." and gave it an alert type danger
      setAlert('Passwords does not match', 'danger');
    } else {
      signup({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>Create Your Account</p>
      <form className='form' onSubmit={data => onSubmit(data)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={data => onChange(data)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={data => onChange(data)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='8'
            value={password}
            onChange={data => onChange(data)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='samePassword'
            minLength='8'
            value={samePassword}
            onChange={data => onChange(data)}
            required
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Signup' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

Signup.protoTypes = {
  setAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, signup }
)(Signup);
